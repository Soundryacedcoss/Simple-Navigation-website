import React from "react";
import { Link, Outlet } from "react-router-dom";
import Image from "./Image";
import img1 from "./image/logo.jpeg";
export default function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={img1} alt="" />
      </div>
      <div className="nav">
        <nav>
          <Link to="/Home">Home</Link>
          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <Link to='Link1'>Link 1</Link>
              <Link to='Link2'>Link 2</Link>
            </div>
          </div>
          <Link to="/Contactus">Contact us</Link>
          <Outlet />
        </nav>
      </div>
     
    </div>
     {/* <Image/> */}
     </>
  );
}
