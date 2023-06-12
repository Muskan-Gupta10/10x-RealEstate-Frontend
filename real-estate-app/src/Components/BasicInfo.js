import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/BasicInfo.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function BasicInfo() {
  const navigate=useNavigate()
 const [data, setdata] = useState({
  property_type: "",
  negotiable: "",
  ownership: "",
  price: "",
  property_age: "",
  property_approved: "",
  property_description: "",
  bank_loan: "",
});


  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("Basic_Info", JSON.stringify(data));
    navigate("/propertydetails");
        
        }
     
  


  return (
    <>
      <Header/>
      <div id="container">
      
        <div className="navbar">
          <div className="navheading">
            <h2>Add New Property</h2>
          </div>
          <div className="sections">
            <span id="bi">
              <div style={{ marginTop: "10px", color: "white" }}>
                <span
                  id="numbers"
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
                <span className="numbers">2</span> Property Detail
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
            <div className="propertyType">
              <label for="propertyType">Property Type</label><br/>
              <select  id="propertyType"  onChange={(e) =>
                setdata({ ...data, property_type: e.target.value })
              }>
              <option value="" className='selected'>Select Property Type</option>
                <option>Plot</option>
                <option>House</option>
                <option>Flat</option>
              </select>
            </div>
            <div className="price">
                <label for='price' id="lprice">Price</label>
                <br/>
                <input id='price' placeholder='Example : 10000' type="text" onChange={(e)=>setdata({...data, price: e.target.value})}/>
            </div>
            <div className="propertyAge">
                <label for='propertyAge'>Property Age</label>
                <br/>
                <input id='propertyAge' placeholder='age' type="number" onChange={(e)=>setdata({...data, property_age : e.target.value})}/>
            </div>
            <div className="propDes">
                <label for='propDes'>Property Description</label>
                <br/>
                <input id='propDes'  type="text" onChange={(e)=>setdata({...data, property_description: e.target.value})}/>
            </div>
            </section>

            <section id='section2'>
            <div className="negotiable">
                <label for="negotiable">Negotiable</label>
                <br/>
                <select  id="negotiable" onChange={(e)=>setdata({...data, negotiable: e.target.value})}>
                    <option value="" className='selected'>Select Negotiable </option>
                    <option>Negotiable</option>
                    <option>Non Negotiable</option>
                </select>
            </div>
            
            <div className="ownership">
                <label for='ownership'>Ownership</label>
                <br/>
                <input id='ownership' placeholder='Ownership' type="text" onChange={(e)=>setdata({...data, ownership: e.target.value})}/>
            </div>

            <div className="propApproved">
                <label for="propApproved">Property Approved</label>
                <br/>
                <select  id="propApproved" onChange={(e)=>setdata({...data, property_approved: e.target.value})}>
                    <option value="" className='selected'>Select Property Approved </option>
                    <option>True</option>
                    <option>False</option>
                </select>
            </div>

            <div className="bankloan">
            <label for="bankloan">Bank Loan</label>
            <br/>
            <select  id="bankloan" onChange={(e)=>setdata({...data, bank_loan: e.target.value})}>
                <option value="" className='selected'>Bank Loan </option>
                <option>Bank Loan Taken</option>
                <option>No Bank Loan Taken</option>
            </select>
            
            </div>
            </section>
          
          
          
          </div>
          
        </div>
        <Link to="/propertyView">
            <button id="bt1">Cancel</button>
        </Link>
            <button id="bt2" onClick={handleSubmit}>Save & Continue</button>
      
            </div>
            <Navbar/>
    </>
    
  );
}
