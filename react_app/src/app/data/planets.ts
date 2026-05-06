export interface Planet {
  id: string;
  name: string;
  diameter: string;
  distanceFromSun: string;
  lengthOfDay: string;
  lengthOfYear: string;
  lightTimeHours: number;
  lightTimeMin: number;
  tilt: string;
  atmosphere: string;
  atmosphereDescription: string;
  temperature: string;
  potentialForLife: string;
  surface: string;
  moons: number;
  rings: number;
  color: string;
  vectorImage: string;
  orbitRadius: number;
  orbitSpeed: number;
  layers: string[];
  funFacts: string[];
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    diameter: "3032 miles (4880 km)",
    distanceFromSun: "0.4 AU",
    lengthOfDay: "59 Earth days",
    lengthOfYear: "88 Earth days",
    lightTimeHours: 0,
    lightTimeMin: 3.2,
    tilt: "2° - does not experience seasons",
    atmosphereDescription: "No Atmosphere - instead, has a thin exosphere",
    atmosphere: "Oxygen, Sodium, Hydrogen, Helium, Potassium",
    temperature: "-290°F to 800°F (-180°C to 430°C)",
    potentialForLife:
      "Mercury's harsh environment likely cannot support life as we know it.",
    surface:
      "Resembles Earth's Moon; scarred by impact craters from collisions with meteoroids and comets",
    moons: 0,
    rings: 0,
    color: "#A0A0A0",
    vectorImage: "/Planet-Images/mercury.png",
    orbitRadius: 80,
    orbitSpeed: 4.8,
    layers: ["Solid crust", "Rocky mantle", "Central core"],
    funFacts: [
      "Mercury has large areas of smooth terrain and also cliffs, some hundreds of miles long and up to a mile high.",
      "There may be water ice at Mercury's north and south poles inside deep craters reached by no sunlight.",
      "Mercury's magnetic field is pretty weak, but it can interact with the magnetic field of the Sun to create intense magnetic tornadoes!",
    ],
  },
  {
    id: "venus",
    name: "Venus",
    diameter: "7,521 miles (12,104 km)",
    distanceFromSun: "0.72 AU",
    lengthOfDay: "243 Earth days",
    lengthOfYear: "225 Earth days",
    lightTimeHours: 0,
    lightTimeMin: 6,
    tilt: "3° - does not experience seasons",
    atmosphereDescription: "Hot and High-Pressure; Mostly Carbon Dioxide",
    atmosphere: "Carbon Dioxide, Nitrogen, Sulfur Dioxide",
    temperature: "Average of 872°F (462°C) - the hottest planet!",
    potentialForLife: "Very low - extreme heat and pressure",
    surface:
      "Relatively young (in geologic terms); extreme volcanoes, towering mountains, and valleys",
    moons: 0,
    rings: 0,
    color: "#FFA500",
    vectorImage: "/Planet-Images/venus.png",
    orbitRadius: 120,
    orbitSpeed: 3.5,
    layers: ["Rocky Crust", "Hot-Rock Mantle", "Iron Core"],
    funFacts: [
      "Venus is Earth's closest planetary neighbor and the brightest object in the sky after the Sun and Moon. It experiences phases just like the Moon does!",
      "Venus has no moons of its own, but it does have a quasi-satellite called Zoozve. A quasi-satellite is an asteroid that orbits the Sun while staying close to a planet. Zoozve is the first identified quasi-satellite of a major planet.",
      "Venus's surface is hot enough to melt lead. Some cool features include Tessarae, land with ridges and grooves that suggest the planet's high temperatures make rock behave like peanut butter beneath a thick chocolate layer.",
    ],
  },
  {
    id: "earth",
    name: "Earth",
    diameter: "7,926 miles (12,756 km)",
    distanceFromSun: "1 AU",
    lengthOfDay: "23.9 hours",
    lengthOfYear: "365.25 days",
    lightTimeHours: 0,
    lightTimeMin: 8,
    tilt: "23.4° - experiences yearly cycle of seasons",
    atmosphereDescription:
      "Affects Earth's long-term and short-term weather, and shields us from harmful space material like meteoroids!",
    atmosphere: "Nitrogen, Oxygen, Argon, Carbon Dioxide, Neon",
    temperature: "59°F (15°C) Average",
    potentialForLife: "High - the only known planet with life!",
    surface:
      "Global ocean covers about 71% surface; land includes volcanoes, mountains, and valleys",
    moons: 1,
    rings: 0,
    color: "#4A90E2",
    vectorImage: "/Planet-Images/earth.png",
    orbitRadius: 160,
    orbitSpeed: 3.0,
    layers: ["Crust", "Mantle", "Outer Core", "Inner Core"],
    funFacts: [
      "Earth is the only planet in the solar system with liquid water on its surface. Almost all of Earth's volcanoes are hidden under the oceans. Earth's longest mountain range is also underwater; it is four times longer than the Andes, Rockies, and Himalayas combined.",
      "Earth's crust is made up of large plates that are constantly moving. When plates grind past each other, ride up under one another, or collide, we get earthquakes!",
      "Earth is the only planet in the solar system with only one moon. The Moon stabilizes our planet's wobble, which has made the climate less variable over thousands of years.",
    ],
  },
  {
    id: "mars",
    name: "Mars",
    diameter: "4,212 miles (6,780 km)",
    distanceFromSun: "1.5 AU",
    lengthOfDay: "24.6 hours",
    lengthOfYear: "687 Earth days",
    lightTimeHours: 0,
    lightTimeMin: 13,
    tilt: "25° - has distinct seasons like Earth",
    atmosphereDescription:
      "Has a thin atmosphere that does not offer much protection from objects like meteorites, asteroids, and comets making impact",
    atmosphere: "Carbon Dioxide, Nitrogen, Argon",
    temperature: "-225°F (-153°C) to 70°F (20°C)",
    potentialForLife:
      "Scientists do not expect to find living things thriving there. Instead, they are looking for signs of life that existed a long time ago when Mars was warmer and covered with water.",
    surface:
      "Colors like brown, gold, and tan; several interesting features due to volcanoes, impact craters, and weather conditions like dust storms",
    moons: 2,
    rings: 0,
    color: "#CD5C5C",
    vectorImage: "/Planet-Images/mars.png",
    orbitRadius: 200,
    orbitSpeed: 2.4,
    layers: ["Crust", "Rocky Mantle", "Dense Core"],
    funFacts: [
      "A Martian day is called a sol - which is short for solar day.",
      "Mars has a vast canyon system called Valles Marineris that is long enough to stretch from California to New York! It also has Olympus Mons, which is the largest volcano in the solar system..",
      "Scientists think that Mars used to be warmer and covered with water. Today, water on Mars is found in the form of water-ice just under the surface in the planet's north and south poles.",
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    diameter: "86,881 miles (139,822 km)",
    distanceFromSun: "5.2 AU",
    lengthOfDay: "9.9 hours",
    lengthOfYear: "4,333 Earth days (12 Earth years)",
    lightTimeHours: 0,
    lightTimeMin: 43,
    tilt: "3° - does not experience seasons",
    atmosphereDescription:
      "Has three distinct cloud layers; Jupiter's fast rotation creates strong wind that separates its clouds into long belts and zones.",
    atmosphere: "Hydrogen, Helium, Ammonia",
    temperature: "-166°F (-110°C) on average",
    potentialForLife:
      "The temperatures, pressures, and materials on Jupiter are most likely too extreme for life to prevail.",
    surface: "Mostly swirling gases and liquids; does not have a true surface",
    moons: 95,
    rings: 4,
    color: "#DAA520",
    vectorImage: "/Planet-Images/jupiter.png",
    orbitRadius: 280,
    orbitSpeed: 1.3,
    layers: [
      "Gas Atmosphere",
      "Liquid Hydrogen",
      "Metallic hydrogen",
      "Central Core",
    ],
    funFacts: [
      "Jupiter is the largest and oldest planet in the solar system.",
      "Jupiter has a Great Red Spot, a giant storm bigger than Earth that has raged for hundreds of years.",
      "While Jupiter itself cannot support life as we know it, its moons, such as Europa, potentially could. Europa is one of the likeliest places to find life elsewhere in our solar system. Scientists believe that a large ocean lies below Europa's icy crust.",
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    diameter: "74,897 miles (120,500 km)",
    distanceFromSun: "9.5 AU",
    lengthOfDay: "10.7 hours",
    lengthOfYear: "10,756 Earth days (29.4 Earth years)",
    lightTimeHours: 1,
    lightTimeMin: 20,
    tilt: "26.73° - experiences seasons like Earth",
    atmosphereDescription: "Blanketed with clouds and strong winds",
    atmosphere: "Hydrogen, Helium",
    temperature: "-220°F (-140°C) on average",
    potentialForLife:
      "Saturn's temperatures, pressures, and materials are likely too extreme to support life as we know it.",
    surface:
      "Gas giant without a true surface; mostly swirling gases and liquids",
    moons: 146,
    rings: 7,
    color: "#F4A460",
    vectorImage: "/Planet-Images/saturn.png",
    orbitRadius: 360,
    orbitSpeed: 1.0,
    layers: [
      "Gas Atmosphere",
      "Liquid Hydrogen",
      "Metallic Hydrogen",
      "Dense Core",
    ],
    funFacts: [
      "Saturn is the farthest planet away from Earth discovered by the human eye - without telescopes or fancy technology!",
      "Saturn's rings are made of billions of small chunks of ice and rock coated with other materials like dust. Each ring orbits at a different speed around the planet.",
      "Saturn is less dense than water, meaning it is not very heavy for its size. It is the only planet in the solar system that could float in a bathtub!",
    ],
  },
  {
    id: "uranus",
    name: "Uranus",
    diameter: "31,763 miles (51,118 km)",
    distanceFromSun: "19 AU",
    lengthOfDay: "17 hours",
    lengthOfYear: "80,687 Earth days (84 Earth years)",
    lightTimeHours: 2,
    lightTimeMin: 42,
    tilt: "97.77° - has the most extreme seasons in the solar system",
    atmosphereDescription: "Very cold and windy",
    atmosphere: "Hydrogen, Helium, Methane, Water, Ammonia",
    temperature: "-224°C average",
    potentialForLife:
      "Very low - temperatures, pressures, and materials are very extreme",
    surface: "No true surface; mostly swirling fluids",
    moons: 28,
    rings: 13,
    color: "#87CEEB",
    vectorImage: "/Planet-Images/uranus.png",
    orbitRadius: 440,
    orbitSpeed: 0.7,
    layers: ["Gas Atmosphere", "Fluid, Icy Materials", "Small Rocky Core"],
    funFacts: [
      'Though often said differently, Uranus is actually pronounced "your-uh-nus"!',
      "Uranus was first seen through a telescope in 1781 by a scientist named William Herschel. At first, Herschel thought it was a comet or star!",
      "Scientists believe Uranus may have crashed into an Earth-sized object long ago, causing its very large tilt.",
    ],
  },
  {
    id: "neptune",
    name: "Neptune",
    diameter: "30,775 miles (49,528 km)",
    distanceFromSun: "30 AU",
    lengthOfDay: "16 hours",
    lengthOfYear: "60,190 Earth days (165 Earth years)",
    lightTimeHours: 4,
    lightTimeMin: 0,
    tilt: "28° - experiences seasons",
    atmosphereDescription: "The windiest atmosphere in the solar system",
    atmosphere: "Hydrogen, Helium, Methane",
    temperature: "-214°C average",
    potentialForLife:
      "Very low - temperatures, pressures, and materials most likely to extreme for life to prevail",
    surface:
      "No solid surface; atmosphere extends to great depths, gradually merging into water and other melted ices",
    moons: 16,
    rings: 5,
    color: "#4169E1",
    vectorImage: "/Planet-Images/neptune.png",
    orbitRadius: 520,
    orbitSpeed: 0.5,
    layers: ["Small rocky core", "Fluid, Icy Materials", "Gas Atmosphere"],
    funFacts: [
      "Neptune is the first planet that was discovered through mathematical predictions rather than through regular observations of the sky.",
      "Scientists think that there might be an ocean of super hot water under Neptune's cold clouds. Very high pressure keeps the water locked inside.",
      "Neptune is the windiest planet in the solar system! Its winds can be faster than 1200 miles per hour (2000 km per hour) - three times stronger than Jupiter's winds, and nine times stronger than Earth's.",
    ],
  },
  {
    id: "pluto",
    name: "Pluto",
    diameter: "1,477 miles (2,377 km)",
    distanceFromSun: "5.9 billion km",
    lengthOfDay: "6.4 Earth days",
    lengthOfYear: "248 Earth years",
    lightTimeHours: 5,
    lightTimeMin: 30,
    tilt: "57° - experiences seasons",
    atmosphereDescription: "Very thin",
    atmosphere: "Nitrogen, Methane, Carbon Dioxide",
    temperature:
      "-375°F (-225°C) on average, though temperatures can get as cold as -375°F to -400°F (-226°C to -240°C)",
    potentialForLife:
      "Unlikely that life could exist there - the surface is extremely cold - but the interior is warmer",
    surface: "Rocky and icy with mountains, valleys, plains, and craters.",
    moons: 5,
    rings: 0,
    color: "#C4A484",
    vectorImage: "/Planet-Images/pluto.png",
    orbitRadius: 600,
    orbitSpeed: 0.4,
    layers: ["Rocky Core", "Water Ice Mantle", "Icy Crust"],
    funFacts: [
      "Pluto used to be thought of as the ninth planet of the solar system, but in 2006, scientists labelled it as a \
      dwarf planet instead. A dwarf planet is an object in orbit around the Sun that is large enough to pull itself into a \
      nearly round shape but has not been able to clear its orbit of debris.",
      "Pluto is not very wide compared to the major planets. It only stretches about half the width of the United States.",
      "Pluto was named by an 11 year old girl named Venetia Burney. Venetia lived in Oxford, England and suggested to her grandfather that it be named after the Roman god of the underworld.",
    ],
  },
];
