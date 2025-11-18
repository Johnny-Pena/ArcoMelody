import YouTubeFacade from "../../YouTubeFacade";

export default function LessonsHero() {
  return (
    <div className="w-full bg-base-100 pt-8 lg:pt-6 pb-6">
      <div className="w-full max-w-none px-4">
        
        {/* Content Section - Full Width */}
        <div className="w-full text-left lg:text-left">
          {/* Header */}
          <h1 className="text-2xl text-center font-bold mb-3 lg:text-4xl">
            Virtual Music Lessons
          </h1>
          

          {/* Description */}
          <p className="text-base mb-3 lg:text-xl lg:mb-6">
            Learn music online with our <strong>degreed teachers</strong> who have 30+ years of combined teaching experience with adult learners and students ages 8 and up.
          </p>
          
          {/* Key Benefits */}
          <p className="text-sm mb-3 lg:text-base lg:mb-6">
             ✓ <strong>Adults and Ages 8+ Welcome</strong> <br />
            ✓ <strong>No experience needed</strong> <br />
          </p>

          {/* Instrument Icons - Visual Only */}
          <div className="flex justify-center lg:justify-start gap-4 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-base-200 flex items-center justify-center text-2xl mb-1">
                <span aria-hidden="true">🎻</span>
              </div>
              <span className="text-lg font-semibold">Violin</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-base-200 flex items-center justify-center text-2xl mb-1">
                <span aria-hidden="true">🎻</span>
              </div>
              <span className="text-lg font-semibold">Viola</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-base-200 flex items-center justify-center text-2xl mb-1">
                <span aria-hidden="true">🎸</span>
              </div>
              <span className="text-lg font-semibold">Guitar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-15 h-15 rounded-full bg-base-200 flex items-center justify-center text-2xl mb-1">
                <span aria-hidden="true">🎼</span>
              </div>
              <span className="text-lg font-semibold">Ukulele</span>
            </div>
          </div>

                  {/* YouTube Video */}
              <YouTubeFacade
                videoId="WZYjDAODMfA"
                title="YouTube video player"
                className="w-full aspect-video"
              />
        </div>
        
      </div>
    </div>
  );
}