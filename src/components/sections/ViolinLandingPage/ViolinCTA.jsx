import { Link } from "react-router-dom";

export default function ViolinCTA() {
  return (
    <div className="flex flex-col items-center px-4 py-16 bg-base-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Violin Journey?</h2>
        <p className="text-lg mb-8">
          Book your free 20-minute trial lesson today and discover the joy of playing violin with Jenny Peña.
        </p>

        <div className="card bg-base-100 shadow-xl mb-8 max-w-2xl mx-auto">
          <div className="card-body">
            <h3 className="card-title justify-center mb-4">FREE 20-Minute Trial Lesson</h3>
            <p className="mb-4">What's included:</p>
            <ul className="text-left space-y-2 mb-6">
              <li>• Personalized assessment of your musical goals</li>
              <li>• Introduction to basic violin technique</li>
              <li>• Custom learning plan discussion</li>
              <li>• Q&A about lessons and scheduling</li>
            </ul>
            
            <Link 
              to="/first-lesson" 
              className="btn btn-primary btn-lg"
            >
              Book Your Free Trial Lesson
            </Link>
          </div>
        </div>

        <p className="text-sm text-base-content/60">
          No credit card required • Quick 2-minute signup • We'll contact you to schedule
        </p>
      </div>
    </div>
  );
}