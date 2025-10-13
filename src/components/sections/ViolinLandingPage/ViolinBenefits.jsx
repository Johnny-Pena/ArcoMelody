import { Link } from "react-router-dom";

export default function ViolinBenefits() {
  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-4xl font-bold text-center mt-10 mb-6">Why Choose Violin Lessons with Arco Melody?</h2>
      
      <div className="max-w-4xl mx-auto">
        <ul className="list-disc list-inside mb-8 text-left text-lg space-y-3">
          <li><strong>Suzuki Method Excellence:</strong> Learn with the proven Suzuki approach for developing musical ability</li>
          <li><strong>Expert Instruction:</strong> 15+ years experience with Bachelor's in Music Education and Suzuki registration</li>
          <li><strong>Learn from Home:</strong> High-quality virtual lessons that fit your schedule</li>
          <li><strong>Flexible Scheduling:</strong> Book lessons that work with your busy lifestyle</li>
          <li><strong>Personalized Curriculum:</strong> Custom lesson plans tailored to your musical goals</li>
          <li><strong>All Ages Welcome:</strong> Perfect for children (age 8+), teens, adults, and seniors</li>
        </ul>

        <div className="text-center">
          <Link 
            to="/first-lesson" 
            className="btn btn-primary btn-lg mt-6"
          >
            Book Your Free Trial Lesson
          </Link>
        </div>
      </div>
    </div>
  );
}