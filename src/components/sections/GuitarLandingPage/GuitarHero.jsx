export default function GuitarHero() {
  return (
    <div className="w-full bg-base-100 pt-8 lg:pt-6 pb-6">
      <div className="w-full max-w-none px-4">
        
        {/* Content Section - Full Width */}
        <div className="w-full text-center lg:text-left">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-3 lg:text-4xl">
            Virtual Guitar Lessons with Johnny Peña
          </h1>
          
          {/* Credential Badges - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex flex-wrap justify-start gap-2 mb-6">
            <div className="badge badge-info text-sm font-semibold">Master of Music Degree</div>
            <div className="badge badge-secondary text-sm font-semibold">15+ Years Experience</div>
            <div className="badge badge-success text-sm font-semibold">Competition Winner</div>
          </div>
          

          {/* Description */}
          <p className="text-base mb-3 lg:text-xl lg:mb-6">
            Learn guitar online with a <strong>Master of Music degree holder</strong> who has 15+ years of experience teaching students of all ages.
          </p>
          
          {/* Key Benefits */}
          <p className="text-sm mb-3 lg:text-base lg:mb-6 opacity-70">
            ✓ <strong>No experience needed</strong> <br />
            ✓ <strong>Flexible scheduling</strong> <br />
            ✓ <strong>Ages 8+ Welcome</strong>
          </p>

                  {/* Instructor Photo */}
  <div className="w-full mb-4 flex justify-center">
            <img
              src="/images/johnny-pena-headshot-1024.webp"
              className="w-48 max-w-xs lg:w-56 lg:max-w-sm rounded-lg shadow-2xl"
              alt="Johnny Peña - Professional Guitar Teacher with guitar in Austin, Texas"
              loading="eager"
              fetchPriority="high"
            />
        </div>
        </div>
        
      </div>
    </div>
  );
}