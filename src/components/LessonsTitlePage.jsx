import { Link } from "react-router-dom";


export default function LessonsTitlePage() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-8 lg:w-2/3">
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
        <h2 className="card-title text font-bold text-2xl text-left sm:text-4xl">Start or continue your musical journey today!</h2>
        <p>
          We will help you achieve your musical goals whether you are playing your first notes or refining virtuosic techniques.
        </p>  
        <p>
          Now enrolling violin, viola, and guitar students of all ages and skill levels for virtual lessons.
        </p>
        <div className="card-actions justify-end">
          <Link to="/meetandgreet">
            <button className="btn btn-primary">Schedule a Meet and Greet</button>
          </Link>
        </div>
      </div>
    </div>
  );
}