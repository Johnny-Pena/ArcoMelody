export default function ViolinHero() {

  return (
    <div className="hero bg-base-100 min-h-[70vh] pt-20">
      <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
        {/* Instructor Photo */}
        <div className="lg:w-1/3">
          <img
            src="/images/jenny-downtown-2025-512.webp"
            srcSet="/images/jenny-downtown-2025-256.webp 256w, /images/jenny-downtown-2025-512.webp 512w, /images/jenny-downtown-2025-1024.webp 1024w"
            sizes="(max-width: 640px) 100vw, 33vw"
            className="w-full max-w-sm rounded-lg shadow-2xl mx-auto"
            alt="Jenny Peña - Professional Violin Teacher with violin in downtown Austin"
            loading="eager"
            fetchPriority="high"
            width="512"
            height="683"
          />
        </div>
        
        {/* Content */}
        <div className="lg:w-2/3 lg:pl-8">
          <h1 className="text-4xl font-bold mb-4 lg:text-5xl">
            Virtual Violin Lessons with Jenny Peña
          </h1>
          <p className="text-xl mb-6">
            Learn violin online with a <strong>Suzuki-registered teacher</strong> who has 15+ years of experience teaching students of all ages.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="badge badge-info">Suzuki-Registered</div>
            <div className="badge badge-secondary">Bachelor of Music Degree</div>
            <div className="badge badge-success">15+ Years Experience</div>
          </div>
          
          <p className="text-sm mt-4 opacity-70">
            ✓ No experience needed <br />✓ Flexible scheduling <br />✓ Ages 8+ Welcome
          </p>
        </div>
      </div>
    </div>
  );
}