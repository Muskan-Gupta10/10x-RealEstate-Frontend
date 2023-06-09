import React from "react";
import "../Styles/navbar.css";
import property_image from "../Images/Navbar_Images/property.png";
import assistance_image from "../Images/Navbar_Images/assistance.png"
import received_image from "../Images/Navbar_Images/received.png";
import sent_image from "../Images/Navbar_Images/sent.png";
import views_image from "../Images/Navbar_Images/eye.png";
import tarrif_image from "../Images/Navbar_Images/tarrifplan.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar-part">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div>
          <ul className="nav flex-column">
            <li className="nav-item navbar-element">
              <img src={property_image} alt="not found" className="ele-images"/>
              <a className="nav-link active" href="/">
                Property
              </a>
            </li>
            <li className="nav-item">
              <img src={assistance_image} alt="not found" className="ele-images"/>
              <a className="nav-link" href="/">
                Assistance
              </a>
            </li>
            <li className="nav-item">
              <img src={received_image} alt="not found" className="ele-images"/>  
              <a className="nav-link" href="/">
                Received Interest
              </a>
            </li>
            <li className="nav-item">
              <img src={sent_image} alt="not found" className="ele-images"/>
              <a className="nav-link" href="/">
                Sent Interest
              </a>
            </li>
            <li className="nav-item">
              <img src={views_image} alt="not found" className="ele-images"/>
              <a className="nav-link" href="/">
                Property Views
              </a>
            </li>
            <li className="nav-item">
              <img src={tarrif_image} alt="not found" className="ele-images"/>
              <a className="nav-link" href="/">
                Tarrif Plan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
