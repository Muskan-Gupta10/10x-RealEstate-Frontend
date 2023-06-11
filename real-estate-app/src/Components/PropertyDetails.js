import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/PropertyDetails.css";
import { useState, useEffect } from "react";
//import { Link, useNavigate } from "react-router-dom";
import Header from './Header'

export default function PropertyDetails() {

const [data,setdata]=useState({
    length: "",
    breadth: "",
    total_area: "",
    area_unit: "",
    no_of_bhk: "",
    no_of_floors: "",
    attached: "",
    western_toilet: "",
    furnished: "",
    car_parking: "",
    lift: "",
    electricity: "",
    facing: "",
    
  })

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

return(
    <>
    <Header/>
    <div id="container">
    <div className="navbar">
    <div className="navheading">
      <h1>Add New Property</h1>
    </div>
    <div className="sections">
      <span id="bi">
        <div style={{ marginTop: "10px" }}>
          <span
            className="numbers">
            1
          </span>{" "}
          Basic Info
        </div>
      </span>

      <span id="pd">
        <div style={{ marginTop: "10px",color:"white" }}>
          <span className="numbers"
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            color: "black",
            padding: "0px 6px 0px 6px",
          }}
          >2</span> Property Detail
        </div>
      </span>

      <span id="gi">
        <div style={{ marginTop: "10px" }}>
          <span className="numbers">3</span> General Info
        </div>
      </span>

      <span id="li">
        <div style={{ marginTop: "10px" }}>
          <span className="numbers">4</span> Location Info
        </div>
      </span>
    </div>
  </div>

  <div id="formContainer">
       <div id="details">
       <section id='section1'>

       <div className="length">
       <label for='length' id="llength">Length</label>
       <br/>
       <input id='length' placeholder='Example : 1000' type="text" onChange={(e)=>setdata({...data, length: e.target.value})}/>
      </div>

      <div className="total_area">
      <label for='total_area' id="ltotal_area">Total Area</label>
      <br/>
      <input id='total_area' placeholder='Example :7500' type="text" onChange={(e)=>setdata({...data, total_area: e.target.value})}/>
     </div>

     
       </section>

       </div>

  </div>
    </div>
    <Navbar/>
    </>
);

}
