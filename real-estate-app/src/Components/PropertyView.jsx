import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/propertyview.css";
import eye from "../Images/Navbar_Images/eye.png";
import edit from "../Images/Table_Images/pencil.png";
import property_image from "../Images/Table_Images/gallary.png";
import Header from "./Header";
import { Link } from "react-router-dom"

export default function PropertyView() {
  let [propertyData,setPropertyData] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [filteredData, setFilteredData] = useState([]);
  let [originalData,setOriginalData] = useState([]);

  useEffect(() => {
    getAll();
  },[]);

  function getAll() {
    fetch("http://localhost:8081/postDetails/getAll", {
      method: "GET",
    }).then((res) => res.json())
    .then((e) => {
      let updatedData = e.data.map((item) => ({
        ...item,
        view: parseInt(Math.random() * 10) ,
        status: parseInt(Math.random() * 10000) % 2 === 0 ? "Sold" : "UnSold"
      }));
      setPropertyData(updatedData);
      setFilteredData(updatedData);
      setOriginalData(updatedData);
    })
  }

  // function handleViews(index) {
  //   setFilteredData((prevData) => {
  //     let updatedData = [...prevData];
  //     updatedData[index] = {
  //       ...updatedData[index],
  //       view: updatedData[index].view + 1
  //     }
  //     return updatedData;
  //   });
  // }

  function searchClicked(e) {
    e.preventDefault();

    if(searchValue === "") {
      setFilteredData(originalData);
    }
    else {
      for(let i = 0; i < propertyData.length; i++) {
        if(propertyData[i].propertyId === parseInt(searchValue)) {
          setFilteredData([propertyData[i]]);
        }
      }
    }
  }

  return (
    <>
      <div className="property-view">
        <Navbar />
        <Header />
        <div className="searchbar">
          <form className="d-flex" role="search" onSubmit={searchClicked}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
            
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div id="btncontainer">
        <Link to="/basicinfo"><button id="addproperty">Add Property</button>
        </Link>
        </div>
        <div className="property-table">
          <table className="table table-borderless table-space">
            <thead>
              <tr key="head">
                <th scope="col">PPD ID</th>
                <th scope="col">Image</th>
                <th scope="col">Property</th>
                <th scope="col">Contact</th>
                <th scope="col">Area</th>
                <th scope="col">Views</th>
                <th scope="col">Status</th>
                <th scope="col">City</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((ele,index) => {
                  return (
                    <tr key={ele.propertyId}>
                      <td>{ele.propertyId}</td>
                      <td>
                        <img
                          src={property_image}
                          alt="not found"
                          className="table_image"
                        />
                      </td>
                      <td>{ele.property_type}</td>
                      <td>{ele.mobile}</td>
                      <td>{ele.area}</td>
                      <td>{ele.view}</td>
                      <td>{ele.status}</td>
                      <td>{ele.city}</td>
                      <td className="action_images">
                        <Link to="/viewcomponent" state={ele}>
                          <img src={eye} alt="Not Found" className="table_image"/>
                        </Link>
                        <Link to="/basicinfo" state={ele}>
                          <img src={edit} alt="Not Found" className="table_image" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}