export default function ViolinHero() {

  return (
    <div className="hero bg-base-100 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] pt-8 lg:pt-20">
      <div className="hero-content flex-col-reverse lg:flex-row max-w-6xl mx-auto px-4">
        {/* Content - appears first on mobile for better conversion */}
        <div className="lg:w-2/3 lg:pr-8 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4 lg:text-5xl">
            Virtual Violin Lessons with Jenny Peña
          </h1>
          <p className="text-lg mb-4 lg:text-xl lg:mb-6">
            Learn violin online with a <strong>Suzuki-registered teacher</strong> who has 15+ years of experience teaching students of all ages.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 lg:mb-6">
            <div className="badge badge-info">Suzuki-Registered</div>
            <div className="badge badge-secondary">Bachelor of Music Degree</div>
            <div className="badge badge-success">15+ Years Experience</div>
          </div>
          
          <p className="text-sm opacity-70 mb-4 lg:mb-0">
            ✓ No experience needed <br />✓ Flexible scheduling <br />✓ Ages 8+ Welcome
          </p>

          {/* Mobile scroll hint - only visible on small screens */}
          <div className="block lg:hidden text-center mt-4">
            <p className="text-sm text-primary font-medium">
              👇 Get your free trial below!
            </p>
          </div>
        </div>
        
        {/* Instructor Photo - appears second on mobile */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img
            src="/images/jenny-downtown-2025-256.webp"
            srcSet="/images/jenny-downtown-2025-256.webp 256w, /images/jenny-downtown-2025-512.webp 512w"
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 348px, 384px"
            className="w-full max-w-sm rounded-lg shadow-2xl mx-auto"
            alt="Jenny Peña - Professional Violin Teacher with violin in downtown Austin"
            loading="eager"
            fetchPriority="high"
            width="348"
            height="462"
          />
        </div>
      </div>
    </div>
  );
}