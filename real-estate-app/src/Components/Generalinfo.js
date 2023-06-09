import React from "react";
import "../Styles/InfoHeader.css";
import Navbar from "./Navbar";
import "../Styles/Generalinfo.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Generalinfo() {
  const navigate = useNavigate();
  let location = useLocation();

  function convertToBase64(e) {
    let reader = new FileReader();
    reader.onload = () => {
      setdata({ ...data, image: reader.result });
      console.log(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  let dataToEdit = location.state;
  console.log(dataToEdit);
  const [data, setdata] = useState({
    name: "",
    mobile: "",
    posted_by: "",
    sale_type: "",
    featured_package: "",
    ppd_package: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.name===""||data.mobile===""||data.posted_by===""||data.sale_type===""||data.featured_package===""||data.ppd_package===""){
      alert("Please fill all the details")
      
    }
    else{
    localStorage.setItem("General_Info", JSON.stringify(data));
    navigate("/locationinfo", { state: dataToEdit });
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
              <div style={{ marginTop: "10px" }}>
                <span className="numbers">2</span> Property Detail
              </div>
            </span>

            <span id="gi">
              <div style={{  color: "white" , width:"150px",
              height: "50px",
              background: "#6AB4F8",
              boxShadow: "0px 13px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: "50px",
              textAlign : "center",
              paddingTop:"10px",
              marginTop:"-3.5px"
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
                  3
                </span>{" "}
                General Info
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
            <section id="section1">
              <div className="name">
                <label for="name" id="lname">
                  Name
                </label>
                <br />
                <input
                  id="name"
                  placeholder={dataToEdit ? dataToEdit.mobile : "Name"}
                  type="text"
                  onChange={(e) => setdata({ ...data, name: e.target.value })}
                />
              </div>

              <div className="posted_by">
                <label for="posted_by">Posted By </label>
                <br />
                <select
                  id="posted_by"
                  onChange={(e) =>
                    setdata({ ...data, posted_by: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Posted By
                  </option>
                  <option>Self</option>
                  <option>Family Member</option>
                </select>
              </div>

              <div className="featured_package">
                <label for="featured_package">Featured Package </label>
                <br />
                <select
                  id="featured_package"
                  onChange={(e) =>
                    setdata({ ...data, featured_package: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Featured Package
                  </option>
                  <option>Yes</option>
                  <option>No </option>
                </select>
              </div>

              {!dataToEdit && <div className="image">
              <input
                type="file"
                onChange={convertToBase64}
              />
            </div>}
            </section>

            <section id="section2">
              <div className="mobile">
                <label for="mobile" id="lmobile">
                  Mobile
                </label>
                <br />
                <input
                  id="mobile"
                  placeholder={
                    dataToEdit ? dataToEdit.mobile : "Enter Mobile Number"
                  }
                  type="text"
                  onChange={(e) => setdata({ ...data, mobile: e.target.value })}
                />
              </div>

              <div className="sale_type">
                <label for="sale_type">Sale Type</label>
                <br />
                <select
                  id="sale_type"
                  onChange={(e) =>
                    setdata({ ...data, sale_type: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Select Sale Type
                  </option>
                  <option>Equity</option>
                  <option>REO</option>
                  <option>Short Sale</option>
                </select>
              </div>

              <div className="ppd_package">
                <label for="ppd_package">PPD Package</label>
                <br />
                <select
                  id="ppd_package"
                  onChange={(e) =>
                    setdata({ ...data, ppd_package: e.target.value })
                  }
                >
                  <option value="" className="selected">
                    Please Select{" "}
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </section>
          </div>
        </div>
        <Link to="/propertydetails">
          {!dataToEdit && <button id="bt1">Previous</button>}
        </Link>
        <button id="bt2" onClick={handleSubmit}>
          Save & Continue
        </button>
      </div>
      <Navbar />
      <h6 className="alert_for_name">Please keep the Name and mobile Same. Else Database will not be updated</h6>
    </>
  );
}
