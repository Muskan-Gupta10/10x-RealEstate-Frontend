import React from "react";
import { Routes, Route} from "react-router-dom";
import PropertyDetails from './Components/PropertyDetails'
import PropertyView from './Components/PropertyView'
import Generalinfo from "./Components/Generalinfo"
import LocationInfo from './Components/LocationInfo'
import BasicInfo from './Components/BasicInfo'
import Login from './Components/Auth/Login/login'
import Signup from './Components/Auth/SignUp/Signup'
import ViewComponent from "./Components/ViewComponent";
import Protected from "./Components/protected";
import ImageDisplay from "./Components/ImageDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/propertyview"
          element={
            <Protected>
              <PropertyView />
            </Protected>
          }
        ></Route>
        <Route
          path="/basicinfo"
          element={
            <Protected>
              <BasicInfo />
            </Protected>
          }
        ></Route>
        <Route
          path="/generalinfo"
          element={
            <Protected>
              <Generalinfo />
            </Protected>
          }
        ></Route>
        <Route
          path="/propertydetails"
          element={
            <Protected>
              <PropertyDetails />
            </Protected>
          }
        ></Route>
		<Route
          path="/locationinfo"
          element={
            <Protected>
              <LocationInfo />
            </Protected>
          }
        ></Route>
		<Route
          path="/viewcomponent"
          element={
            <Protected>
              <ViewComponent />
            </Protected>
          }
        ></Route>
        <Route path="/viewimage" element={<ImageDisplay />} />
      </Routes>
    </>
  );
}
export default App;