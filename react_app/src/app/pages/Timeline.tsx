import { Link } from "react-router";
import { timelineEvents, TimelineEvent } from "../data/timeline";
import { useState } from "react";

function getEventIcon(eventId: string): string {
  const icons: Record<string, string> = {
    "big-bang": "/Timeline-Icons/Big-Bang.png",
    "pompeii": "/Timeline-Icons/Pompeii.png",
    "elizabethan-england": "/Timeline-Icons/Elizabethan-England.png",
    "renaissance-venice": "/Timeline-Icons/Venice.png",
    "shakespeare": "/Timeline-Icons/Shakespeare.png",
    "english-civil-war": "/Timeline-Icons/English-Civil-War.png",
    "palace-of-versailles": "/Timeline-Icons/Versailles.png",
    "frost-fair": "/Timeline-Icons/Working-Class-England.png",
    "van-gogh": "/Timeline-Icons/Vincent-Van-Gogh.png",
    "american-frontier": "/Timeline-Icons/Westward-Expansion.png",
    "victorian-scotland": "/Timeline-Icons/Victorian-Scotland.png",
    "victorian-london": "/Timeline-Icons/Industrial-Revolution.png",
    "pre-wwi-england": "/Timeline-Icons/Pre-WWI.png",
    "roaring-twenties": "/Timeline-Icons/Agatha-Christie.png",
    "great-depression": "/Timeline-Icons/New-York.png",
    "wwii-blitz": "/Timeline-Icons/The-Blitz.png",
    "queens-coronation": "/Timeline-Icons/Rise-Of-TV.png",
    "turn-of-millennium": "/Timeline-Icons/Modern-Era.png",
  };
  return icons[eventId] || "/Timeline-Icons/default.png";
}

// Group events by section
const centuryGroups = {
  "Ancient History": timelineEvents.filter(e => e.section === "ancient"),
  "Early Modern": timelineEvents.filter(e => e.section === "earlyModern"),
  "Industrial Age": timelineEvents.filter(e => e.section === "industrial"),
  "Modern Era": timelineEvents.filter(e => e.section === "modern"),
};

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const getCenturyForEvent = (event: TimelineEvent): string => {
    for (const [century, events] of Object.entries(centuryGroups)) {
      if (events.some(e => e.id === event.id)) {
        return century;
      }
    }
    return "Unknown";
  };

  const getOtherEventsInCentury = (event: TimelineEvent): TimelineEvent[] => {
    const century = getCenturyForEvent(event);
    const centuryEvents = centuryGroups[century as keyof typeof centuryGroups] || [];
    return centuryEvents.filter(e => e.id !== event.id);
  };

  return (
    <div className="min-h-screen bg-black text-cream flex flex-col">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-navy-blue border-b-4 border-cream p-6">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/">
              <div className="w-16 h-16 bg-navy-blue border-4 border-cream cursor-pointer hover:bg-orange transition-colors flex items-center justify-center text-2xl">
                🏠
              </div>
            </Link>
            <div className="text-3xl text-orange uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
              Time Travel
            </div>
          </div>
          <Link to="/space">
            <button className="px-8 py-3 bg-orange text-black border-4 border-cream hover:bg-cream hover:text-orange transition-colors uppercase tracking-wider">
              Let's Travel to Space
            </button>
          </Link>
        </div>
      </nav>

      {/* Two Column Layout */}
      <div className="flex flex-1">
        {/* Left Column - Scrollable Timeline */}
        <div className="w-1/2 overflow-y-auto p-12 border-r-4 border-cream" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          <div className="max-w-[700px] mx-auto">
            <div className="relative">
              {/* Continuous straight timeline line with gradient */}
              <div className="absolute left-[calc(100%-180px)] top-0 bottom-0 w-2" style={{
                background: 'linear-gradient(to bottom, #00FF7F, #00CED1, #1E90FF)'
              }}></div>

              {Object.entries(centuryGroups).map(([century, events], centuryIndex) => (
                <div key={century} className="mb-16 relative">
                  <div className="flex gap-8">
                    {/* Events on the left */}
                    <div className="flex-1 space-y-6">
                      {events.map((event) => (
                        <button
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className={`w-full flex items-center gap-4 p-4 border-4 transition-colors text-left ${
                            selectedEvent?.id === event.id
                              ? "bg-orange text-black border-cream"
                              : "bg-navy-blue text-cream border-cream hover:bg-cream hover:text-navy-blue"
                          }`}
                        >
                          {/* Thumbnail */}
                          <div className="w-16 h-16 bg-black border-4 border-cream flex items-center justify-center flex-shrink-0">
                            <img src={getEventIcon(event.id)} alt={event.name} className="w-full h-full object-cover" />
                          </div>
                          {/* Event label */}
                          <div>
                            <div className="text-sm opacity-70">{event.year}</div>
                            <div className="text-lg uppercase tracking-wider">{event.name}</div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Century marker on the right */}
                    <div className="flex items-start flex-shrink-0 w-[160px]">
                      <div className="bg-orange text-black px-4 py-2 border-4 border-cream uppercase tracking-wider text-sm whitespace-nowrap">
                        {century}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Event Detail Panel (Fixed) */}
        <div className="w-1/2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          {!selectedEvent ? (
            // Default state - Introduction
            <div className="text-center p-12">
              <h2 className="text-5xl text-orange mb-8 uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
                Welcome, Time Traveler!
              </h2>
              <p className="text-2xl mb-12 leading-relaxed">
                Click on any event in the timeline to explore Earth's incredible history, from the Big Bang to the present day!
              </p>

              {/* The Doctor illustration */}
                <div className="flex justify-center mb-8">
                  <img src="/The-Doctor.png" alt="The Doctor" className="h-64 object-contain" />
                </div>

              <p className="text-3xl text-orange italic">
                "Allons-y! The universe is waiting!"
              </p>
            </div>
          ) : (
            // Active state - Event details
            <div>
              {/* Event title header */}
              <div className="bg-navy-blue border-b-4 border-cream p-8">
                <h1 className="text-4xl text-orange uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
                  {selectedEvent.name}
                </h1>
                <div className="text-lg text-cream mt-2">{selectedEvent.year}</div>
              </div>

              {/* Image and Description - Stacked Layout */}
              <div>
                {/* Top: Image */}
                <div className="bg-navy-blue border-b-4 border-cream flex items-center justify-center py-12">
                  <img src={getEventIcon(selectedEvent.id)} alt={selectedEvent.name} className="w-48 h-48 object-contain" />
                </div>

                {/* Bottom: Description */}
                <div className="bg-orange text-black border-b-4 border-cream p-8">
                  <p className="text-lg leading-relaxed">{selectedEvent.description}</p>
                </div>
              </div>

              {/* Fun Facts Section - Horizontal Cards */}
              <div className="bg-navy-blue border-b-4 border-cream p-6">
                <h2 className="text-2xl text-orange mb-4 uppercase tracking-wider">Fun Facts!</h2>
              </div>

              <div className="space-y-0">
                {/* Cards 1-3: Individual fun facts */}
                {selectedEvent.funFacts.map((fact, index) => (
                  <div key={index} className="flex items-center bg-navy-blue border-b-4 border-cream p-6">
                    <div className="text-5xl text-orange mr-6 flex-shrink-0 w-16">{index + 1}</div>
                    <p className="text-base leading-relaxed">{fact}</p>
                  </div>
                ))}

                {/* Card 4: Other events from same century */}
                <div className="bg-cream text-black p-6">
                  <div className="text-xl mb-4 uppercase tracking-wider font-bold">More from {getCenturyForEvent(selectedEvent)}</div>
                  <ul className="space-y-2">
                    {getOtherEventsInCentury(selectedEvent).map((otherEvent) => (
                      <li key={otherEvent.id}>
                        <button
                          onClick={() => setSelectedEvent(otherEvent)}
                          className="hover:text-orange transition-colors underline text-left text-base"
                        >
                          {otherEvent.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}