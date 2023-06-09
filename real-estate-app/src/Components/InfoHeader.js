import React from "react";
import "../Styles/InfoHeader.css";
//import { NavLink } from 'react-router-dom'
function InfoHeader() {
  return (<>
    <div className="navbar">
      <div className="navheading">
        <h1>Add New Property</h1>
      </div>
      <div className="sections">
        <span id="bi">
          <div style={{ marginTop: "10px", color: "white" }}>
            <span
              style={{
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
                padding: "0px 6px 0px 6px",
              }}
            >
              1
            </span>{" "}
            Basic Info
          </div>
        </span>
        <span id="pd">
          <div style={{ marginTop: "10px" }}>
            <span className="numbers">2</span>
             {" "}Property Detail
          </div>
        </span>
        <span id="gi">
          <div style={{ marginTop: "10px" }}>
          <span className="numbers">3</span>
          {" "}General Info</div>
        </span>
        <span id="li">
          <div style={{ marginTop: "10px" }}>
          <span className="numbers">4</span>
          {" "}Location Info</div>
        </span>
      </div>
    </div>
    <div id='footerbtns'>
              <button id="bt1">Cancel</button>
              <button id='bt2'>Save & Continue</button>
    </div>
    </>
  );
}

export default InfoHeader;
