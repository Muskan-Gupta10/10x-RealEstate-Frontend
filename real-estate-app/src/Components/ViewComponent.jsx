import React from "react";
import "../Styles/viewcomponent.css";
import { useLocation } from "react-router-dom";

export default function ViewComponent() {

  let location = useLocation();

  let dataToDisplay = location.state?.data;
  console.log(location);

  return (
    <>
      <div className="title">
        <h1>Information of property with UserId ID</h1>
      </div>
      <div className="show-table">
        <table class="table table-hover">
          <tbody>
            <tr>
              <td>id</td>
              <td>id</td>
            </tr>
            <tr>
              <td>property</td>
              <td>property</td>
            </tr>
            <tr>
              <td>contact</td>
              <td>contact</td>
            </tr>
            <tr>
              <td>area</td>
              <td>area</td>
            </tr>
            <tr>
              <td>views</td>
              <td>views</td>
            </tr>
            <tr>
              <td>status</td>
              <td>status</td>
            </tr>
            <tr>
              <td>daysLeft</td>
              <td>daysLeft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
