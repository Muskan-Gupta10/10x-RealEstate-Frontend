import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PropertyDetails from './Components/PropertyDetails'
import PropertyView from './Components/PropertyView'
import Generalinfo from "./Components/Generalinfo"
import LocationInfo from './Components/LocationInfo'
import BasicInfo from './Components/BasicInfo'
import LoginForm from './Components/Auth/Login/LoginForm'
import Logout from './Components/Auth/Logout/Logout'
import Signup from './Components/Auth/SignUp/Signup'
import ViewComponent from "./Components/ViewComponent";
import ImageDisplay from "./Components/ImageDisplay";

export default function App(){
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/propertyview" element={<PropertyView/>}></Route>
          <Route path="/basicinfo" element={<BasicInfo/>}></Route>
          <Route path="/generalinfo" element={<Generalinfo/>}></Route>
          <Route path="/propertydetails" element={<PropertyDetails/>}></Route>
          <Route path="/locationinfo" element={<LocationInfo/>}></Route>
          <Route path="/viewcomponent" element={<ViewComponent />} />
          <Route path="/viewimage" element={<ImageDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}