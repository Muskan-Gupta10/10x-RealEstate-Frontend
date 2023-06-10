import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [signupDetails, setSignupDetails] = useState({});
  const [dataSent, setDataSent] = useState(false);
  let navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.cpassword.value;

    if (password === confirmPassword) {
      console.log("matching");
      setSignupDetails({
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        cpassword: e.target.elements.cpassword.value,
      });
      setDataSent(true);
    } else {
      window.alert("Passwords are not matching");
    }
  };

  useEffect(() => {
    const userSignup = () => {
      axios({
        method: "post",
        url: "", // this line should be changed
        data: signupDetails,
      })
        .then((response) => {
          window.alert("User created successfully!\nPlease Login First.");
          navigate("/login");
        })
        .catch((err) => {
          if (err.response.data === "User already exists!") {
            window.alert("Email already exists!");
          }
        });
    };

    if (dataSent) {
      userSignup();
      setDataSent(false);
    }
  }, [signupDetails, dataSent, navigate]);

  return (
    <>
      <div className="signup-container">
        <div className="signup-formDiv">
          <h1>Realestate</h1>
          <p>Create New Account</p>
          <form action="/signup" method="POST" onSubmit={handleSignup}>
            <input
              id="username"
              type="text"
              required={true}
              name="username"
              placeholder="Enter Your Name"
            />
            <input
              id="email"
              type="email"
              required={true}
              name="email"
              placeholder="Email Address"
            />
            <input
              id="password"
              name="password"
              required={true}
              type="password"
              placeholder="Password"
            />
            <input
              id="cpassword"
              name="cpassword"
              required={true}
              type="password"
              placeholder="Confirm Password"
            />
            <button type="submit" id="signup-button">
              Sign Up
            </button>
          </form>
        </div>

        <h2 id="afterForm">
          <Link className="signin-link" to="/">
            Sign in
          </Link>
        </h2>
      </div>
    </>
  );
}
