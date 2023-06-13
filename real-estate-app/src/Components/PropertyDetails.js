import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/PropertyDetails.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function PropertyDetails() {
  const navigate = useNavigate();
  let location = useLocation();
  let dataToEdit = location.state;
  console.log(dataToEdit);
  const [data, setdata] = useState({
    length: "",
    breadth: "",
    total_area: "",
    area_unit: "",
    no_of_bhk: "",
    no_of_floor: "",
    attached: "",
    western_toilet: "",
    furnished: "",
    car_parking: "",
    lift: "",
    electricity: "",
    facing: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.furnished===""||data.car_parking===""||data.lift===""||data.electricity===""||data.facing===""||data.length===""||data.breadth===""||data.total_area===""||data.area_unit===""||data.no_of_bhk===""||data.no_of_floor===""||data.attached===""||data.western_toilet===""){
      alert("Please fill all the details")
      
    }
    else{
    localStorage.setItem("Property_Details", JSON.stringify(data));
    navigate("/generalinfo" , {state: dataToEdit});
    }
  };

  return (
    <>
      <Header />
      <div id="container">
        <div className="navbar">
          <div className="navheading">
            <h1>Add New Property</h1>
          </div>
          <div className="sections">
            <span id="bi">
              <div style={{ marginTop: "10px" }}>
                <span className="numbers">1</span> Basic Info
              </div>
            </span>

            <span id="pd">
              <div style={{  color: "white" , width:"170px",
              height: "50px",
              background: "#6AB4F8",
              boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: "50px",
              textAlign : "center",
              paddingTop:"10px"
              }}>
                <span
                  className="numbers"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "0px 6px 0px 6px",
                  }}
                >
                  2
                </span>{" "}
                Property Detail
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

        <div id="formContainer" style={{
          position:"absolute",
          backgroundColor:  "#F5F5F5",
          height: "80vh",
          width:"75vw",
          marginTop: "250px",
          marginLeft: "300px",
          borderRadius: "20px",
          color: "rgb(87, 80, 80)"}}>
          <div id="details">
            <section id="section1">
              <div className="length">
                <label for="length" id="llength">
                  Length
                </label>
                <br />
                <input
                  id="length"
                  placeholder={dataToEdit ? dataToEdit.email : "Example : 1000"}
                  type="text"
                  onChange={(e) => setdata({ ...data, length: e.target.value })}
                />
              </div>

              <div className="total_area">
                <label for="total_area" id="ltotal_area">
                  Total Area
                </label>
                <br />
                <input
                  id="total_area"
                  placeholder={dataToEdit ? dataToEdit.email : "Example :7500"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, total_area: e.target.value })
                  }
                />
              </div>

              <div className="no_of_bhk">
                <label for="no_of_bhk">No of BHK</label>
                <br />
                <input
                  id="no_of_bhk"
                  placeholder={dataToEdit ? dataToEdit.email : "Select No of BHK"}
                  type="number"
                  max={6}
                  min={1}
                  onChange={(e) =>
                    setdata({ ...data, no_of_bhk: e.target.value })
                  }
                />
              </div>

              <div className="attached">
                <label for="attached">Attached</label>
                <br />
                <select
                  id="attached"
                  onChange={(e) =>
                    setdata({ ...data, attached: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Attached{" "}
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="furnished">
                <label for="furnished">Furnished</label>
                <br />
                <select
                  id="furnished"
                  onChange={(e) =>
                    setdata({ ...data, furnished: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Furnished{" "}
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="lift">
                <label for="lift">Lift</label>
                <br />
                <select
                  id="lift"
                  onChange={(e) => setdata({ ...data, lift: e.target.value })}
                >
                  <option value="" className="selected">
                    Select Lift{" "}
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="facing">
                <label for="facing">Facing</label>
                <br />
                <select
                  id="facing"
                  onChange={(e) => setdata({ ...data, facing: e.target.value })}
                >
                  <option value="" className="selected">
                    Select Facing{" "}
                  </option>
                  <option>East</option>
                  <option>West</option>
                  <option>North</option>
                  <option>South</option>
                </select>
              </div>
            </section>

            <section id="section2">
              <div className="breadth">
                <label for="breadth" id="lbreadth">
                  Breadth
                </label>
                <br />
                <input
                  id="breadth"
                  placeholder={dataToEdit ? dataToEdit.email : "Example : 1000"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, breadth: e.target.value })
                  }
                />
              </div>

              <div className="area_unit">
                <label for="area_unit">Area Unit</label>
                <br />
                <select
                  id="area_unit"
                  onChange={(e) =>
                    setdata({ ...data, area_unit: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Area Unit
                  </option>
                  <option value="meter">Meter Square</option>
                  <option value="yard">Yard Square</option>
                  <option value="cm">CM Square</option>
                </select>
              </div>

              <div className="no_of_floors">
                <label for="no_of_floors">No of Floors</label>
                <br />
                <input
                  id="no_of_floors"
                  placeholder={dataToEdit ? dataToEdit.email : "Select No of Floors"}
                  type="number"
                  max={10}
                  min={1}
                  onChange={(e) =>
                    setdata({ ...data, no_of_floor: e.target.value })
                  }
                />
              </div>

              <div className="western_toilet">
                <label for="western_toilet">Western Toilet </label>
                <br />
                <select
                  id="western_toilet"
                  onChange={(e) =>
                    setdata({ ...data, western_toilet: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Western Toilet{" "}
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="car_parking">
                <label for="car_parking">Car Parking </label>
                <br />
                <select
                  id="car_parking"
                  onChange={(e) =>
                    setdata({ ...data, car_parking: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Car Parking{" "}
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="electricity">
                <label for="electricity" id="lelectricity">
                  Electricity
                </label>
                <br />
                <input
                  id="electricity"
                  placeholder={dataToEdit ? dataToEdit.email : "Example : 3 phase"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, electricity: e.target.value })
                  }
                />
              </div>
            </section>
          </div>
        </div>
        <Link to="/basicinfo">
        {(!dataToEdit) && <button id="bt1" style={{marginTop: "105vh"}}>Previous</button>}
        </Link>

        <button id="bt2" onClick={handleSubmit} style={{marginTop: "105vh"}}>
          Save & Continue
        </button>
      </div>
      <Navbar />
    </>
  );
}
