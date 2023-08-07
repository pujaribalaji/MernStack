import React from "react";
import logo from "../asserts/Logo.svg";
import arrow from "../asserts/arrow.svg";
import bed from "../asserts/bed.svg";
import bath from "../asserts/bath.svg";
import car from "../asserts/car.svg";
import park from "../asserts/park.svg";
import b1 from "../asserts/b1.svg";
import sara from "../asserts/sara.svg";
import footer from "../asserts/footer.svg";
import "./homepage.css";
import { Link } from "react-router-dom";

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
          <p className="p3">Location</p>
          <p className="p4">All Cities</p>
          <img className="svg1" src={arrow} alt="arrow"></img>
          <hr className="hr1"></hr>
          <p className="p5">Search</p>
          <p className="p6">Enter keywords</p>
          <img className="svg2" src={arrow} alt="arrow"></img>
          <div className="search">
            <p className="p7">Search</p>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="text5">Popular Cities</div>
        <div className="text6">where your ages found their happy home</div>
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
      <div className="container3">
        <div className="text7">Latest Apartments</div>
        <div className="text8">
          Explore our nests which are suitable for you
        </div>
        <div className="di2">
          <div className="box2">
            <div className="box3">
              <p className="text9">For Sale</p>
            </div>
          </div>
          <div className="text10">Serene Oaks Residence</div>
          <p className="text13">Central Park, San Francisco</p>
          <div className="logo">
            <img src={bed} alt="Bed"></img>
            <div className="be">
              <p className="text16">2 Beds</p>
              <p className="text19">1 Baths</p>
            </div>
            <img className="bath" src={bath} alt="Bath" />
            <img className="car" src={car} alt="Car"></img>
            <img className="park" src={park} alt="Park"></img>
          </div>
          <div className="box2">
            <div className="box3">
              <p className="text9">For Sale</p>
            </div>
          </div>
          <p className="text14">Central Park, San Francisco</p>
          <div className="text11">Serene Oaks Residence</div>
          <div className="logo1">
            <img src={bed} alt="Bed"></img>
            <div className="be">
              <p className="text17">2 Beds</p>
              <p className="text18">1 Baths</p>
            </div>
            <img className="bath" src={bath} alt="Bath" />
            <img className="car" src={car} alt="Car"></img>
            <img className="park" src={park} alt="Park"></img>
          </div>
          <div className="box2">
            <div className="box3">
              <p className="text9">For Sale</p>
            </div>
          </div>
          <div className="text12">Serene Oaks Residence</div>
          <p className="text15">Central Park, San Francisco</p>
        </div>
        <div className="logo2">
          <img src={bed} alt="Bed"></img>
          <img className="bath" src={bath} alt="Bath" />
          <img className="car" src={car} alt="Car"></img>
          <img className="park" src={park} alt="Park"></img>
        </div>
      </div>
      <div className="container4">
        <div className="text20">Easy Renting for You</div>
        <div className="text21">Guiding you from start to finish.</div>
        <div className="bx">
          <div className="box4">
            <p className="text22">Tips for Renters</p>
            <p className="text23">
              Find answers to all of your <br></br> renting questions with the{" "}
              <br></br> best renter’s guide in the galaxy.
            </p>
            <Link className="link1">Read more</Link>
            <img className="b1" src={b1} alt="b1"></img>
          </div>
          <div className="box4">
            <p className="text22">Tips for Renters</p>
            <p className="text23">
              Find answers to all of your <br></br> renting questions with the{" "}
              <br></br> best renter’s guide in the galaxy.
            </p>
            <Link className="link1">Read more</Link>
            <img className="b1" src={b1} alt="b1"></img>
          </div>
          <div className="box4">
            <p className="text22">Tips for Renters</p>
            <p className="text23">
              Find answers to all of your <br></br> renting questions with the{" "}
              <br></br> best renter’s guide in the galaxy.
            </p>
            <Link className="link1">Read more</Link>
            <img className="b1" src={b1} alt="b1"></img>
          </div>
        </div>
      </div>
      <div className="container5">
        <div className="text24">Our Happy Customers</div>
        <div className="text25">They found their happy homes through us.</div>
        <div className="s1">
          <img className="sara" src={sara} alt="Sara"></img>
          <img className="sara" src={sara} alt="Sara"></img>
          <img className="sara" src={sara} alt="Sara"></img>
          <div className="text26">
            I was blown away by the <br></br> convenience and ease of finding my{" "}
            <br></br> dream apartment through this <br></br> website. The
            extensive search filters <br /> and detailed apartment descriptions{" "}
            <br /> made the process a breeze.
            <br />
            <br />
            <span className="span1"> - Sarah M</span>
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="text27">To Stay Updated With Us</div>
        <div>
          <input
            className="inp1"
            type="email"
            placeholder="Joe@gmail.com"
          ></input>
          <div className="box5">
            <p className="text28">Subscribe</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="foo1">
          <img src={logo} height={60} width={50} alt="Logo" />
          <p className="text29">UrbaNest</p>
        </div>
        <div className="foo2">
          <p className="text30">Reviews</p>
          <p className="text30">Apartments</p>
          <p className="text30">Blogs</p>
          <p className="text30">About us</p>
        </div>
        <div className="foo3">
          Copyright © 2023 UrbaNest. All rights reserved.
        </div>
        <p className="foo4">Developed by Pujari Balaji</p>
        <div className="foo5"></div>
      </div>
    </>
  );
};

export default Homepage;
