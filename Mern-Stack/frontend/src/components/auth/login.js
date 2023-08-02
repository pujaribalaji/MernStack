import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="text0">Sign in</div>
        <div className="text1">Login to manage your account</div>
        <div className="label1">
          <form>
            <input className="input1" type="email" placeholder="Email"></input>
            <input
              className="input2"
              type="password"
              placeholder="Password"
            ></input>
          </form>
        </div>
        <div className="text2">Forgot password?</div>
        <div>
          <button className="button">Sign in</button>
        </div>
        <div className="line3">
          <hr className="line0" />
          <div className="line1">or</div>
          <hr className="line2" />
        </div>
        <div>
          
            <button  className="button1">Sign in with Google</button>

        </div>
      </div>
    </>
  );
};

export default Login;
