import FreeTrialBookingFlow from "../forms/FreeTrialBookingFlow";

const instruments = [
  { title: "Violin", icon: "🎻", subtitle: "Classical & Contemporary" },
  { title: "Viola", icon: "🎻", subtitle: "Classical & Contemporary" },
  { title: "Guitar", icon: "🎸", subtitle: "Classical & Electric" },
  { title: "Ukulele", icon: "🎼", subtitle: "All Styles" },
];

export default function InstrumentShowcase() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-6">We Offer Multiple Instruments</h2>
      <p className="text-center text-sm opacity-70 mb-8">
        Choose your instrument when you book your free trial lesson
      </p>

      {/* Simple instrument display - no interaction */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {instruments.map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-base-200 flex items-center justify-center text-4xl mb-3 shadow-sm">
              <span aria-hidden="true">{item.icon}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm opacity-75">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Direct booking flow without pre-selection */}
      <div className="text-center">
        <FreeTrialBookingFlow />
      </div>
    </section>
  );
}
