import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/LocationInfo.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

export default function LocationInfo() {
  // const navigate = useNavigate();
  let location = useLocation();
  let dataToEdit = location.state;
  console.log(dataToEdit);
  const [data, setdata] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const Basic_Info = JSON.parse(localStorage.getItem("Basic_Info"));
    const General_Info = JSON.parse(localStorage.getItem("General_Info"));
    const Property_Details = JSON.parse(
      localStorage.getItem("Property_Details")
    );
    let DATA = {
      ...Basic_Info,
      ...Property_Details,
      ...General_Info,
      ...data,
    };
    sendPost(DATA);
  };

  function sendPost(DATA) {
    fetch("http://localhost:8081/addProperty/addProperty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(DATA),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => window.alert("Data Added Successfully"))
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const Basic_Info = JSON.parse(localStorage.getItem("Basic_Info"));
    const General_Info = JSON.parse(localStorage.getItem("General_Info"));
    const Property_Details = JSON.parse(
      localStorage.getItem("Property_Details")
    );
    let DATA = {
      ...Basic_Info,
      ...Property_Details,
      ...General_Info,
      ...data,
    };
    editPost(DATA);
  };

  function editPost(DATA) {
    fetch(`http://localhost:8081/addProperty/${DATA.name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(DATA),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => window.alert("Data Edited Successfully"))
  }

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
              <div style={{ marginTop: "10px", color: "white" }}>
                <span
                  className="numbers"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "0px 6px 0px 6px",
                  }}
                >
                  4
                </span>{" "}
                Location Info
              </div>
            </span>
          </div>
        </div>

        <div id="formContainer">
          <div id="details">
            <section id="section1">
              <div className="email">
                <label for="email" id="lemail">
                  Email
                </label>
                <br />
                <input
                  id="email"
                  placeholder={dataToEdit ? dataToEdit.email : "Email"}
                  type="text"
                  onChange={(e) => setdata({ ...data, email: e.target.value })}
                />
              </div>

              <div className="area">
                <label for="area" id="larea">
                  Area
                </label>
                <br />
                <input
                  id="area"
                  placeholder={dataToEdit ? dataToEdit.area : "Area"}
                  type="text"
                  onChange={(e) => setdata({ ...data, area: e.target.value })}
                />
              </div>

              <div className="address">
                <label for="address" id="laddress">
                  Address
                </label>
                <br />
                <input
                  id="address"
                  placeholder={dataToEdit ? dataToEdit.address : "Address"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, address: e.target.value })
                  }
                />
              </div>

              <div className="latitude">
                <label for="latitude" id="llatitude">
                  Latitude
                </label>
                <br />
                <input
                  id="latitude"
                  placeholder={dataToEdit ? dataToEdit.latitude : "Latitude"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, latitude: e.target.value })
                  }
                />
              </div>
            </section>

            <section id="section2">
              <div className="city">
                <label for="city">City</label>
                <br />
                <select
                  id="city"
                  onChange={(e) => setdata({ ...data, city: e.target.value })}
                >
                  <option value="" className="selected">
                    Select City{" "}
                  </option>
                  <option>Kolkata</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </select>
              </div>

              <div className="pincode">
                <label for="pincode" id="lpincode">
                  Pincode
                </label>
                <br />
                <input
                  id="pincode"
                  placeholder={dataToEdit ? dataToEdit.pincode : "Pincode"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, pincode: e.target.value })
                  }
                />
              </div>

              <div className="landmark">
                <label for="landmark" id="llandmark">
                  Landmark
                </label>
                <br />
                <input
                  id="landmark"
                  placeholder={dataToEdit ? dataToEdit.landmark : "Landmark"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, landmark: e.target.value })
                  }
                />
              </div>

              <div className="longitude">
                <label for="longitude" id="llongitude">
                  Longitude
                </label>
                <br />
                <input
                  id="longitude"
                  placeholder={dataToEdit ? dataToEdit.email : "Longitude"}
                  type="text"
                  onChange={(e) =>
                    setdata({ ...data, longitude: e.target.value })
                  }
                />
              </div>
            </section>
          </div>
        </div>
        <Link to="/generalinfo">
          {!dataToEdit && <button id="bt1">Previous</button>}
        </Link>
        {!dataToEdit && (
          <Link to="/propertyview">
            <button id="bt2" onClick={handleSubmit}>
              Add Property
            </button>
          </Link>
        )}
        {dataToEdit && (
          <Link to="/propertyview">
            <button id="bt2" onClick={handleEdit}>
              Edit Property
            </button>
          </Link>
        )}
      </div>
      <Navbar />
    </>
  );
}
