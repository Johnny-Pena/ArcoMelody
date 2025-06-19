import { Link } from "react-router-dom";

export default function LessonsTitlePage() {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-4 lg:w-2/3">
        <div className="flex justify-center items-center p-4">
          <div className="w-full sm:w-3/4 lg:w-[560px] lg:h-[315px]">
            <iframe
              className="w-full h-[315px] lg:w-[560px] lg:h-[315px]"
              src="https://www.youtube.com/embed/WZYjDAODMfA?si=5lIiJDa9I3I3XaH1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl sm:text-2xl mb-2 text-left">
            Melodies at your fingertips. From Anywhere.
          </h2>
          <ul className="list-disc list-inside mb-4 text-left text-lg">
            <li>Learn from experienced teachers</li>
            <li>Personalized curriculum for every student</li>
            <li>Flexible scheduling to fit your needs</li>
            <li>Play your favorite songs</li>
          </ul>
          <h3 className="font-semibold mt-2 mb-1 text-left text-xl">How It Works</h3>
          <ol className="list-decimal list-inside mb-4 text-left text-lg">
            <li>Sign up for a FREE lesson</li>
            <li>Get matched with your teacher</li>
            <li>Subscribe to a plan that works best for you <br />and begin your musical journey!</li>
          </ol>
          <div className="card-actions justify-center">
            <Link to="/first-lesson">
              <button className="btn btn-primary btn-lg">
                Book a FREE lesson
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}