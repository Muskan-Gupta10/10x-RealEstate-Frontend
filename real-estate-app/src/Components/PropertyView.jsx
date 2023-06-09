import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/propertyview.css";

export default function PropertyView() {
  let [showAll, setShowAll] = useState(true);
  let [searchData, setSearchData] = useState("");

  function searchActivate(e) {
    e.preventDefault();
    setShowAll(false);
  }

  const filteredData = useMemo(() => {
    let testData = [
      {
        id: 1,
        image: "Image",
        property: "Plot",
        contact: "90000 90000",
        area: "1200",
        views: "02",
        status: "Sold",
        daysLeft: "00",
        action: "Action",
      },
      {
        id: 2,
        image: "Image",
        property: "House",
        contact: "80000 80000",
        area: "2400",
        views: "05",
        status: "Unsold",
        daysLeft: "38",
        action: "Action",
      },
      {
        id: 3,
        image: "Image",
        property: "Plot",
        contact: "90000 80000",
        area: "4600",
        views: "03",
        status: "Unsold",
        daysLeft: "66",
        action: "Action",
      },
      {
        id: 4,
        image: "Image",
        property: "Flat",
        contact: "90055 50000",
        area: "7700",
        views: "09",
        status: "Unsold",
        daysLeft: "49",
        action: "Action",
      },
    ];

    if (!showAll) {
      return testData.filter((ele) => ele.id.toString() === searchData);
    }
    return testData;
  }, [showAll, searchData]);

  return (
    <>
      <div className="property-view">
        <Navbar />
        <div className="header">
          <div className="userid">USER ID: 55448877</div>
          <div className="username">
            <select name="users" id="users">
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
        </div>
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
              <tr>
                <th scope="col">PPD ID</th>
                <th scope="col">Image</th>
                <th scope="col">Property</th>
                <th scope="col">Contact</th>
                <th scope="col">Area</th>
                <th scope="col">Views</th>
                <th scope="col">Status</th>
                <th scope="col">Days Left</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {showAll === true &&
                filteredData.map((ele) => {
                  return (
                    <tr>
                      <td>{ele.id}</td>
                      <td>{ele.image}</td>
                      <td>{ele.property}</td>
                      <td>{ele.contact}</td>
                      <td>{ele.area}</td>
                      <td>{ele.views}</td>
                      <td>{ele.status}</td>
                      <td>{ele.daysLeft}</td>
                      <td>{ele.action}</td>
                    </tr>
                  );
                })}
              {showAll === false &&
                filteredData
                  .filter((ele) => ele.id.toString() === searchData)
                  .map((ele) => {
                    return (
                      <tr>
                        <td>{ele.id}</td>
                        <td>{ele.image}</td>
                        <td>{ele.property}</td>
                        <td>{ele.contact}</td>
                        <td>{ele.area}</td>
                        <td>{ele.views}</td>
                        <td>{ele.status}</td>
                        <td>{ele.daysLeft}</td>
                        <td>{ele.action}</td>
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
