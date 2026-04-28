import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cream rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8">
        {/* The Doctor character */}
        <div className="mb-12">
          <div className="w-48 h-64 mx-auto bg-navy-blue border-4 border-cream relative">
            {/* Simple vector-style Doctor illustration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32">
              {/* Head */}
              <div className="w-16 h-20 bg-cream mx-auto relative">
                {/* Hair */}
                <div className="absolute -top-2 left-0 right-0 h-4 bg-orange"></div>
                {/* Eyes */}
                <div className="absolute top-6 left-3 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-6 right-3 w-2 h-2 bg-black rounded-full"></div>
                {/* Smile */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-black rounded-full"></div>
              </div>
              {/* Body */}
              <div className="w-24 h-32 bg-navy-blue border-4 border-cream mx-auto">
                {/* Bow tie */}
                <div className="w-8 h-3 bg-orange mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl text-cream mb-16" style={{ fontFamily: 'serif' }}>
          Where do you want to travel?
        </h1>

        <div className="flex gap-8 justify-center">
          <Link to="/space">
            <button className="px-16 py-6 bg-orange text-black text-2xl border-4 border-cream hover:bg-cream hover:text-orange transition-colors uppercase tracking-wider">
              Space
            </button>
          </Link>
          <Link to="/timeline">
            <button className="px-16 py-6 bg-navy-blue text-cream text-2xl border-4 border-cream hover:bg-cream hover:text-navy-blue transition-colors uppercase tracking-wider">
              Earth
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
