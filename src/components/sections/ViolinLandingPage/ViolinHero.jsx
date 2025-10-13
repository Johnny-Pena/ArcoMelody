import { Link } from "react-router-dom";

export default function ViolinHero() {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-center text-2xl font-bold mt-14 mb-6 md:text-5xl">Virtual Violin Lessons</h1>
      
      <div className="hero bg-base-100">
        <div className="hero-content text-center max-w-4xl mx-auto px-4">
          <div>
            <h2 className="text-xl mb-6 md:text-2xl">
              Learn violin with Suzuki-registered teacher Jenny Peña
            </h2>
            <p className="text-lg mb-6">
              Professional virtual violin lessons for ages 8-adult. Personalized curriculum, flexible scheduling, and proven teaching methods.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="badge badge-primary text-xs">Suzuki-Registered</div>
              <div className="badge badge-secondary text-xs">Bachelor of Music Degree</div>
              <div className="badge badge-info text-xs">15+ Years Experience</div>
            </div>

            <Link 
              to="/first-lesson" 
              className="btn btn-primary btn-lg mt-6"
            >
              Book Free Trial Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}