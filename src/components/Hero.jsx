import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="hero"
      style={{
        height: "100vh",
        backgroundImage: "url(/images/Jenny-Website-Grey.png)",
      }}
    >
      <div className="hero-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
        ></div>
      <div className="hero-content text-neutral-content text-right sm:text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Learn how to play music from anywhere with virtual lessons.</h1>
          <Link to="/lessons" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
  );
}