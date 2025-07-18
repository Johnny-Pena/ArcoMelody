import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [bgStyle, setBgStyle] = useState({
    backgroundImage: `url(/images/jennyHeadshotCropped.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 400) {
        setBgStyle({
          backgroundImage: `url(/images/jennyHeadshotCropped.png)`,
          backgroundSize: "130%", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom", 
        });
      } else {
        setBgStyle({
          backgroundImage: `url(/images/jennyHeadshotCropped.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero min-h-screen" style={bgStyle}>
      <div
        className="hero-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      ></div>
      <div className="hero-content text-neutral-content text-right sm:text-left pt-24">
        <div className="max-w-md mt-10 sm:max-w-2xl mt-40">
          <h1 className="mb-5 text-2xl font-bold sm:text-5xl">
            Melodies at your fingertips. <br />From anywhere.
          </h1>
          <h2 className="mb-5 text-lg font-bold sm:text-2xl">
            Now enrolling violin, viola, and guitar students.
          </h2>
          <Link to="/lessons" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}