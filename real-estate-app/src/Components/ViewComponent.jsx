import React from "react";
import "../Styles/viewcomponent.css";
import { useLocation } from "react-router-dom";

export default function ViewComponent() {
  let location = useLocation();
  let dataToDisplay = location.state;

  return (
    <>
      <div className="title">
        <h1>Information of property with UserId {dataToDisplay.propertyId}</h1>
      </div>
      <div className="show-table">
        <table class="table table-hover">
          <tbody>
            <tr>
              <td>id</td>
              <td>{dataToDisplay.propertyId}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{dataToDisplay.length}</td>
            </tr>
            <tr>
              <td>Total Area</td>
              <td>{dataToDisplay.total_area}</td>
            </tr>
            <tr>
              <td>No. of BHK</td>
              <td>{dataToDisplay.no_of_bhk}</td>
            </tr>
            <tr>
              <td>Attached</td>
              <td>{dataToDisplay.attached}</td>
            </tr>
            <tr>
              <td>Furnished</td>
              <td>{dataToDisplay.furnished}</td>
            </tr>
            <tr>
              <td>Lift</td>
              <td>{dataToDisplay.lift}</td>
            </tr>
            <tr>
              <td>Facing</td>
              <td>{dataToDisplay.facing}</td>
            </tr>
            <tr>
              <td>Area Unit</td>
              <td>{dataToDisplay.area_unit}</td>
            </tr>
            <tr>
              <td>No. of Floor</td>
              <td>{dataToDisplay.no_of_floor}</td>
            </tr>
            <tr>
              <td>Western Toilet</td>
              <td>{dataToDisplay.western_toilet}</td>
            </tr>
            <tr>
              <td>Car Parking</td>
              <td>{dataToDisplay.car_parking}</td>
            </tr>
            <tr>
              <td>Electricity</td>
              <td>{dataToDisplay.electricity}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{dataToDisplay.email}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{dataToDisplay.area}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{dataToDisplay.address}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{dataToDisplay.latitude}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{dataToDisplay.city}</td>
            </tr>
            <tr>
              <td>Pincode</td>
              <td>{dataToDisplay.pincode}</td>
            </tr>
            <tr>
              <td>Landmark</td>
              <td>{dataToDisplay.landmark}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{dataToDisplay.longitude}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{dataToDisplay.name}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>{dataToDisplay.mobile}</td>
            </tr>
            <tr>
              <td>Posted By</td>
              <td>{dataToDisplay.posted_by}</td>
            </tr>
            <tr>
              <td>Sale Type</td>
              <td>{dataToDisplay.sale_type}</td>
            </tr>
            <tr>
              <td>Featured Package</td>
              <td>{dataToDisplay.featured_package}</td>
            </tr>
            <tr>
              <td>PPD Package</td>
              <td>{dataToDisplay.ppd_package}</td>
            </tr>
            <tr>
              <td>Property Type</td>
              <td>{dataToDisplay.property_type}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{dataToDisplay.price}</td>
            </tr>
            <tr>
              <td>Property Age</td>
              <td>{dataToDisplay.property_age}</td>
            </tr>
            <tr>
              <td>Property Description</td>
              <td>{dataToDisplay.property_description}</td>
            </tr>
            <tr>
              <td>Negotiable</td>
              <td>{dataToDisplay.negotiable}</td>
            </tr>
            <tr>
              <td>Ownership</td>
              <td>{dataToDisplay.ownership}</td>
            </tr>
            <tr>
              <td>Property Approved</td>
              <td>{dataToDisplay.property_approved}</td>
            </tr>
            <tr>
              <td>Bank Loan</td>
              <td>{dataToDisplay.bank_loan}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
