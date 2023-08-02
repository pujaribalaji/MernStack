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
    try {
      const response = await Axios.post(
        "http://localhost:5000/user/signup",
        formData
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error);
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
