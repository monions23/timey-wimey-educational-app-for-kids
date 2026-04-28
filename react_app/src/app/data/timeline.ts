export interface TimelineEvent {
  id: string;
  name: string;
  description: string;
  funFacts: string[];
  section: "before1800s" | "1800s" | "1900s";
  year: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "big-bang",
    name: "The Big Bang",
    section: "before1800s",
    year: "13.8 Billion Years Ago",
    description: "The universe began with a massive explosion! All matter, energy, space, and time were created in an instant. The universe started incredibly hot and dense, then expanded and cooled over billions of years to create everything we see today - stars, planets, galaxies, and eventually, us!",
    funFacts: [
      "The Big Bang wasn't actually an explosion in space - it was an explosion OF space itself!",
      "In the first second, the universe expanded faster than the speed of light",
      "The universe is still expanding today, getting bigger every moment"
    ]
  },
  {
    id: "earth-forms",
    name: "Earth Forms",
    section: "before1800s",
    year: "4.5 Billion Years Ago",
    description: "Our planet Earth formed from a spinning disk of dust and gas around the young Sun. Tiny particles crashed together, sticking and growing bigger and bigger. Eventually, Earth became a hot ball of molten rock. Over millions of years, it cooled down enough for the surface to solidify into a crust.",
    funFacts: [
      "Early Earth was so hot that rocks melted and flowed like water",
      "The Moon formed when a Mars-sized object crashed into Earth!",
      "Earth was completely different - no oxygen, no life, and covered in volcanoes"
    ]
  },
  {
    id: "first-life",
    name: "First Life on Earth",
    section: "before1800s",
    year: "3.5 Billion Years Ago",
    description: "The very first living things appeared in Earth's oceans! These were tiny single-celled organisms called bacteria. They were so small you'd need a microscope to see them. These simple life forms were the ancestors of all life on Earth today, including plants, animals, and humans!",
    funFacts: [
      "Early bacteria lived in extreme conditions - hot volcanic vents and toxic chemicals",
      "Some bacteria learned to make food from sunlight - this created oxygen in our atmosphere!",
      "It took over 2 billion years before life became more complex than single cells"
    ]
  },
  {
    id: "dinosaurs",
    name: "Age of Dinosaurs",
    section: "before1800s",
    year: "230-66 Million Years Ago",
    description: "Dinosaurs ruled the Earth for over 160 million years! These incredible reptiles came in all sizes - from chicken-sized Compsognathus to massive Argentinosaurus that weighed as much as 10 elephants. Some had sharp teeth and claws, others ate plants, and some could even fly!",
    funFacts: [
      "The word 'dinosaur' means 'terrible lizard' in Greek",
      "Not all dinosaurs were huge - many were smaller than a turkey!",
      "Birds are actually living dinosaurs - they evolved from small feathered dinosaurs"
    ]
  },
  {
    id: "pyramids",
    name: "Egyptian Pyramids Built",
    section: "before1800s",
    year: "2580-2560 BCE",
    description: "The ancient Egyptians built the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World! It took about 20 years and thousands of workers to stack over 2 million stone blocks, each weighing as much as a car. The pyramids were tombs for pharaohs and were designed to last forever.",
    funFacts: [
      "The Great Pyramid was the tallest human-made structure for 3,800 years!",
      "The blocks fit together so perfectly you can't slip a piece of paper between them",
      "The pyramids were originally covered in smooth white limestone that made them shine in the sun"
    ]
  },
  {
    id: "printing-press",
    name: "Printing Press Invented",
    section: "before1800s",
    year: "1440",
    description: "Johannes Gutenberg invented the printing press in Germany, which changed the world forever! Before this, books had to be written by hand, which took months and made them very expensive. The printing press could make many copies quickly, so more people could afford books and learn to read.",
    funFacts: [
      "The first book Gutenberg printed was the Bible",
      "Before the printing press, there were only about 30,000 books in all of Europe!",
      "Within 50 years, over 20 million books had been printed"
    ]
  },
  {
    id: "declaration",
    name: "Declaration of Independence",
    section: "before1800s",
    year: "1776",
    description: "The American colonies declared their independence from Great Britain on July 4, 1776. Thomas Jefferson wrote the Declaration of Independence, which stated that all people have the right to 'life, liberty, and the pursuit of happiness.' This bold document inspired people around the world to fight for freedom and democracy.",
    funFacts: [
      "The Declaration was signed by 56 brave men who risked being charged with treason",
      "Benjamin Franklin, at 70, was the oldest signer",
      "The original document is kept in a special case in Washington D.C. to protect it from light and air"
    ]
  },
  {
    id: "steam-engine",
    name: "Steam Engine Revolution",
    section: "1800s",
    year: "1804",
    description: "Richard Trevithick built the first steam locomotive, marking the beginning of the railway age! Steam engines used coal to heat water into steam, which pushed pistons to create power. This invention transformed transportation and industry, allowing people and goods to travel faster than ever before.",
    funFacts: [
      "The first steam locomotive could pull 10 tons of iron and 70 passengers at 8 km/h",
      "Before trains, the fastest way to travel was by horse - about 16 km/h!",
      "Steam engines powered factories, ships, and trains during the Industrial Revolution"
    ]
  },
  {
    id: "civil-war",
    name: "American Civil War",
    section: "1800s",
    year: "1861-1865",
    description: "The American Civil War was fought between the Northern states (Union) and Southern states (Confederacy). The main issue was slavery - the North wanted to end it, while the South's economy depended on enslaved people working on plantations. After four years of terrible fighting, the North won and slavery was abolished.",
    funFacts: [
      "Over 600,000 soldiers died - more than any other American war",
      "The Emancipation Proclamation freed enslaved people in Confederate states in 1863",
      "This war led to three important amendments: ending slavery, granting citizenship, and voting rights"
    ]
  },
  {
    id: "light-bulb",
    name: "Electric Light Bulb",
    section: "1800s",
    year: "1879",
    description: "Thomas Edison invented the first practical electric light bulb that could light up homes and streets! While others had made electric lights before, Edison's design lasted longer and was affordable for regular people. His light bulb could glow for over 1,200 hours and changed how people lived and worked.",
    funFacts: [
      "Edison tested over 3,000 different materials for the filament before finding one that worked!",
      "Before electric lights, people used candles, oil lamps, and gas lights",
      "Edison also built the first electric power station to provide electricity to homes"
    ]
  },
  {
    id: "wright-brothers",
    name: "First Airplane Flight",
    section: "1900s",
    year: "1903",
    description: "Orville and Wilbur Wright achieved the first powered airplane flight at Kitty Hawk, North Carolina! Their plane, the Wright Flyer, stayed in the air for just 12 seconds and flew only 120 feet - about the length of a basketball court. But this short flight changed transportation forever and made the dream of human flight a reality.",
    funFacts: [
      "The Wright brothers were bicycle mechanics with no college education!",
      "They chose Kitty Hawk because it had strong steady winds and soft sand for landing",
      "Only 5 people witnessed the historic first flight"
    ]
  },
  {
    id: "world-war-1",
    name: "World War I",
    section: "1900s",
    year: "1914-1918",
    description: "World War I was called 'The Great War' and 'The War to End All Wars.' It started when Archduke Franz Ferdinand was assassinated and countries with alliances took sides. New terrible weapons like machine guns, poison gas, and tanks made it one of the deadliest wars in history, with over 17 million people killed.",
    funFacts: [
      "Soldiers lived in long trenches dug into the ground, sometimes for months",
      "Christmas Truces occurred where enemies stopped fighting to celebrate together",
      "The war ended at 11 am on November 11, 1918 - we remember this as Veterans Day"
    ]
  },
  {
    id: "penicillin",
    name: "Penicillin Discovered",
    section: "1900s",
    year: "1928",
    description: "Alexander Fleming accidentally discovered penicillin, the first antibiotic medicine! He noticed that mold growing in a petri dish had killed bacteria around it. This amazing discovery led to medicines that could cure infections that had killed millions of people throughout history, saving countless lives.",
    funFacts: [
      "Fleming discovered penicillin by accident when he left a petri dish uncovered!",
      "During World War II, penicillin saved thousands of soldiers from infected wounds",
      "Before antibiotics, even small cuts could become deadly infections"
    ]
  },
  {
    id: "world-war-2",
    name: "World War II",
    section: "1900s",
    year: "1939-1945",
    description: "World War II was the largest war in history, involving over 30 countries and 100 million soldiers. It started when Nazi Germany, led by Adolf Hitler, invaded Poland. The war was fought on multiple continents and ended with the defeat of Germany and Japan. Over 70 million people died, including 6 million Jews killed in the Holocaust.",
    funFacts: [
      "Code breakers at Bletchley Park cracked secret German messages and helped win the war",
      "Women took factory jobs to build planes, tanks, and weapons while men fought overseas",
      "The war ended after atomic bombs were dropped on Hiroshima and Nagasaki"
    ]
  },
  {
    id: "moon-landing",
    name: "Moon Landing",
    section: "1900s",
    year: "1969",
    description: "On July 20, 1969, Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon! As part of NASA's Apollo 11 mission, they landed the lunar module 'Eagle' on the Moon's surface. When Armstrong stepped onto the Moon, he said the famous words: 'That's one small step for man, one giant leap for mankind.'",
    funFacts: [
      "The computers on Apollo 11 had less power than a modern smartphone!",
      "Armstrong and Aldrin spent 2.5 hours walking on the Moon",
      "They left footprints that will stay there for millions of years - no wind to blow them away!"
    ]
  },
  {
    id: "internet",
    name: "Internet Goes Public",
    section: "1900s",
    year: "1991",
    description: "The World Wide Web became available to the public, created by Tim Berners-Lee! While the internet existed before, the Web made it easy for anyone to access information through web browsers and links. This invention connected the world like never before, changing how we communicate, learn, shop, and work.",
    funFacts: [
      "The first website ever created is still online at CERN!",
      "In 1991, there were only about 10 websites - now there are billions!",
      "Tim Berners-Lee made the Web free for everyone to use without charging money"
    ]
  },
  {
    id: "smartphones",
    name: "Smartphone Revolution",
    section: "1900s",
    year: "2007",
    description: "The first iPhone was released, starting the smartphone revolution! Smartphones combined a phone, computer, camera, music player, and internet browser into one pocket-sized device. With touchscreens and apps, these devices changed how billions of people around the world communicate, work, learn, and have fun.",
    funFacts: [
      "The first iPhone had no app store - apps were added a year later!",
      "Today, more people have access to smartphones than to clean drinking water",
      "Smartphones have more computing power than the computers that sent astronauts to the Moon!"
    ]
  }
];
