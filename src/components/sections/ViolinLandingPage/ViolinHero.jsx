export default function ViolinHero() {
  return (
    <div className="w-full bg-base-100 pt-8 lg:pt-6 pb-6">
      <div className="w-full max-w-none px-4">
        
        {/* Content Section - Full Width */}
        <div className="w-full text-left lg:text-left">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-3 text-center lg:text-4xl">
            Virtual Violin Lessons
          </h1>
          
          {/* Credential Badges - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex flex-wrap justify-start gap-2 mb-6">
            <div className="badge badge-info text-sm font-semibold">Suzuki-Registered</div>
            <div className="badge badge-secondary text-sm font-semibold">Bachelor of Music Degree</div>
            <div className="badge badge-success text-sm font-semibold">15+ Years Experience</div>
          </div>
          

          {/* Description */}
          <p className="hidden lg:block text-base mb-3 lg:text-xl lg:mb-6">
            Learn violin online with a <strong>Suzuki-registered teacher</strong> who has 15+ years of experience teaching adult learners and students ages 8 and up.
          </p>
          
          {/* Key Benefits */}
          <p className="text-sm mb-3 lg:text-base lg:mb-6">
            ✓ <strong>Adults and Ages 8+ Welcome</strong> <br />
            ✓ <strong>No experience needed</strong> <br />
            ✓ <strong>Flexible scheduling</strong> <br />
          </p>

                  {/* Instructor Photo */}
  <div className="w-full mb-4 flex justify-center">
            <img
              src="/images/jenny-downtown-smartphone.jpg"
              className="w-48 max-w-xs lg:w-56 lg:max-w-sm rounded-lg shadow-2xl"
              alt="Jenny Peña - Professional Violin Teacher with violin in downtown Austin"
              loading="eager"
              fetchPriority="high"
            />
        </div>
        </div>
        
      </div>
    </div>
  );
}