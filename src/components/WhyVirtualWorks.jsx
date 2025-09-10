export default function WhyVirtualWorks() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 bg-base-100 rounded-lg shadow-lg my-8">
      <div className="px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Why Virtual Lessons Work So Well</h2>
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
              No commute time, no weather delays. Practice on your own instrument in your comfortable space.
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
            <div className="bg-base-100 p-4 rounded-lg">
              <p className="italic mb-2">
                "My daughter has been taking virtual violin lessons for 8 months and her progress has been amazing. 
                The ability to record lessons means she can practice exactly what Jenny taught her."
              </p>
              <p className="text-sm font-semibold">- Sarah M., Parent</p>
            </div>
            <div className="bg-base-100 p-4 rounded-lg">
              <p className="italic mb-2">
                "Mr. Pena is not only an amazing teacher but also a gifted musician. He is very kind, friendly and has been great at assessing our son's interests to continuously keep him motivated. We highly recommend him!"
              </p>
              <p className="text-sm font-semibold">- Rosalinda, Parent</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <a href="/first-lesson" className="btn btn-primary btn-lg">
            Book Your Free Trial Now
          </a>
          <p className="text-sm opacity-70 mt-2">
            See why virtual lessons are the future of music education
          </p>
        </div>
      </div>
    </div>
  );
}
