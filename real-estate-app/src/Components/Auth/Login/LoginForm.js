import React, { useState, useEffect } from "react";
import { Link, useNavigate, Router } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./login.css";

export default function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({});
  const [dataSent, setDataSent] = useState(false);
  const [cookies, setCookie] = useCookies([]);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginDetails({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    });
    setDataSent(true);
  };

  useEffect(() => {
    const userLogin = () => {
      axios
        .post("", loginDetails)// this line need to be changed
        .then((response) => {
          let token = response.data.authToken;
          setCookie("jwt", token, {
            path: "/",
            expires: new Date(Date.now() + 3.6e6),
          });

          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data === "User doesn't exist!") {
            window.alert("User doesn't exist!");
          } else if (err.response.data === "Incorrect password") {
            window.alert("Incorrect password");
          }
        });
    };

    if (dataSent) {
      userLogin();
      setDataSent(false);
    }
  }, [loginDetails, dataSent, navigate, setCookie]);

  return (
    <>
      <Router>
      <div className="login-container">
        <div className="login-form">
          <h1>Real Estate</h1>
          <p>Enter your credentials to access your account</p>
          <form onSubmit={handleLogin}>
            <input
              id="login-userid"
              type="email"
              required={true}
              name="email"
              placeholder="Email"
            />
            <input
              id="login-password"
              name="password"
              required={true}
              type="password"
              placeholder="Password"
            />
            <button type="submit" id="login-signin">
              Sign In
            </button>
          </form>
          <Link className="login-signup" to="/signup">
            Sign Up
          </Link>
        </div>
        <h3 id="login-afterForm">
          Don't have an account?{" "}
          <Link className="login-signup" to="/signup">
            Sign Up
          </Link>
        </h3>
      </div>
      </Router>
    </>
  );
}
