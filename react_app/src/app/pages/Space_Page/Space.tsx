import { Link, useNavigate } from "react-router"; // For navigation between pages
import { planets, Planet } from "../../data/planets"; // Planet data for rendering the solar system
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState, useEffect, useMemo } from "react";

import { Controls } from "./Controls";

// import "../../styles/app.css";

// Space page Component
export default function Space() {
  // useState for storing orbit information, zoom level, and whether we're currently zooming in on a planet
  const [rotation, setRotation] = useState(() => {
    const saved = sessionStorage.getItem("solarSystemRotation");
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
      opacity: Math.random() * 0.6 + 0.3,
    }));
  }, []);

  // Planet animation - use requestAnimationFrame to increment planet rotation by 0.8 degrees for every frame
  // For angle calculation - see {/* Planets in orbit */} comment
  useEffect(() => {
    let frameId: number;

    const animate = () => {
      if (!isZooming) {
        setRotation((prev) => prev + 0.03); // smoother increment
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isZooming]);

  const handlePlanetClick = (planet: Planet) => {
    // Stop rotation first and save current position
    setIsZooming(true);
    setClickedPlanetId(planet.id);
    sessionStorage.setItem("solarSystemRotation", rotation.toString());

    // Calculate planet's exact position at current rotation
    // Convert degrees to radians BEFORE using Math.cos/sin
    const angleInRad = rotation * planet.orbitSpeed * (Math.PI / 180);

    const x = Math.cos(angleInRad) * planet.orbitRadius;
    const y = Math.sin(angleInRad) * planet.orbitRadius;

    // Planet position in the 1200px container (center is 600, 600)
    const planetX = 600 + x;
    const planetY = 600 + y;

    // Calculate zoom level needed to make the planet 500px
    // Current planet size is 20-32px, we want 500px
    const currentSize =
      planet.id === "jupiter" || planet.id === "saturn" ? 32 : 20;
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
    <div
      className="min-h-screen bg-black relative overflow-hidden transition-opacity duration-500"
      style={{ opacity: isZooming ? 0 : 1 }}
    >
      {/* Starfield background - completely static */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-700"
        style={{ opacity: isZooming ? 0 : 1 }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-cream rounded-full"
            style={{
              width: star.width + "px",
              height: star.height + "px",
              top: star.top + "%",
              left: star.left + "%",
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className="relative z-50 p-6 flex justify-between items-center transition-opacity duration-700"
        style={{ background: "transparent", opacity: isZooming ? 0 : 1 }}
      >
        <Link to="/">
          <div className="w-16 h-16 bg-navy-blue text-cream border-4 border-cream rounded-lg cursor-pointer hover:bg-cream hover:text-navy-blue transition-colors flex items-center justify-center text-2xl">
            <i className="fa-regular fa-house"></i>
          </div>
        </Link>
        <Link to="/timeline">
          <button className="px-8 py-3 bg-navy-blue text-cream border-4 border-cream rounded-lg hover:bg-cream hover:text-navy-blue transition-colors uppercase tracking-wider">
            Travel to Earth Timeline
          </button>
        </Link>
      </nav>

      <TransformWrapper>
        <Controls isZooming={isZooming} />
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
            zIndex: 30,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: "translateY(-62px)",
            }}
          >
            {/* SOLAR SYSTEM DIV */}
            <div
              className="relative z-10 flex items-center justify-center overflow-hidden"
              style={{ height: "calc(100vh - 100px)" }}
            >
              <div
                className="relative transition-all duration-700 ease-in-out"
                style={{
                  width: "1200px",
                  height: "1200px",
                  transform: isZooming
                    ? `translate(${zoomTarget.x}px, ${zoomTarget.y}px) scale(${zoom})`
                    : `scale(${zoom})`,
                }}
              >
                {/* Sun */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-500 rounded-full border-4 border-cream shadow-[0_0_40px_rgba(255,165,0,0.8)] transition-opacity duration-700"
                  style={{ opacity: isZooming ? 0 : 1 }}
                >
                  <div className="absolute inset-2 bg-cream rounded-full opacity-50"></div>
                </div>

                {/* Planets in orbit */}
                {planets.map((planet) => {
                  const angleInRad =
                    rotation * planet.orbitSpeed * (Math.PI / 180);
                  const x = Math.cos(angleInRad) * planet.orbitRadius;
                  const y = Math.sin(angleInRad) * planet.orbitRadius;

                  const isClickedPlanet = clickedPlanetId === planet.id;
                  const shouldFadeOut = isZooming && !isClickedPlanet;

                  return (
                    <div key={planet.id}>
                      {/* Orbit path */}
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-cream rounded-full transition-opacity duration-700 pointer-events-none"
                        style={{
                          width: planet.orbitRadius * 2 + "px",
                          height: planet.orbitRadius * 2 + "px",
                          opacity: isZooming ? 0 : 0.4,
                        }}
                      />

                      {/* Planet 
                        fix to stop vibration - was calculating left and top position,, and then translating x and y by 50%
                        those two calculations at once caused subtle disagreements, causing planet vibrations
                        transform only calculations moved calc entirely to GPU compositor - browser calculates single operation once and animates without touching layout at all */}

                      <div
                        className="absolute cursor-pointer group transition-opacity duration-700"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          pointerEvents: isZooming ? "none" : "auto",
                          opacity: shouldFadeOut ? 0 : 1,
                          zIndex: Math.round(1000 / planet.orbitRadius),
                        }}
                        onClick={() => handlePlanetClick(planet)}
                      >
                        <div
                          className={`transition-all group-hover:scale-125 ${planet.id === "saturn" ? "" : "rounded-full overflow-hidden"}`}
                          style={{
                            width:
                              planet.id === "saturn"
                                ? "120px"
                                : planet.id === "jupiter"
                                  ? "80px"
                                  : "40px",
                            height:
                              planet.id === "saturn"
                                ? "auto"
                                : planet.id === "jupiter"
                                  ? "80px"
                                  : "40px",
                          }}
                        >
                          <img
                            src={planet.vectorImage}
                            alt={planet.name}
                            className={`w-full h-auto ${planet.id === "saturn" ? "object-contain" : "object-cover"}`}
                          />
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-cream text-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {planet.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* Instructions */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream text-center text-xl transition-opacity duration-700"
        style={{ opacity: isZooming ? 0 : 1 }}
      >
        Click on any planet to learn more!
      </div>
    </div>
  );
}
