import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, SetfromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await Axios.post(
        "http://localhost:5000/user/signup",
        formData
      );
      console.log(response.data);
      if (response.data.message === "Email address already exists") {
        alert("Email address already exists");
      } else {
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Signup Error:", error.response.data);
      } else {
        console.log("Signup Error:", error.message);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetfromData((prevfromData) => ({
      ...prevfromData,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <h1 className=" ">Get Started</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className=""
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="Email"
          className=""
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className=""
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <button className="">Register</button>
      </form>
    </div>
  );
}

export default Signup;
