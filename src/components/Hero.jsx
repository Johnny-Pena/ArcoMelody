import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
        ></div>
      <div className="hero-content text-neutral-content text-right sm:text-left pt-24">
        <div className="max-w-md mt-10 sm:max-w-2xl mt-40">
          <h1 className="mb-5 text-2xl font-bold sm:text-5xl">Melodies at your fingertips. <br />From anywhere.</h1>
          <h2 className="mb-5 text-lg font-bold sm:text-2xl">Now enrolling violin, viola, and guitar students.</h2>
          <Link to="/lessons" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
  );
}