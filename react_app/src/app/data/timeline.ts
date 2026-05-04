
export interface TimelineEvent {
  id: string;
  name: string;
  description: string;
  funFacts: string[];
  section: "ancient" | "earlyModern" | "industrial" | "modern";
  year: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "big-bang",
    name: "The Big Bang",
    section: "ancient",
    year: "13.8 Billion Years Ago",
    description: "Right then! Brace yourself, because we are starting at the very beginning. And I mean the actual beginning — before planets, before stars, before your mum's morning tea. Before everything. About 13.8 billion years ago — which is a very long time, even for me — the entire universe exploded into existence from a single, impossibly tiny point. Scientists call it the Big Bang. In less than a second, energy became matter. Matter became particles. Particles became atoms. And atoms? Atoms became you. The universe then spent billions of years cooling down, clumping together, forming galaxies and stars and eventually, this gorgeous little blue-green planet you call home. Out of all that chaos, all that noise and fire and cosmic accident — somehow, life happened. You happened. Not bad for a Tuesday.",
    funFacts: [
      "The idea of the expanding Universe, which the Big Bang is built upon, had been around since 1922, but was widely dismissed for decades.",
      "The name 'Big Bang' came about from the theory's most fervent detractor, Fred Hoyle.",
      "The 1964 discovery of the leftover glow from the Big Bang was initially thought to be from bird poop."
    ]
  },
  {
    id: "pompeii",
    name: "Eruption of Vesuvius / Pompeii",
    section: "ancient",
    year: "79 AD",
    description: "It's the 23rd of August, 79 AD, and this is one of the most extraordinary — and most heartbreaking — moments in all of human history. The city of Pompeii, in what is now southern Italy, is home to around 20,000 people. Real, brilliant, funny, complicated Romans — with shops and schools and street food and arguments about politics. And then Mount Vesuvius erupts. The people of Pompeii didn't know Vesuvius was a volcano. They built their whole city right at the foot of it because the soil was incredibly good for growing grapes. When it erupted, it sent a cloud of ash and rock 21 miles into the sky. The city was buried in hours. But here's why archaeologists love Pompeii — that same ash that destroyed the city preserved it. When they excavated it, nearly 1,800 years later, they found buildings, paintings, bread still in the ovens. A city frozen in time.",
    funFacts: [
      "Pompeii is the second most visited tourist site in Italy after the Colosseum in Rome, with just under four million visitors in 2019.",
      "The nature of the Roman definition of family included everyone in the household and not just immediate members.",
      "Public bathing was a daily leisure activity for many Pompeians, and the baths were a place for exercise, pampering, and social gatherings with friends."
    ]
  },
  {
    id: "elizabethan-england",
    name: "Elizabethan England",
    section: "earlyModern",
    year: "1562",
    description: "It's 1562, and Queen Elizabeth the First is on the throne of England. She's 29 years old, sharp as a tack, and running one of the most powerful countries in the world — which, given that most people at the time didn't think a woman could do that, is rather impressive. She did it anyway. This is the Age of Exploration. English sailors are venturing out across the oceans — to the Americas, to Africa, to places they'd only heard about in stories. England is getting rich, getting ambitious, and getting into quite a lot of trouble along the way. At home, London is buzzing. Trade is booming. Artists and writers are flourishing. The English language itself is changing — becoming richer, stranger, more alive. Elizabeth ruled for 45 years without ever marrying, which drove her advisors absolutely mad. She called herself the Virgin Queen and made it her identity — powerful, untouchable, entirely on her own terms.",
    funFacts: [
      "Elizabeth's Coronation Date Was Chosen Based on Astrology — she asked John Dee to use an astrological reading to select the date, believing it would bring good fortune during her reign.",
      "It was a Golden Age of British Theater, with the most famous figure being William Shakespeare, whose career as a playwright continued after Elizabeth's reign ended in 1603.",
      "It saw England defeat the largest fleet of warships ever assembled at the time — the English victory over the Spanish Armada signaled that Queen Elizabeth I was a monarch to be reckoned with."
    ]
  },
  {
    id: "renaissance-venice",
    name: "Renaissance Venice",
    section: "earlyModern",
    year: "1580",
    description: "Venice in the late 1500s is one of the most extraordinary cities on Earth — a republic built on water, run by merchants, dripping with art and money and intrigue. It's a hub of trade between East and West, where silks and spices and ideas flow in from across the known world. The canals are busy with gondolas carrying nobles and goods alike. The palaces are filled with Titian and Tintoretto. And underneath all that beauty, a remarkably sophisticated system of government — the Doge, the Council of Ten, a republic that's been running for centuries. Venice is proof that a city can be both breathtakingly gorgeous and ruthlessly practical at the same time.",
    funFacts: [
      "Elena Cornaro Piscopia, the first woman in the world to graduate with a university degree, was born in Venice in 1646.",
      "Houses in Venice are numbered according to districts, not streets, making it difficult to find addresses, even for postmen.",
      "The San Marco bell tower was built in the 12th century, collapsed in 1902, and was rebuilt exactly the same — standing 98.6 metres tall, the fifth tallest bell tower in Italy."
    ]
  },
  {
    id: "shakespeare",
    name: "Shakespeare & the Globe Theatre",
    section: "earlyModern",
    year: "1599",
    description: "It's 1599, and Shakespeare is at the absolute peak of his powers. He's 35 years old, already famous, and this year alone he's writing — or finishing — Julius Caesar, As You Like It, and beginning Hamlet. In one year. While also co-owning and running a theatre company. The Globe Theatre holds up to 3,000 people — lords and ladies in the covered galleries, ordinary working Londoners packed into the open yard for a penny a show. Standing, eating, shouting back at the actors. Theatre in 1599 isn't a quiet, reverent experience — it's loud and alive and brilliantly chaotic. Here's what Shakespeare actually did that matters beyond the plays themselves: he took the English language and stretched it until it was almost unrecognisable. Around 1,700 words that we use every day were either invented by Shakespeare or first written down by him.",
    funFacts: [
      "Shakespeare's plays had the royal seal of approval — both Queen Elizabeth I and James VI hired Shakespeare's company to perform at the royal court.",
      "There were no female actors in Shakespeare's time — women's parts were played by men — and audiences could be very rowdy, shouting, booing, and throwing food.",
      "Plays at the Globe featured trap doors, actors lifted on wires, smoke, fire and even cannons — disaster struck in 1613 when a cannon shot set fire to the roof and burned it down."
    ]
  },
  {
    id: "english-civil-war",
    name: "English Civil War Aftermath",
    section: "earlyModern",
    year: "1651",
    description: "England, 1651. And honestly? It's exhausted. For nearly a decade, this country has been tearing itself apart. The English Civil War — King Charles the First on one side, Parliament and its army on the other — has finally ground to a halt. Charles was executed two years ago. Executed. The King of England, beheaded by his own people. Now Oliver Cromwell is in charge, running what they call the Commonwealth — England without a king, governed by Parliament. In theory, that sounds quite progressive. In practice, Cromwell rules with an iron fist and closes the theatres, bans Christmas celebrations, and generally makes life considerably less fun. The war changed everything about how England thought about power. Could a king be above the law? Parliament said no, loudly, permanently. That argument — about who holds authority, and whether anyone is truly untouchable — echoes all the way into modern democracy.",
    funFacts: [
      "After the wars ended, Oliver Cromwell chose to be 'Lord Protector' instead of King, taking control of the country after closing the Rump Parliament.",
      "Sometimes the Royalists and Parliamentarians used cannons so large they had to be drawn by sixteen horses — their size made them mostly useful for striking fear into opposing forces.",
      "With Parliament firmly in control by 1647, Oliver Cromwell and Parliament banned Christmas celebrations for a period of twelve years."
    ]
  },
  {
    id: "palace-of-versailles",
    name: "Palace of Versailles / French Court",
    section: "earlyModern",
    year: "1727–1764",
    description: "The Palace of Versailles. Even the name sounds like a sigh, doesn't it? Louis the Fourteenth — the Sun King — built Versailles just outside Paris in the late 1600s, and it became the most extravagant royal residence the world had ever seen. 700 rooms. 2,000 acres of gardens. 20,000 people living and working within its walls. By the 1700s, Versailles wasn't just a palace — it was the centre of Europe. Kings, queens, ambassadors, artists, philosophers — they all passed through those mirrored halls. This was also the age of the Enlightenment — a period when thinkers started asking big, bold questions. Why do kings have power? What are the rights of ordinary people? The irony is that all that luxury and grandeur was happening while ordinary French people were getting poorer and angrier. And that anger, simmering for decades, would eventually become the French Revolution.",
    funFacts: [
      "The palace played a crucial role in scientific research — both Louis XV and Louis XVI were passionate about science and collected instruments used in experiments in horology, astronomy, and cartography.",
      "Hot chocolate was the drink of choice at Versailles, considered an exotic delicacy reserved for royals.",
      "In winter, the Grand Canal transformed into a royal ice-skating rink, delighting the court with the thrill of gliding across frozen waters."
    ]
  },
  {
    id: "frost-fair",
    name: "Last Frost Fair on the Thames",
    section: "earlyModern",
    year: "1814",
    description: "London, 1814. The River Thames — that great, grey river that runs right through the heart of the city — has frozen solid. Not just a thin layer of ice. We're talking thick enough to hold an elephant. They actually walked an elephant across it. And what do Londoners do when their river freezes? They throw a party. The Frost Fairs were these incredible pop-up festivals right on the ice — stalls selling hot food, people skating and dancing, printers running souvenir presses, even a whole roasted ox. For a few weeks, the working people of London took over the river and turned it into a carnival. The Thames doesn't freeze anymore. The last Frost Fair was 1814, partly because the old London Bridge was demolished — its many arches had slowed the water enough to let it freeze. The new bridge had fewer, wider arches. Water flowed faster. No more ice.",
    funFacts: [
      "The earliest recorded freezing of the River Thames occurred in 1150 AD.",
      "During the Blitz in World War II, the River Thames was used by pilots to help them navigate at night.",
      "Seals can be found as far upstream on the River Thames as Waterloo Bridge during their breeding and nursing seasons."
    ]
  },
  {
    id: "van-gogh",
    name: "Vincent van Gogh",
    section: "industrial",
    year: "1853–1890",
    description: "Vincent was born in the Netherlands in 1853, and he became one of the greatest painters who ever lived. You've probably seen his work — The Starry Night, Sunflowers, all those swirling colours and thick, golden brushstrokes that feel like they're moving. He painted the world the way it felt, not just the way it looked. But here's the part that doesn't make it onto the postcards: Vincent struggled enormously. He had what we'd now recognise as serious mental illness — depression, anxiety, episodes that made daily life incredibly difficult. He spent time in a psychiatric hospital. He sold almost no paintings during his lifetime. He died at 37, believing he had failed. He hadn't failed. Not even slightly. He'd created over 2,000 works in just ten years. After his death, the world slowly caught up to what he'd done, and now his paintings sell for hundreds of millions of pounds.",
    funFacts: [
      "Much of Van Gogh's work prominently features yellow — the spots surrounded by coronas in Starry Night are remarkably similar to a known side effect of digitalis, a medicine used to treat epilepsy in his time.",
      "Vincent van Gogh originally wanted to be a priest, like his father and grandfather, before turning to painting.",
      "His brother Theo provided crucial financial and emotional support, sending him money monthly for supplies and living costs."
    ]
  },
  {
    id: "american-frontier",
    name: "The American Frontier",
    section: "industrial",
    year: "1870",
    description: "The American West. Not the version from the movies — the real one. The 1870s were the height of what Americans called Westward Expansion. The United States government was encouraging settlers — many of them newly arrived immigrants from Europe — to move west, claim land, and build towns. But here's what they don't always teach you: that land wasn't empty. It was home to hundreds of Indigenous nations — the Sioux, the Comanche, the Apache, the Cheyenne — who had lived there for thousands of years. The frontier towns that sprung up were wild, chaotic places — saloons and sheriffs, cattle drives and railroad workers, miners and merchants. Justice was often improvised. What I find fascinating is the question those towns asked, which is actually a very old question: who gets to decide what's right? When the official systems don't reach you, when there's no rulebook, how do you treat each other?",
    funFacts: [
      "Manifest Destiny — the belief that Americans were destined to expand from the Atlantic to the Pacific — was a phrase coined by journalist John O'Sullivan in 1845.",
      "The California Gold Rush began in 1848, causing a massive migration where thousands of prospectors, known as Forty-Niners, flocked west to seek fortunes.",
      "The Transcontinental Railroad, completed in 1869, revolutionized travel and settlement — built largely through the labor of Chinese immigrants and Irish Americans."
    ]
  },
  {
    id: "victorian-scotland",
    name: "Victorian Scotland",
    section: "industrial",
    year: "1879",
    description: "Scotland, 1879! Queen Victoria is on the throne, and she actually loves Scotland. Her estate at Balmoral, up in the Highlands, is her favourite place to escape the pressures of ruling a quarter of the entire world. Because that's what the British Empire is at this point — vast, powerful, and spreading across nearly every continent. But Scotland itself has its own story. The Highland Clearances — where landlords forcibly removed thousands of Scottish farming families from their ancestral lands to make room for sheep — had been happening for nearly a century. At the same time, Scotland in the 1870s is a place of serious intellectual firepower. Edinburgh is one of the great scientific cities of the world — medicine, engineering, philosophy, geology. And that's the tension of this moment: science charging forward on one side, and deep old traditions, folklore, and superstition holding firm on the other.",
    funFacts: [
      "Queen Victoria spoke fluent English and German, and studied French, Italian, and Latin — later in life also learning the Indian language of Hindustani.",
      "Victoria was the first notable person to wear white on her wedding day, beginning a tradition that continues today.",
      "Queen Victoria's physician gave her chloroform during childbirth — she declared it 'soothing, quieting and delightful beyond measure.'"
    ]
  },
  {
    id: "victorian-london",
    name: "Victorian London",
    section: "industrial",
    year: "1892–1893",
    description: "Victorian London. Late 1800s. The streets are loud and filthy and absolutely teeming with life — horse-drawn carriages, gas lamps, newspaper sellers, factory smoke turning the sky a permanent brownish-grey. London is the largest city on Earth, and it's growing faster than anyone knows how to manage. This is the Industrial Revolution in full swing — steam power, mass production, railways stitching the whole country together. Tremendous wealth is being created. Almost none of it is reaching the people doing the actual work. Class is everything in Victorian society. There are strict, unspoken rules about who you are, how you speak, what you wear. And women — here's where it gets interesting. Middle and upper-class women were expected to be decorative, domestic, quiet. And yet this is exactly the period when women started pushing back — loudly, persistently, brilliantly. The suffragette movement is just around the corner.",
    funFacts: [
      "The concentration of women in factories fostered a sense of community and solidarity, laying the groundwork for early labor movements and the women's rights movement.",
      "Women were also active businesswomen in towns — about 10 percent of business owners listed in commercial directories were female.",
      "One of the first US factories to hire women was the textile mills in Lowell, Massachusetts — by the 1840s, around 75% of the workforce were women known as 'Mill Girls.'"
    ]
  },
  {
    id: "pre-wwi-england",
    name: "Pre-WWI England",
    section: "modern",
    year: "1913",
    description: "1913. England. And there's something hanging in the air that nobody quite has words for yet. On the surface, life in rural England looks peaceful — village schools, cricket on the green, Sunday church, the steady rhythm of seasons. Britain is at the height of its empire, one of the most powerful nations on Earth. But underneath it all, the world is about to change in a way that nobody is prepared for. In just one year, the First World War will begin. And it will be unlike any war that came before it. Machine guns, poison gas, trenches stretching hundreds of miles. By the time it ends in 1918, around 20 million people will have died. The boys in school in 1913 — doing maths, playing football, arguing about nothing — many of them will be in uniform by 1915. The people living through history didn't know they were standing on the edge of something enormous. Life felt ordinary right up until it wasn't.",
    funFacts: [
      "Britain was the second-largest economy in the world, trailing only the United States, leading global heavy manufacturing through steam-powered machinery.",
      "The Great Exhibition of 1851 in London's Crystal Palace showcased the empire's industrial might, attracting over 6 million visitors.",
      "The Suffragette movement, led by Emmeline Pankhurst, employed militant tactics including arson to demand women's voting rights, resulting in government force-feeding of hunger-striking prisoners."
    ]
  },
  {
    id: "roaring-twenties",
    name: "The Roaring Twenties / Agatha Christie",
    section: "modern",
    year: "1926",
    description: "The 1920s! A decade that really committed to being a decade. The First World War ended in 1918, and the world — exhausted, grieving, desperate for something good — decided to have the most extraordinary party. Jazz music is exploding out of America and into dance halls across the world. Women are cutting their hair short, wearing shorter skirts, going out unchaperoned, voting. New technology is arriving everywhere at once — cars, telephones, radio, cinema. And then there's Agatha Christie — publishing her first novel in 1920, more or less inventing the modern detective story. But 1926 specifically? That's the year Agatha Christie herself became a mystery. Her marriage was falling apart, and in December she simply vanished. Her car was found abandoned near a lake. The whole country searched for her for eleven days. Over a thousand police officers involved. She was eventually found at a hotel, registered under a false name, claiming no memory of how she got there. She never publicly explained it. Ever.",
    funFacts: [
      "During World War I, Christie worked as an apothecary's assistant, gaining extensive knowledge of poisons that she frequently used as murder weapons in her novels.",
      "Christie was one of the first British people to learn to surf, a skill she acquired during a trip to Hawaii with her first husband.",
      "She famously did her best thinking while eating apples and drinking tea in the bath, though she stopped when modern bathtubs lacked a ledge for her writing materials."
    ]
  },
  {
    id: "great-depression",
    name: "The Great Depression / New York",
    section: "modern",
    year: "1930",
    description: "New York City, 1930. And the party is very much over. The Wall Street Crash happened in October 1929 — the American stock market collapsed almost overnight, wiping out fortunes, destroying banks, and triggering the worst economic crisis the modern world had ever seen. By 1930, around 15 million Americans are unemployed. That's roughly one in four workers — just, suddenly, with no job and no income. In New York, Central Park filled up with shanty towns called Hoovervilles, where people who had lost everything built something from nothing. And yet — New York kept building. The Empire State Building was constructed between 1930 and 1931, right in the teeth of the Depression. 3,400 workers a day, many of them recent immigrants. It was finished ahead of schedule. In sixteen months. During the worst economic crisis in living memory. The Depression eventually ended, partly through government programmes called the New Deal, and partly through the economic surge of the Second World War. It took a decade.",
    funFacts: [
      "Popular foods during the Great Depression included macaroni and cheese, chili, and corned beef — with stranger options like peanut butter stuffed baked onions and spaghetti with boiled carrots and white sauce.",
      "Children played games such as Scrabble and Monopoly, which were first sold during the 1930s.",
      "Chicago gangster Al Capone opened a soup kitchen during the Great Depression — for millions, soup kitchens provided the only food they would see all day."
    ]
  },
  {
    id: "wwii-blitz",
    name: "WWII London / The Blitz",
    section: "modern",
    year: "1941",
    description: "London, 1941. Britain is at war with Nazi Germany. And while soldiers are fighting on battlefields across Europe and North Africa, something extraordinary is happening right here, in the streets of London. Every night, German aircraft fly over British cities and drop bombs. Night after night after night, for eight solid months. Around 43,000 civilians were killed in the Blitz. Entire neighbourhoods were flattened. And here's what gets me, every single time: people kept going. Shops would be half-demolished and they'd hang a sign in the rubble saying 'More Open Than Usual.' Neighbours who'd never spoken before started sharing food, shelter, everything they had. Children were evacuated out of the cities — packed onto trains with little cardboard labels round their necks, sent to live with strangers in the countryside. Away from their parents. Some for months, some for years. The Blitz didn't break London. If anything, it made it something fiercer.",
    funFacts: [
      "King George VI and Queen Elizabeth remained in Buckingham Palace throughout the Blitz — after bombs fell near the palace, the Queen stated 'I'm glad we've been bombed. Now I feel we can look the East End in the face.'",
      "During the devastating raid on December 29, 1940, incendiary bombs hit St. Paul's Cathedral's dome, but volunteers used hand pumps to extinguish the flames, allowing it to stand as a symbol of defiance.",
      "While 79 London Underground stations were used as shelters, only one in seven people actually used them — at the peak, 177,000 Londoners slept in the tube system nightly."
    ]
  },
  {
    id: "queens-coronation",
    name: "Queen's Coronation / Rise of Television",
    section: "modern",
    year: "1953",
    description: "1953. And something is happening in living rooms across Britain that has never, ever happened before. People are buying televisions. In 1953, a television set is extraordinary. It's a piece of furniture. Families save up for months to afford one. Neighbours crowd into each other's sitting rooms to watch it together. And the reason everyone suddenly needs one? June the 2nd, 1953. The Coronation of Queen Elizabeth the Second. For the first time in history, a coronation is being broadcast live on television. Around 27 million people in Britain watch it — more than half the entire population of the country. It's a postwar moment, and that matters enormously. Britain in 1953 is still recovering — rationing only fully ends the following year, bombed streets are still being rebuilt. People need something to celebrate. A young queen, 27 years old, crowned in gold and watched by millions. It feels like a beginning.",
    funFacts: [
      "The medium invented new products like TV dinners and TV trays, shifting family dining habits and fueling a new generation of consumers through pervasive advertising.",
      "The era saw the debut of iconic shows that defined genres: the sitcom (I Love Lucy), the western (Gunsmoke), and the variety show (The Ed Sullivan Show).",
      "NBC's live broadcast of Peter Pan drew a record 65 million viewers, and Lucille Ball's pregnancy on I Love Lucy attracted 44 million viewers, gracing the first issue of TV Guide in 1953."
    ]
  },
  {
    id: "turn-of-millennium",
    name: "Turn of the Millennium",
    section: "modern",
    year: "1999–2005",
    description: "The turn of the millennium — the year 2000 — felt like the whole world holding its breath. Would computers crash? Would the lights go out? Would something enormous and unknowable happen at midnight on the 31st of December 1999? Mostly, people just had a very good party. The early 2000s are fascinating as a historical moment. The internet goes from being a novelty to being the nervous system of modern life. Mobile phones get smaller, smarter, and suddenly everyone has one. And then September the 11th, 2001 happens — terrorist attacks in New York and Washington that kill nearly 3,000 people and reshape global politics for a generation. But ordinary life keeps going alongside all of it. The corner shop, the bus, the job you're not sure about, the family you'd do anything for. We've travelled from the Big Bang to here. And here is remarkable — running water, electricity, medicine that works, more human knowledge available on a small rectangle in your pocket than existed in all the libraries of the ancient world combined.",
    funFacts: [
      "The term 'Y2K aesthetic' has evolved in pop culture to describe the fashion of the early 2000s — low-rise jeans, velour tracksuits, and futuristic metallics — with a major revival around 2021 as part of a 20-year nostalgia cycle.",
      "The iPod's name was inspired by the line 'Open the pod bay door, Hal!' from the film 2001: A Space Odyssey, released in the same year as the device.",
      "When YouTube originally launched in 2005, it was meant to be a video dating site — the founders even had the slogan: 'Tune in, hook up.'"
    ]
  }
];
