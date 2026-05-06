import { useParams, Link } from "react-router"; // For navigation between pages and accessing URL parameters
import { planets } from "../data/planets"; // Imports the data
import { useState, useEffect } from "react";

import InfoComponent from "./InfoComponent";

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

  // for hours and minutes formatting
  const hoursText =
    planet.lightTimeHours > 0
      ? `${planet.lightTimeHours} ${planet.lightTimeHours === 1 ? "hour" : "hours"}`
      : "";

  const minutesText =
    planet.lightTimeMin > 0 ? `${planet.lightTimeMin} minutes` : "";

  let separator;
  if (hoursText != "" && minutesText != "") {
    separator = " and ";
  } else {
    separator = "";
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
      <div className="flex items-stretch justify-between min-h-screen p-8 gap-6">
        {/* Left side: Large planet */}
        {/* Styling - flex-1 to take up remaining space, flexbox to center content */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Planet visualization - a large circle with color based on planet data */}
          {/* Styling - fixed width and height of 500px, rounded-full to make it a circle, border with cream color, relative positioning for layering, and overflow hidden to contain any child elements */}
          <div className="w-[550px] h-[550px] rounded-full overflow-hidden relative">
            <img
              src={planet.vectorImage}
              alt={planet.name}
              className={`w-full h-full ${planet.id === "saturn" ? "object-contain" : "object-cover"}`}
            />
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
                        zIndex: index + 10,
                        // Keeps the circle centered relative to the parent
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className="absolute w-full text-rose-950 font-bold text-s text-center px-2"
                        style={{
                          top: "20px", // Positions text at the top of the ring
                        }}
                      >
                        {layer}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* View Planet Layers Checkbox */}
          <div className="absolute bottom-1 right-1 flex flex-row items-center gap-2 bg-black/50 p-4 rounded-xl backdrop-blur-sm border-2 border-cream/30">
            <div className="text-2xl text-cream">View Planet Layers:</div>
            <button
              onClick={() => setShowLayers(!showLayers)}
              className="w-10 h-10 border-4 border-cream flex items-center justify-center bg-black hover:bg-orange transition-colors"
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
        </div>

        {/* Right side: Info dialog - retro styled */}
        {/* Styling - fixed width of 550px, navy blue background, cream border with thickness of 8px, rounded corners, padding of 8 (2rem), relative positioning for layering, max height of 90vh to prevent overflow, and vertical scrollbar if content exceeds max height */}
        <div className="w-[600px] bg-navy-blue border-8 border-cream rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto">
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
              <div className="text-2xl text-cream mb-2">Diameter:</div>
              <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
                {planet.diameter}
              </div>
            </div>
            <div>
              <div className="text-2xl text-cream mb-2">Distance:</div>
              <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
                {planet.distanceFromSun}
                <InfoComponent inputType="auDesc"></InfoComponent>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-center">
              Light takes {hoursText}
              {separator}
              {minutesText} to travel from the Sun to {planet.name}.
            </h2>
          </div>

          {/* Length of Day */}
          {/* Styling - margin bottom of 4 (1rem) for spacing */}
          <div className="mb-4">
            {/* Styling - text size of 2xl (1.5rem), cream color, and margin bottom of 2 (0.5rem) for spacing */}
            <div className="text-2xl text-cream mb-2">Length of Day:</div>
            {/* Styling - cream background, black text, horizontal padding of 3 (0.75rem), vertical padding of 2 (0.5rem), text size of lg (1.125rem), and border of 4px with orange color */}
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.lengthOfDay}
              <InfoComponent inputType="dayLength"></InfoComponent>
            </div>
          </div>

          {/* Length of Year */}
          <div className="mb-4">
            <div className="text-2xl text-cream mb-2">Length of Year:</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.lengthOfYear}
              <InfoComponent inputType="yearLength"></InfoComponent>
            </div>
          </div>

          {/* Tilt */}
          <div className="mb-6">
            <div className="text-2xl text-cream mb-2">Tilt:</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.tilt}
              <InfoComponent inputType="tilt"></InfoComponent>
            </div>
          </div>

          {/* Atmospheric Makeup */}
          <div className="mb-4">
            <div className="text-2xl text-cream mb-2">Atmospheric Makeup:</div>
            <div className="text-1xl mb-2">{planet.atmosphereDescription}</div>
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

          {/* Moons and Rings - two column */}
          <div className="grid grid-cols-2 gap-4 mb-6">
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

          {/* Fun Facts */}
          <div className="mb-6">
            <div className="text-2xl text-cream mb-2">Fun Facts</div>
            <div className="bg-cream text-black px-3 py-2 text-lg border-4 border-orange">
              {planet.funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center bg-cream border-b-4 last:border-b-0 border-orange p-6"
                >
                  <div className="text-5xl text-orange mr-6 flex-shrink-0 w-16">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TARDIS and Doctor at bottom left */}
      <div className="absolute bottom-8 left-8 flex items-end gap-6">
        <img
          src="/The-Doctor-White-Shadow.png"
          alt="The Doctor"
          className="h-50 object-contain"
        />
      </div>
    </div>
  );
}
