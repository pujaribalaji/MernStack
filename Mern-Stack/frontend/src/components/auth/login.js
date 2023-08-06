import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, SetformData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const response = await Axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Login Error:", error.response.data);
        alert(error.response.data.message); // Display the error message from the backend
      } else {
        console.log("Login Error:", error.message);
        alert("Something went wrong during login.");
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login">
        <div className="text0">Sign in</div>
        <div className="text1">Login to manage your account</div>
        <div className="label1">
          <form onSubmit={handleSubmit}>
            <input
              className="input1"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <input
              className="input2"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input>

            <div className="text2">Forgot password?</div>
            <div>
              <button type="submit" className="button">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="line3">
          <hr className="line0" />
          <div className="line1">or</div>
          <hr className="line2" />
        </div>
        <div>
          <button type="submit" className="button1">
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
