import { Link } from "react-router-dom";
import YouTubeFacade from './YouTubeFacade';

export default function LessonsTitlePage() {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-4 lg:w-2/3">
        <div className="flex justify-center items-center p-4">
          <div className="w-full sm:w-3/4 lg:w-[560px] lg:h-[315px]">
            <YouTubeFacade
              videoId="WZYjDAODMfA"
              title="YouTube video player"
              className="w-full h-[315px] lg:w-[560px] lg:h-[315px]"
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl sm:text-2xl mb-2 text-left">
            Why Choose Virtual Lessons with Arco Melody?
          </h2>
          
          <ul className="list-disc list-inside mb-4 text-left text-lg">
            <li><strong>Experienced teachers</strong> with university degrees</li>
            <li><strong>Personalized curriculum</strong> tailored to your goals</li>
            <li><strong>Flexible scheduling</strong> that fits your lifestyle</li>
            <li><strong>Play your favorite songs</strong> alongside classical training</li>
          </ul>

          
        </div>
      </div>
    </>
  );
}