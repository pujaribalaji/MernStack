import React from "react";
import logo from "../asserts/Logo.svg";
import arrow from "../asserts/arrow.svg";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div className="img0">
            <img src={logo} height={60} width={50} alt="Logo" />
          </div>
          <div className="text0">UrbaNest</div>
          <div className="text1">Home</div>
          <div className="text2">Apartments</div>
          <div className="text2">Blog</div>
          <div className="text2">About us</div>
          <div>
            <button className="button0" type="submit">
              Sign in
            </button>
          </div>
        </div>
        <div className="text3">It's Great to be home!</div>
        <div className="text4">Find Your Future Home</div>
        <div className="box0">
          <p className="p1">Type</p>
          <p className="p2">Property type</p>
          <img className="svg0" src={arrow} alt="arrow"></img>
          <hr className="hr0"></hr>
        </div>
      </div>
      <div className="container2">
        <div className="text5">
        Popular Cities
        </div>
        <div className="text6">
        where your ages found their happy home
        </div>
        <div className="di">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        </div>
        <div className="di1">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        </div>
        
      </div>
    </>
  );
};

export default Homepage;
