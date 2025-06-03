import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "retro";
    }
    return "retro";
  });

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("retro");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html")?.setAttribute("data-theme", localTheme || "retro");
    }
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-300 z-50">
      <div className="navbar bg-base-300 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown ml-6">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              role="menu"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mb-14">
              <li role="menuitem"><Link to="/" className="text-xl font-bold">Home</Link></li>
              <li role="menuitem"><Link to="/lessons" className="text-xl font-bold">Lessons</Link></li>
              <li role="menuitem"><HashLink smooth to="/lessons#pricing-section" className="text-xl font-bold">Pricing</HashLink></li>
              <li role="menuitem"><Link to="/bio" className="text-xl font-bold">Bio</Link></li>
              <li role="menuitem"><Link to="/core-values" className="text-xl font-bold">Core Values</Link></li>
              <li role="menuitem"><Link to="/contact" className="text-xl font-bold">Contact</Link></li>
            </ul>
          </div>
       <Link to="/" className="btn btn-ghost text-xl flex items-center sm:ml-4">
        <img
          src="/images/ArcoMelodyFavicon-32x32.svg"
          alt="Arco Melody Logo"
          className="w-7 h-7"
          style={{ display: "inline-block" }}
        />
        <span className="hidden sm:inline">Arco Melody</span>
      </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-medium sm:text-lg" role="menubar">
            <li role="menuitem"><Link to="/lessons">Lessons</Link></li>
            <li role="menuitem"><HashLink smooth to="/lessons#pricing-section">Pricing</HashLink></li>
            <li role="menuitem"><Link to="/bio">Bio</Link></li>
            <li role="menuitem"><Link to="/core-values">Core Values</Link></li>
            <li role="menuitem"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
            <span className="mr-2">🌞</span>
            <input
              type="checkbox"
              className="toggle toggle-sm md:toggle-md"
              onChange={handleToggle}
              checked={theme === "dracula"}
            />
            <span className="ml-2">🌚</span>
          </div>
          <Link to="/meetandgreet" className="btn btn-primary ml-6 mr-10 btn-sm lg:btn">Schedule a Meet and Greet</Link>
        </div>
      </div>
    </nav>
  );
}