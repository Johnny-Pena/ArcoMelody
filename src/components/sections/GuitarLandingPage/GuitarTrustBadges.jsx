export default function GuitarTrustBadges() {
  return (
    <div className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Why Students Choose Guitar Lessons with Arco Melody</h2>
          
          <p className="text-lg opacity-80">Trusted by families across Texas and beyond</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto justify-center">
          <div className="stat bg-base-100 rounded-lg shadow p-6">
            <div className="stat-value text-2xl md:text-3xl text-primary">1,000+</div>
            <div className="stat-title text-base md:text-lg font-medium">Students Taught</div>
            
            {/* responsive desc: stacks on small screens, row on larger */}
            <div className="stat-desc flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
              {/* allow wrapping, constrain max width so it doesn't overflow */}

              {/* DaisyUI v5+ tooltip button */}
              <div className="tooltip" data-tip="Both owners' combined teaching experience including public schools, university, and private lessons.">
                <button
                  className="btn btn-circle btn-xs opacity-70"
                  aria-describedby="students-desc"
                  aria-label="More information about Students Taught"
                  title="More information"
                  type="button"
                >
                  ?
                </button>
              </div>

              {/* hidden offscreen description for screen readers (matches data-tip) */}
              <span id="students-desc" className="sr-only">
                Both owners' combined teaching experience including public schools, university, and private lessons before and during Arco Melody.
              </span>
            </div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow p-6">
            <div className="stat-value text-2xl md:text-3xl text-accent">Experience</div>
            <div className="stat-title text-base md:text-lg font-medium">15+ Years</div>
          </div>
          <div className="stat bg-base-100 rounded-lg shadow p-6">
            <div className="stat-value text-2xl md:text-3xl text-primary">FREE</div>
            <div className="stat-title text-base md:text-lg font-medium">20-Minute Trial</div>
            <div className="stat-desc text-base opacity-80 mt-1">No obligation</div>
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
              <h4 className="text-lg md:text-xl font-semibold mb-2">Book Free Trial</h4>
              <p className="text-base opacity-80 leading-relaxed">Choose your preferred teacher and schedule a 20-minute session</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">Meet Your Teacher</h4>
              <p className="text-base opacity-80 leading-relaxed">Connect via Zoom and discuss your musical goals</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">Start Learning</h4>
              <p className="text-base opacity-80 leading-relaxed">Begin your personalized lesson plan from home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
