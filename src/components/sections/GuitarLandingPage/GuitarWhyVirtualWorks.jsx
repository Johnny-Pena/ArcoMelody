import { useState } from 'react';

function TestimonialCard({ name, description, instrument, preview, full, source, avatar }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="flex items-center mb-4">
          <div className="avatar placeholder hidden">
            <div className="bg-primary text-primary-content rounded-full w-12">
              <span className="text-xl">{avatar}</span>
            </div>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-xs opacity-70">{instrument}</p>
          </div>
        </div>
        <p className="italic text-sm">
          {expanded ? full : preview}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-primary text-xs mt-2 hover:underline self-start"
        >
          {expanded ? 'Read less' : 'Read full review'}
        </button>
        <div className="rating rating-sm mt-3">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              className="mask mask-star-2 bg-yellow-400"
              disabled
              checked
            />
          ))}
        </div>
        <p className="text-xs opacity-60 mt-2">
          — {description} • {source}
        </p>
      </div>
    </div>
  );
}
export default function WhyVirtualGuitarWorks() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 bg-base-100 rounded-lg shadow-lg my-8">
      <div className="px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Why Virtual Guitar Lessons Work So Well</h2>
        <p className="text-center text-lg opacity-80 mb-12">
          Our online format offers unique advantages you won't find in traditional lessons
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Benefit 1 */}
          <div className="text-center">
            <div className="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              🏠
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn from Home</h3>
            <p className="text-sm opacity-80">
              No commute time, no weather delays. Practice your instrument in your comfortable space.
            </p>
          </div>


          {/* Benefit 2 */}
          <div className="text-center">
            <div className="bg-success text-success-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              👨‍👩‍👧‍👦
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
            <p className="text-sm opacity-80">
              Parents can observe lessons and support practice.
            </p>
          </div>
          

          {/* Benefit 3 */}
          <div className="text-center">
            <div className="bg-accent text-accent-content rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
              📅
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-sm opacity-80">
              Book lessons that fit your schedule - evenings, weekends, or during the gaps between your vacations.
            </p>
          </div>


        </div>

        {/* Success Stories */}
        <div className="mt-12 bg-base-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-6">Student Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Roberta Testimonial Card */}
            <TestimonialCard
              name="Roberta"
              description="Adult student, New York"
              instrument="Violin for 2 years"
              preview='"Jenny has helped me grow as a musician starting at age 48. I really cannot say enough about her!"'
              full='"Jenny has been my violin instructor for the last 2 years and her skills and expertise have really helped me grow as a musician. That is a lot for starting to play a new instrument at age 48. I am 50 now and I take lessons every other week using Google meets and my phone, but a laptop is ideal. I am in New York and she is in Texas, but she always works with me if things come up unexpectedly. I really cannot say enough about her! Thank you for helping me live my dream."'
              source="Google review"
              avatar="R"
            />
            {/* Sarah Testimonial Card */}
            <TestimonialCard
              name="Sarah"
              description="Parent, Texas"
              instrument="Daughter taking violin for 1 year"
              preview={'"My daughter LOVES her instructor — improved tremendously in 3 months!"'}
              full={'"My daughter LOVES her instructor and playing the violin! My daughter has improved tremendously. I like how sometimes my daughter can request songs that she wants to learn based on the music she likes. This is a wonderful program!"'}
              source="Google review"
              avatar="S"
            />
          </div>
        </div>

          </div>
    </div>
  );
}
