import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from './Components/PropertyDetails'
import PropertyView from './Components/PropertyView'
import Generalinfo from "./Components/Generalinfo"
import LocationInfo from './Components/LocationInfo'
import BasicInfo from './Components/BasicInfo'
import Login from './Components/Auth/Login/Login'
import Logout from './Components/Auth/Logout/Logout'
import Signup from './Components/Auth/SignUp/Signup'


export default function App(){
  return(
    <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/" element={<PropertyView/>}></Route>
        <Route path="/basicinfo" element={<BasicInfo/>}></Route>
        <Route path="/generalinfo" element={<Generalinfo/>}></Route>
        <Route path="/propertydetails" element={<PropertyDetails/>}></Route>
        <Route path="/locationinfo" element={<LocationInfo/>}></Route>

      </Routes>
    </>
  )
}