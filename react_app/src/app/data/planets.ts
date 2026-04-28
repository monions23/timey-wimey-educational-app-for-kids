export interface Planet {
  id: string;
  name: string;
  size: string;
  distanceFromSun: string;
  lengthOfDay: string;
  lengthOfYear: string;
  tilt: string;
  atmosphere: string;
  temperature: string;
  potentialForLife: string;
  surface: string;
  moons: number;
  rings: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  layers: string[];
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    size: "4,879 km diameter",
    distanceFromSun: "57.9 million km",
    lengthOfDay: "59 Earth days",
    lengthOfYear: "88 Earth days",
    tilt: "0.034°",
    atmosphere: "Almost none (trace amounts of oxygen, sodium, hydrogen)",
    temperature: "-173°C to 427°C",
    potentialForLife: "Very low - extreme temperatures and no atmosphere",
    surface: "Rocky, cratered, with cliffs and plains",
    moons: 0,
    rings: 0,
    color: "#A0A0A0",
    orbitRadius: 80,
    orbitSpeed: 4.8,
    layers: ["Iron core", "Rocky mantle", "Thin crust"]
  },
  {
    id: "venus",
    name: "Venus",
    size: "12,104 km diameter",
    distanceFromSun: "108.2 million km",
    lengthOfDay: "243 Earth days",
    lengthOfYear: "225 Earth days",
    tilt: "177.4°",
    atmosphere: "96% Carbon Dioxide, 3% Nitrogen",
    temperature: "462°C (hottest planet!)",
    potentialForLife: "Very low - extreme heat and pressure",
    surface: "Rocky with volcanoes and lava plains",
    moons: 0,
    rings: 0,
    color: "#FFA500",
    orbitRadius: 120,
    orbitSpeed: 3.5,
    layers: ["Iron core", "Rocky mantle", "Basaltic crust"]
  },
  {
    id: "earth",
    name: "Earth",
    size: "12,742 km diameter",
    distanceFromSun: "149.6 million km",
    lengthOfDay: "24 hours",
    lengthOfYear: "365.25 days",
    tilt: "23.5°",
    atmosphere: "78% Nitrogen, 21% Oxygen, 1% other gases",
    temperature: "-88°C to 58°C",
    potentialForLife: "High - the only known planet with life!",
    surface: "Rocks, water (71% covered by oceans), ice",
    moons: 1,
    rings: 0,
    color: "#4A90E2",
    orbitRadius: 160,
    orbitSpeed: 3.0,
    layers: ["Inner core", "Outer core", "Mantle", "Crust"]
  },
  {
    id: "mars",
    name: "Mars",
    size: "6,779 km diameter",
    distanceFromSun: "227.9 million km",
    lengthOfDay: "24.6 hours",
    lengthOfYear: "687 Earth days",
    tilt: "25.2°",
    atmosphere: "95% Carbon Dioxide, thin atmosphere",
    temperature: "-140°C to 20°C",
    potentialForLife: "Possible - scientists are searching for signs of past life",
    surface: "Rocky, rusty iron oxide (red!), with canyons and volcanoes",
    moons: 2,
    rings: 0,
    color: "#CD5C5C",
    orbitRadius: 200,
    orbitSpeed: 2.4,
    layers: ["Iron core", "Rocky mantle", "Iron oxide crust"]
  },
  {
    id: "jupiter",
    name: "Jupiter",
    size: "139,820 km diameter",
    distanceFromSun: "778.5 million km",
    lengthOfDay: "9.9 hours",
    lengthOfYear: "12 Earth years",
    tilt: "3.1°",
    atmosphere: "90% Hydrogen, 10% Helium, with methane and ammonia",
    temperature: "-145°C average",
    potentialForLife: "Very low - no solid surface and extreme conditions",
    surface: "Gas giant - no solid surface, made of swirling gases",
    moons: 95,
    rings: 4,
    color: "#DAA520",
    orbitRadius: 280,
    orbitSpeed: 1.3,
    layers: ["Rocky core", "Metallic hydrogen", "Liquid hydrogen", "Gas atmosphere"]
  },
  {
    id: "saturn",
    name: "Saturn",
    size: "116,460 km diameter",
    distanceFromSun: "1.43 billion km",
    lengthOfDay: "10.7 hours",
    lengthOfYear: "29 Earth years",
    tilt: "26.7°",
    atmosphere: "96% Hydrogen, 3% Helium",
    temperature: "-178°C average",
    potentialForLife: "Very low - gas giant with extreme conditions",
    surface: "Gas giant - no solid surface, famous for its rings!",
    moons: 146,
    rings: 7,
    color: "#F4A460",
    orbitRadius: 360,
    orbitSpeed: 1.0,
    layers: ["Rocky core", "Metallic hydrogen", "Liquid hydrogen", "Gas atmosphere"]
  },
  {
    id: "uranus",
    name: "Uranus",
    size: "50,724 km diameter",
    distanceFromSun: "2.87 billion km",
    lengthOfDay: "17.2 hours",
    lengthOfYear: "84 Earth years",
    tilt: "97.8° (rotates on its side!)",
    atmosphere: "83% Hydrogen, 15% Helium, 2% Methane",
    temperature: "-224°C average",
    potentialForLife: "Very low - ice giant with extreme cold",
    surface: "Ice giant - made of icy materials and gas",
    moons: 28,
    rings: 13,
    color: "#87CEEB",
    orbitRadius: 440,
    orbitSpeed: 0.7,
    layers: ["Rocky core", "Icy mantle (water, methane, ammonia)", "Gas atmosphere"]
  },
  {
    id: "neptune",
    name: "Neptune",
    size: "49,244 km diameter",
    distanceFromSun: "4.5 billion km",
    lengthOfDay: "16 hours",
    lengthOfYear: "165 Earth years",
    tilt: "28.3°",
    atmosphere: "80% Hydrogen, 19% Helium, 1% Methane",
    temperature: "-214°C average",
    potentialForLife: "Very low - ice giant, very cold and distant",
    surface: "Ice giant - made of icy materials and gas, deep blue color",
    moons: 16,
    rings: 6,
    color: "#4169E1",
    orbitRadius: 520,
    orbitSpeed: 0.5,
    layers: ["Rocky core", "Icy mantle (water, methane, ammonia)", "Gas atmosphere"]
  },
  {
    id: "pluto",
    name: "Pluto",
    size: "2,377 km diameter",
    distanceFromSun: "5.9 billion km",
    lengthOfDay: "6.4 Earth days",
    lengthOfYear: "248 Earth years",
    tilt: "122.5°",
    atmosphere: "Thin nitrogen, methane, and carbon monoxide",
    temperature: "-229°C average",
    potentialForLife: "Very low - dwarf planet, extremely cold and distant",
    surface: "Rocky and icy with mountains, plains, and frozen nitrogen",
    moons: 5,
    rings: 0,
    color: "#C4A484",
    orbitRadius: 600,
    orbitSpeed: 0.4,
    layers: ["Rocky core", "Water ice mantle", "Frozen nitrogen crust"]
  }
];
