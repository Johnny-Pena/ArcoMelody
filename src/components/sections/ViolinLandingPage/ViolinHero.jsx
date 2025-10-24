export default function ViolinHero() {

  return (
    <div className="hero bg-base-100 min-h-[40vh] sm:min-h-[50vh] lg:min-h-[70vh] pt-16 lg:pt-20">
      <div className="hero-content flex-col-reverse lg:flex-row max-w-6xl mx-auto px-4 pb-4">
        {/* Content - appears first on mobile for better conversion */}
        <div className="lg:w-2/3 lg:pr-8 text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-3 lg:text-5xl">
            Virtual Violin Lessons with Jenny Peña
          </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-1 mb-3 lg:gap-2 lg:mb-6">
            <div className="badge badge-info text-xs">Suzuki-Registered</div>
            <div className="badge badge-secondary text-xs">Bachelor of Music Degree</div>
            <div className="badge badge-success text-xs">15+ Years Experience</div>
            </div>

          <p className="text-base mb-3 text-left lg:text-xl text-left lg:mb-6">
            Learn violin online with a <strong>Suzuki-registered teacher</strong> who has 15+ years of experience teaching students of all ages.
          </p>
          
 
          
          <p className="text-xs opacity-70 mb-3 text-left lg:text-left text-sm lg:mb-0">
            ✓ No experience needed <br />✓ Flexible scheduling <br />✓ Ages 8+ Welcome
          </p>

          {/* Mobile scroll hint - only visible on small screens */}
          <div className="block lg:hidden text-center mt-2">
            <p className="text-sm text-primary font-medium">
              👇 Get your free trial below!
            </p>
          </div>
        </div>
        
        {/* Instructor Photo - appears second on mobile, smaller size */}
        <div className="lg:w-1/3 mb-4 lg:mb-0">
          <img
            src="/images/jenny-downtown-2025-256.webp"
            srcSet="/images/jenny-downtown-2025-256.webp 256w, /images/jenny-downtown-2025-512.webp 512w"
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 348px, 384px"
            className="w-40 max-w-xs lg:w-full lg:max-w-sm rounded-lg shadow-2xl mx-auto"
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