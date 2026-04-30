import { useParams, Link } from "react-router"; // For navigation between pages and accessing URL parameters
import { planets } from "../data/planets"; // Imports the data
import { useState, useEffect } from "react";

// Planet Component - shows detailed info about a specific planet
export default function Planet() {
  const { planetId } = useParams();
  const planet = planets.find((p) => p.id === planetId);
  const [showLayers, setShowLayers] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial load
    // Stage 1: Immediately start showing content
    const stage1Timer = setTimeout(() => setAnimationStage(1), 100);

    return () => {
      clearTimeout(stage1Timer);
    };
  }, []);

  // If planet not found, show error message
  if (!planet) {
    return (
      <div className="min-h-screen bg-black text-cream flex items-center justify-center">
        Planet not found
      </div>
    );
  }

  return (
    // Main container with fade-in animation based on animationStage state
    // Styling - background fills entire screen and is black, cream text, relative positioning for layering, overflow hidden to prevent scrollbars from animations, and transition for opacity changes
    <div
      className="min-h-screen bg-black text-cream relative overflow-hidden transition-opacity duration-500"
      style={{ opacity: animationStage >= 1 ? 1 : 0 }}
    >
      {/* Back button */}
      {/* Styling - absolute position at top left, z-index of 50 to be above all other elements */}
      <div className="absolute top-8 left-8 z-50">
        <Link to="/space">
          <button className="px-6 py-3 bg-navy-blue text-cream border-4 border-cream hover:bg-cream hover:text-navy-blue transition-colors uppercase tracking-wider">
            ← Back to Solar System
          </button>
        </Link>
      </div>

      {/* Main layout */}
      {/* Flex container with two columns: left for planet visualization and right for info dialog */}
      <div className="flex items-center justify-between min-h-screen p-8 gap-12">
        {/* Left side: Large planet */}
        {/* Styling - flex-1 to take up remaining space, flexbox to center content */}
        <div className="flex-1 flex items-center justify-center">
          {/* Planet visualization - a large circle with color based on planet data */}
          {/* Styling - fixed width and height of 500px, rounded-full to make it a circle, border with cream color, relative positioning for layering, and overflow hidden to contain any child elements */}
          <div
            className="w-[500px] h-[500px] rounded-full border-8 border-cream relative overflow-hidden"
            style={{
              backgroundColor: planet.color,
            }}
          >
            {/* Planet layers - shown when checkbox is checked */}
            {/* Each layer is a smaller circle with different color and label, positioned absolutely within the planet container */}
            {/* Styling - absolute positioning to stack layers, rounded-full for circles, border with white color, transition for smooth appearance, and different background colors for each layer */}
            {showLayers && (
              <div className="absolute inset-0 flex items-center justify-center">
                {planet.layers.map((layer, index) => {
                  const width = 100 - index * (80 / planet.layers.length);
                  const colors = ["#CD5C5C", "#DAA520", "#F4A460", "#DEB887"];
                  return (
                    <div
                      key={index}
                      className="absolute rounded-full border-4 border-white transition-all duration-500"
                      style={{
                        width: `${width}%`,
                        height: `${width}%`,
                        backgroundColor: colors[index % colors.length],
                      }}
                    >
                      {index === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm text-center px-2">
                          {layer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Planet surface features - hidden when showing layers */}
            {/* Styling - absolute positioning to place features on the planet, different shapes and colors based on planet data, and opacity for a subtle effect */}
            {!showLayers && (
              <>
                {planet.id === "saturn" && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-cream rounded-full opacity-70"
                    style={{ width: "140%", height: "30%" }}
                  />
                )}
                {planet.id === "jupiter" && (
                  <>
                    <div className="absolute top-1/3 left-0 right-0 h-12 bg-orange opacity-40 rounded-full"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-16 bg-cream opacity-30 rounded-full"></div>
                  </>
                )}
                {planet.id === "earth" && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-24 h-20 bg-[#228B22] rounded-full opacity-80"></div>
                    <div className="absolute top-1/2 right-1/4 w-32 h-24 bg-[#228B22] rounded-full opacity-80"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-20 h-16 bg-[#228B22] rounded-full opacity-80"></div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right side: Info dialog - retro styled */}
        {/* Styling - fixed width of 550px, navy blue background, cream border with thickness of 8px, rounded corners, padding of 8 (2rem), relative positioning for layering, max height of 90vh to prevent overflow, and vertical scrollbar if content exceeds max height */}
        <div className="w-[550px] bg-navy-blue border-8 border-cream rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto">
          {/* Planet name as heading */}
          {/* Styling - centered text, font size of 5xl (3rem), orange color, margin bottom of 2rem, uppercase text, wider letter spacing, and serif font */}
          <h1
            className="text-center text-5xl text-orange mb-8 uppercase tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            {planet.name}
          </h1>

          {/* Size and Distance - two column */}
          {/* Styling - grid with two columns, gap of 4 (1rem) between columns, and margin bottom of 6 (1.5rem) */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-2xl text-cream mb-2">Size:</div>
              <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
                {planet.size}
              </div>
            </div>
            <div>
              <div className="text-2xl text-cream mb-2">Distance:</div>
              <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
                {planet.distanceFromSun}
              </div>
            </div>
          </div>

          {/* Length of Day */}
          {/* Styling - margin bottom of 4 (1rem) for spacing */}
          <div className="mb-4">
            {/* Styling - text size of 2xl (1.5rem), cream color, and margin bottom of 2 (0.5rem) for spacing */}
            <div className="text-2xl text-cream mb-2">Length of Day:</div>
            {/* Styling - cream background, black text, horizontal padding of 3 (0.75rem), vertical padding of 2 (0.5rem), text size of lg (1.125rem), and border of 4px with orange color */}
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.lengthOfDay}
            </div>
          </div>

          {/* Length of Year */}
          <div className="mb-4">
            <div className="text-2xl text-cream mb-2">Length of Year:</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.lengthOfYear}
            </div>
          </div>

          {/* Tilt */}
          <div className="mb-6">
            <div className="text-2xl text-cream mb-2">Tilt:</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.tilt}
            </div>
          </div>

          {/* Atmospheric Makeup */}
          <div className="mb-4">
            <div className="text-2xl text-cream mb-2">Atmospheric Makeup:</div>
            <div className="flex flex-wrap gap-2">
              {planet.atmosphere.split(",").map((element, i) => (
                <div
                  key={i}
                  className="bg-cream text-black px-4 py-2 text-sm border-4 border-orange uppercase tracking-wider"
                >
                  {element.trim()}
                </div>
              ))}
            </div>
          </div>

          {/* Temperature Range */}
          <div className="mb-4">
            <div className="text-2xl text-cream mb-2">Temperature Range:</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.temperature}
            </div>
          </div>

          {/* Potential for Life */}
          <div className="mb-6">
            <div className="text-2xl text-cream mb-2">Potential for Life:</div>
            <div className="bg-cream text-black px-3 py-3 text-lg border-4 border-orange">
              {planet.potentialForLife}
            </div>
          </div>

          {/* Surface */}
          <div className="mb-6">
            <div className="text-2xl text-cream mb-2">Surface:</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.surface}
            </div>
          </div>

          {/* View Planet Layers Checkbox */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-2xl text-cream">View Planet Layers:</div>
            <button
              onClick={() => setShowLayers(!showLayers)}
              className="w-12 h-12 border-4 border-cream flex items-center justify-center bg-black hover:bg-orange transition-colors"
            >
              {showLayers && (
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path
                    d="M 5 15 L 12 22 L 25 9"
                    stroke="var(--color-cream)"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Moons and Rings - two column */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl text-cream mb-2">Moons:</div>
              <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange text-center">
                {planet.moons}
              </div>
            </div>
            <div>
              <div className="text-2xl text-cream mb-2">Rings:</div>
              <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange text-center">
                {planet.rings}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TARDIS and Doctor at bottom left */}
      <div className="absolute bottom-8 left-8 flex items-end gap-6">
        {/* TARDIS */}
        <div className="w-24 h-40 bg-navy-blue border-4 border-cream relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-cream"></div>
          <div className="absolute top-8 left-2 right-2 grid grid-cols-2 gap-1">
            <div className="w-full h-8 bg-black opacity-50"></div>
            <div className="w-full h-8 bg-black opacity-50"></div>
          </div>
          <div className="absolute top-20 inset-x-2 bottom-2 border-2 border-cream"></div>
        </div>
        {/* The Doctor */}
        <div className="w-20 h-32 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
            <div className="w-12 h-16 bg-cream mx-auto relative mb-2">
              <div className="absolute -top-2 left-0 right-0 h-4 bg-orange"></div>
              <div className="absolute top-4 left-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-4 right-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-1 bg-black rounded-full"></div>
            </div>
            <div className="w-16 h-24 bg-navy-blue border-4 border-cream mx-auto">
              <div className="w-6 h-2 bg-orange mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
