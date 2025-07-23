import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [bgSize, setBgSize] = useState(() =>
    window.innerWidth >= 1024 ? "35%" : "75%"
  );

  useEffect(() => {
    function handleResize() {
      const newSize = window.innerWidth >= 1024 ? "35%" : "75%";
      setBgSize(prev => (prev !== newSize ? newSize : prev));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgStyle = {
    backgroundImage: `url(/images/jennyHeadshotCropped.png)`,
    backgroundSize: bgSize,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    transition: "background-size 0.3s ease", // smooth transition
  };

  return (
    <div
      className="hero base-100"
      style={{
        ...bgStyle,
        minHeight: "95vh",
      }}
    >
      <div className="hero-content text-left pb-100 sm:pt-24">
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