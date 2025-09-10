import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const instruments = [
  { slug: "violin", title: "Violin", icon: "🎻", subtitle: "Classical & Contemporary", teacher: "Jenny Peña" },
  { slug: "viola", title: "Viola", icon: "🎻", subtitle: "Classical & Contemporary", teacher: "Jenny Peña" },
  { slug: "guitar", title: "Guitar", icon: "🎸", subtitle: "Classical & Electric", teacher: "Johnny Peña" },
  { slug: "ukulele", title: "Ukulele", icon: "🪕", subtitle: "Classical & Contemporary", teacher: "Johnny Peña" },
];

export default function InstrumentShowcase() {
  const [selected, setSelected] = useState(null); // slug or null
  const navigate = useNavigate();

  function onCardSelect(slug) {
    setSelected((s) => (s === slug ? null : slug)); // toggle
  }

  function onBook() {
    // If none selected, send user to generic booking page; otherwise pass instrument
    if (!selected) {
      navigate("/first-lesson");
    } else {
      navigate("/first-lesson", { state: { instrument: selected } });
    }
  }

  return (
    <section className="w-full max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Choose Your Instrument</h2>
      <p className="text-center text-sm opacity-70 mb-8 hidden md:block">
        Select an instrument to prefill your free trial booking — or just click Learn to explore details.
      </p>
      <p className="text-center text-sm opacity-70 mb-6 block md:hidden">
        Tap an instrument to select, then book your free trial below.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {instruments.map((item) => {
          const isSelected = selected === item.slug;
          return (
            <article
              key={item.slug}
              role="button"
              tabIndex={0}
              onClick={() => onCardSelect(item.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onCardSelect(item.slug);
                }
              }}
              aria-pressed={isSelected}
              className={`card cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                isSelected ? "ring-2 ring-primary/30 shadow-lg scale-[1.02]" : "hover:shadow-lg"
              }`}
            >
              <div className="p-3 md:p-5 text-center">
                {/* Mobile compact layout */}
                <div className="block md:hidden">
                  <div className="mx-auto w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-lg mb-2">
                    <span aria-hidden="true">{item.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  {isSelected && (
                    <div className="mt-2 text-xs text-primary font-medium">
                      ✓ Selected
                    </div>
                  )}
                </div>

                {/* Desktop full layout */}
                <div className="hidden md:block">
                  <div className="mx-auto w-14 h-14 rounded-full bg-base-200 flex items-center justify-center text-2xl mb-4">
                    <span aria-hidden="true">{item.icon}</span>
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-75 mb-3">{item.subtitle}</p>

                  <ul className="text-sm mb-3 space-y-1">
                    <li>✓ Tailored lesson plans</li>
                    <li>✓ Ages 7+ (adaptable)</li>
                  </ul>

                  <div className="text-xs opacity-70 mb-3">Teacher: {item.teacher}</div>

                  <div className="flex justify-center gap-2">
                    <Link
                      to={`/lessons/${item.slug}`}
                      className="btn btn-outline btn-sm"
                      aria-label={`Learn more about ${item.title}`}
                      onClick={(e) => e.stopPropagation()} // prevent selecting card when clicking Learn
                    >
                      Learn
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Global CTA */}
      <div className="text-center mt-10">
        <button
          type="button"
          onClick={onBook}
          className="btn btn-primary btn-lg"
          aria-label={selected ? `Book a free trial for ${selected}` : "Book a free trial"}
        >
          {selected ? `Book Free Trial — ${selected[0].toUpperCase() + selected.slice(1)}` : "Book Your Free 20-Min Trial"}
        </button>
        <p className="text-sm opacity-70 mt-3 hidden md:block">Not sure? Click any card to preselect or just click Book to choose later.</p>
        <p className="text-sm opacity-70 mt-3 block md:hidden">No selection? No problem — choose during your trial!</p>
      </div>
    </section>
  );
}
