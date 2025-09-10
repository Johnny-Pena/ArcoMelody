export default function TrustBadges() {
  return (
    <div className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why Students Choose Arco Melody</h2>
          <p className="text-lg opacity-80">Trusted by families across Texas and beyond</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          <div className="stat bg-base-100 rounded-lg shadow p-4">
            <div className="stat-value text-primary">1,000+</div>
            <div className="stat-title">Students Taught</div>
            
            {/* responsive desc: stacks on small screens, row on larger */}
            <div className="stat-desc flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
              {/* allow wrapping, constrain max width so it doesn't overflow */}
              <span className="text-xs sm:text-sm leading-snug whitespace-normal break-words max-w-[14rem] sm:max-w-xs">
                Combined experience (schools, university & private)
              </span>

              {/* tooltip button: accessible attributes + daisyUI data-tip */}
              <button
                className="btn btn-circle btn-xs opacity-70"
                aria-describedby="students-desc"
                aria-label="More information about Students Taught"
                title="More information"
                data-tip="Both owners' combined teaching experience including public schools, university, and private lessons before and during Arco Melody">
                ?
              </button>

              {/* hidden offscreen description for screen readers (matches data-tip) */}
              <span id="students-desc" className="sr-only">
                Both owners' combined teaching experience including public schools, university, and private lessons before and during Arco Melody.
              </span>
            </div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-value text-info">100+</div>
            <div className="stat-title">Arco Melody Students</div>
            <div className="stat-desc">Since 2014</div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-value text-accent">Suzuki</div>
            <div className="stat-title">Certified</div>
            <div className="stat-desc">Proven method</div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-value text-primary">FREE</div>
            <div className="stat-title">20-Minute Trial</div>
            <div className="stat-desc">Risk-free</div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">How Virtual Lessons Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2">Book Free Trial</h4>
              <p className="text-sm opacity-80">Choose your preferred teacher and schedule a 20-minute session</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2">Meet Your Teacher</h4>
              <p className="text-sm opacity-80">Connect via Zoom and discuss your musical goals</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2">Start Learning</h4>
              <p className="text-sm opacity-80">Begin your personalized lesson plan from home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
