import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero bg-base-100 min-h-[80vh] sm:min-h-screen pt-20 sm:pt-24">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto px-4">

        {/* PHOTO CARD (first in DOM for desktop right-side display) */}
        <div className="lg:w-1/3 order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="card bg-base-200 shadow-lg">
         <figure className="px-6 pt-6">
<div className="mx-auto w-64 h-64 rounded-full overflow-hidden ring-4 ring-white">
  <picture>
    <source
      type="image/webp"
      srcSet="/images/jenny-512.webp 512w, /images/jenny-1024.webp 1024w"
      sizes="256px"
    />
    <img
      src="/images/jenny-512.jpg"
      srcSet="/images/jenny-256.jpg 256w, /images/jenny-512.jpg 512w, /images/jenny-1024.jpg 1024w"
      sizes="256px"
      width="256"
      height="256"
      alt="Jenny Peña — Co-owner & Lead Violin/Viola Teacher"
      className="w-full h-full object-cover"
      loading="eager"
    />
  </picture>
</div>
          </figure>

            <div className="card-body text-center">
              <h3 className="card-title justify-center">Jenny Peña</h3>
              <p className="text-sm">
                Co-owner & Lead Violin/Viola Teacher • Suzuki-certified • 10+ years teaching
              </p>

              <Link 
                to="/bio" 
                className="text-xs mt-2 underline"
                aria-label="View Jenny Peña bio and credentials"
              >
                View bio & credentials
              </Link>
            </div>
          </div>
        </div>

        {/* CONTENT (second in DOM for proper flex order on desktop) */}
        <div className="lg:w-2/3 lg:pr-8 order-1 lg:order-2">
          <h1 className="mb-5 text-3xl font-bold sm:text-5xl">
            Learn violin, viola, guitar & ukulele online — personalized lessons for any age
          </h1>

          <p className="mb-5 text-lg font-medium sm:text-xl">
            Experienced teachers • Tailored lesson plans • Free 20-minute trial
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link 
              to="/first-lesson" 
              className="btn btn-primary btn-lg"
              role="button"
            >
              Book Your Free 20-Min Trial
            </Link>
            <Link 
              to="/lessons" 
              className="btn btn-outline btn-lg"
              role="button"
            >
              See Lesson Plans & Pricing
            </Link>
          </div>

          <p className="mt-3 text-sm opacity-80">
            No obligation — pick a teacher & time that works for you
          </p>

          {/* Instrument + team signal (subtle) */}
          <div className="mt-4 text-sm opacity-70">
            <span className="mr-2" aria-hidden="true">🎻</span><span className="mr-3">Violin</span>
            <span className="mr-2" aria-hidden="true">🎻</span><span className="mr-3">Viola</span>
            <span className="mr-2" aria-hidden="true">🎸</span><span className="mr-3">Guitar</span>
            <span className="mr-2" aria-hidden="true">🪕</span><span className="mr-3">Ukulele</span>
            <span className="mx-2">•</span>
            <Link 
              to="/bio" 
              className="underline"
              aria-label="Meet all instructors and instruments"
            >
              More instructors & instruments →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}