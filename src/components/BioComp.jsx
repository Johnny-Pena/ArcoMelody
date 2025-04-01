import { Link } from "react-router-dom";

export default function BioComp() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/jennyHeadshotCropped.jpg"
          className="w-1/2 sm:w-1/2 lg:w-1/3 lg:max-w-sm rounded-lg shadow-2xl"
          alt="Jenny Headshot"
        />
        <div className="lg:ml-8">
          <h1 className="text-3xl font-bold">Bio</h1>
          <p className="py-6">
            With a collaborative, encouraging teaching style, Jenny could not be more thrilled to team up with you and start you on your musical journey!
          </p>
          <p>
            Jenny is currently an active educator in Texas and has experience leading numerous K-5 String and music programs. But no matter your age, she can definitely help take your playing to the next level. Jenny has received a bachelor's degree in Music Education from the University of Texas in San Antonio (UTSA).
          </p>
          <Link to="/signUp" className="btn btn-primary mt-6">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}