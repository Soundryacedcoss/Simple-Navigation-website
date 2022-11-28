import React from "react";
import "./Home.css";
import ig from "../ig.png";
import fb from "../fb.png";
import wall from "../wallpaper.png";
function Home() {
  return (
    <div>
      <ul>
        <li>
          <a
            href="instagram"
          >
            <img className="logo" src={ig} alt="ig" />
          </a>
        </li>
        <li>
          <a
            href={'Facebook'}
          >
            <img className="logo" src={fb} alt="fb" />
          </a>
        </li>
      </ul>
      <div className="homeDiv">
        <img className="wall" src={wall} alt="" />
      </div>
    </div>
  );
}

export default Home;
