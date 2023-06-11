import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/propertyview.css";
import eye from "../Images/Navbar_Images/eye.png";
import edit from "../Images/Table_Images/pencil.png";
import property_image from "../Images/Table_Images/gallary.png";
import Header from "./Header";

export default function PropertyView() {
  let [showAll, setShowAll] = useState(true);
  let [searchData, setSearchData] = useState("");
  let [propertyData,setPropertyData] = useState([]);

  useEffect(() => {
    getAll();
  },[]);

  function getAll() {
    fetch("http://localhost:8081/postDetails/getAll", {
      method: "GET",
    }).then((res) => res.json()).then((e) => {
      setPropertyData(e.data);
    })
  }

  function searchActivate(e) {
    e.preventDefault();
    setShowAll(false);
  }

  const filteredData = useMemo(() => {
    if (!showAll) {
      return propertyData.filter((ele) => ele.id.toString() === searchData);
    }
    return propertyData;
  }, [showAll, searchData]);

  return (
    <>
      <div className="property-view">
        <Navbar />
        <Header />
        <div className="searchbar">
          <form className="d-flex" role="search" onSubmit={searchActivate}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
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
              {showAll === true &&
                filteredData.map((ele) => {
                  return (
                    <tr key={ele.name}>
                      <td>{ele.name}</td>
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
                      <td>1</td>
                      <td>UnSold</td>
                      <td>{ele.city}</td>
                      <td className="action_images"> 
                        <img src={eye} alt="Not Found" className="table_image" />
                        <img src={edit} alt="Not Found" className="table_image" />
                      </td>
                    </tr>
                  );
                })}
              {showAll === false &&
                filteredData
                  .filter((ele) => ele.id.toString() === searchData)
                  .map((ele) => {
                    return (
                      <tr key={ele.name}>
                      <td>{ele.name}</td>
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
                      <td>1</td>
                      <td>UnSold</td>
                      <td>{ele.city}</td>
                      <td className="action_images"> 
                        <img src={eye} alt="Not Found" className="table_image" />
                        <img src={edit} alt="Not Found" className="table_image" />
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
