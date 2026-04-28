import { Link, useNavigate } from "react-router";
import { planets, Planet } from "../data/planets";
import { useState, useEffect, useMemo } from "react";

export default function Space() {
  const [rotation, setRotation] = useState(() => {
    const saved = sessionStorage.getItem('solarSystemRotation');
    return saved ? parseFloat(saved) : 0;
  });
  const [zoom, setZoom] = useState(0.5);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomTarget, setZoomTarget] = useState({ x: 0, y: 0 });
  const [clickedPlanetId, setClickedPlanetId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Generate fixed star positions once
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.3
    }));
  }, []);

  useEffect(() => {
    if (!isZooming) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.2) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isZooming]);

  const handleZoomIn = () => {
    if (!isZooming) {
      setZoom((prev) => Math.min(prev + 0.1, 1.5));
    }
  };

  const handleZoomOut = () => {
    if (!isZooming) {
      setZoom((prev) => Math.max(prev - 0.1, 0.3));
    }
  };

  const handlePlanetClick = (planet: Planet) => {
    // Stop rotation first and save current position
    setIsZooming(true);
    setClickedPlanetId(planet.id);
    sessionStorage.setItem('solarSystemRotation', rotation.toString());

    // Calculate planet's exact position at current rotation
    const angle = (rotation * planet.orbitSpeed) * (Math.PI / 180);
    const x = Math.cos(angle) * planet.orbitRadius;
    const y = Math.sin(angle) * planet.orbitRadius;

    // Planet position in the 1200px container (center is 600, 600)
    const planetX = 600 + x;
    const planetY = 600 + y;

    // Calculate zoom level needed to make the planet 500px
    // Current planet size is 20-32px, we want 500px
    const currentSize = planet.id === 'jupiter' || planet.id === 'saturn' ? 32 : 20;
    const targetSize = 500;
    const zoomLevel = targetSize / currentSize;

    // To center the planet in viewport after zoom
    const translateX = (600 - planetX) * zoomLevel;
    const translateY = (600 - planetY) * zoomLevel;

    setZoomTarget({ x: translateX, y: translateY });
    setZoom(zoomLevel);

    // Navigate to planet page after zoom completes
    setTimeout(() => {
      navigate(`/planet/${planet.id}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden transition-opacity duration-500" style={{ opacity: isZooming ? 0 : 1 }}>
      {/* Starfield background - completely static */}
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-700" style={{ opacity: isZooming ? 0 : 1 }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-cream rounded-full"
            style={{
              width: star.width + 'px',
              height: star.height + 'px',
              top: star.top + '%',
              left: star.left + '%',
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 flex justify-between items-center transition-opacity duration-700" style={{ opacity: isZooming ? 0 : 1 }}>
        <Link to="/">
          <div className="w-16 h-16 bg-navy-blue border-4 border-cream cursor-pointer hover:bg-orange transition-colors flex items-center justify-center text-2xl">
            🏠
          </div>
        </Link>
        <Link to="/timeline">
          <button className="px-8 py-3 bg-orange text-black border-4 border-cream hover:bg-cream hover:text-orange transition-colors uppercase tracking-wider">
            Travel to Earth Timeline
          </button>
        </Link>
      </nav>

      {/* Zoom Controls */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 transition-opacity duration-700" style={{ opacity: isZooming ? 0 : 1 }}>
        <button
          onClick={handleZoomIn}
          className="w-16 h-16 bg-orange text-black border-4 border-cream hover:bg-cream hover:text-orange transition-colors text-3xl flex items-center justify-center"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="w-16 h-16 bg-orange text-black border-4 border-cream hover:bg-cream hover:text-orange transition-colors text-3xl flex items-center justify-center"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      {/* Solar System Orrery */}
      <div className="relative z-10 flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 100px)' }}>
        <div
          className="relative transition-all duration-700 ease-in-out"
          style={{
            width: '1200px',
            height: '1200px',
            transform: isZooming
              ? `translate(${zoomTarget.x}px, ${zoomTarget.y}px) scale(${zoom})`
              : `scale(${zoom})`
          }}
        >
          {/* Sun */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange rounded-full border-4 border-cream shadow-[0_0_40px_rgba(255,165,0,0.8)] transition-opacity duration-700" style={{ opacity: isZooming ? 0 : 1 }}>
            <div className="absolute inset-2 bg-cream rounded-full opacity-50"></div>
          </div>

          {/* Planets in orbit */}
          {planets.map((planet) => {
            const angle = (rotation * planet.orbitSpeed) * (Math.PI / 180);
            const x = Math.cos(angle) * planet.orbitRadius;
            const y = Math.sin(angle) * planet.orbitRadius;

            const isClickedPlanet = clickedPlanetId === planet.id;
            const shouldFadeOut = isZooming && !isClickedPlanet;

            return (
              <div key={planet.id}>
                {/* Orbit path */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-navy-blue rounded-full transition-opacity duration-700"
                  style={{
                    width: planet.orbitRadius * 2 + 'px',
                    height: planet.orbitRadius * 2 + 'px',
                    opacity: isZooming ? 0 : 0.4
                  }}
                />

                {/* Planet */}
                <div
                  className="absolute cursor-pointer group transition-opacity duration-700"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: isZooming ? 'none' : 'auto',
                    opacity: shouldFadeOut ? 0 : 1
                  }}
                  onClick={() => handlePlanetClick(planet)}
                >
                  <div
                    className="rounded-full border-4 border-cream group-hover:border-orange transition-all group-hover:scale-125"
                    style={{
                      width: planet.id === 'jupiter' || planet.id === 'saturn' ? '32px' : '20px',
                      height: planet.id === 'jupiter' || planet.id === 'saturn' ? '32px' : '20px',
                      backgroundColor: planet.color
                    }}
                  >
                    {planet.id === 'saturn' && (
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-cream rounded-full opacity-70"
                        style={{ width: '48px', height: '8px' }}
                      />
                    )}
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-cream text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {planet.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream text-center text-xl transition-opacity duration-700" style={{ opacity: isZooming ? 0 : 1 }}>
        Click on any planet to learn more!
      </div>
    </div>
  );
}
