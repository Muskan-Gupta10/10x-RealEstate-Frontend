import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/BasicInfo.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function BasicInfo() {
  const navigate = useNavigate();
  let location = useLocation();
  let dataToEdit = location.state;
  console.log(dataToEdit);
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


  const handleSubmit = (e) => {

    e.preventDefault();
    if(data.property_type===""||data.negotiable===""||data.price===""||data.ownership===""||data.property_age===""||data.property_approved===""||data.property_description===""||data.bank_loan===""){
      alert("Please fill all the details")
      
    }
    else{
    localStorage.setItem("Basic_Info", JSON.stringify(data));
    navigate("/propertydetails", { state: dataToEdit });
    }
  };

  return (
    <>
      <Header />
      <div id="container">
        <div className="navbar">
          <div className="navheading">
            <h2>Add New Property</h2>
          </div>
          <div className="sections">
            <span id="bi">
              <div style={{  color: "white" , width:"150px",
              height: "50px",
              background: "#6AB4F8",
              boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: "50px",
              textAlign : "center",
              paddingTop:"10px"
              }}>
              
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

        <div id="formContainer" >
          <div id="details" >
            <section id="section1">
              <div className="propertyType">
                <label for="propertyType">Property Type</label>
                <br />
                <select
                  id="propertyType"
                  onChange={(e) =>
                    setdata({ ...data, property_type: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Property Type
                  </option>
                  <option>Plot</option>
                  <option>House</option>
                  <option>Flat</option>
                </select>
              </div>
              <div className="price">
                <label for="price" id="lprice">
                  Price
                </label>
                <br />
                <input
                  id="price"
                  placeholder={dataToEdit ? dataToEdit.price : "Example : 10000"}
                  //placeholder="Example : 10000"
                  type="text"
                  onChange={(e) => setdata({ ...data, price: e.target.value })}
                  required
                />
              </div>
              <div className="propertyAge">
                <label for="propertyAge">Property Age</label>
                <br />
                <input
                  id="propertyAge"
                  placeholder={dataToEdit ? dataToEdit.property_age : "age"}
                  type="number"
                  onChange={(e) =>
                    setdata({ ...data, property_age: e.target.value })
                  }
                  required
                />
              </div>
              <div className="propDes">
                <label for="propDes">Property Description</label>
                <br />
                <input
                  id="propDes"
                  type="text"
                  placeholder={dataToEdit ? dataToEdit.property_description : ""}
                  onChange={(e) =>
                    setdata({ ...data, property_description: e.target.value })
                  }
                  required
                />
              </div>
            </section>

            <section id="section2">
              <div className="negotiable">
                <label for="negotiable">Negotiable</label>
                <br />
                <select
                  id="negotiable"
                  onChange={(e) =>
                    setdata({ ...data, negotiable: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Negotiable{" "}
                  </option>
                  <option>Negotiable</option>
                  <option>Non Negotiable</option>
                </select>
              </div>

              <div className="ownership">
                <label for="ownership">Ownership</label>
                <br />
                <input
                  id="ownership"
                  placeholder={dataToEdit ? dataToEdit.ownership : "Ownership"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, ownership: e.target.value })
                  }
                />
              </div>

              <div className="propApproved">
                <label for="propApproved">Property Approved</label>
                <br />
                <select
                  id="propApproved"
                  onChange={(e) =>
                    setdata({ ...data, property_approved: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Property Approved{" "}
                  </option>
                  <option>True</option>
                  <option>False</option>
                </select>
              </div>

              <div className="bankloan">
                <label for="bankloan">Bank Loan</label>
                <br />
                <select
                  id="bankloan"
                  onChange={(e) =>
                    setdata({ ...data, bank_loan: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Bank Loan{" "}
                  </option>
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
        <button id="bt2" onClick={handleSubmit}>
          Save & Continue
        </button>
      </div>
      <Navbar />
    </>
  );
}
