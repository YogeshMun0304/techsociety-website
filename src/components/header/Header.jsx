import { useState } from "react";
import "./header.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Tech Society IIIT-Bh
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {!isNavExpanded ? (
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
            alt="menu--v6"
          />
        ) : (
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
            alt="multiply"
          />
        )}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/chapters">Chapters</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


