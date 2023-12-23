import React from "react";
import logo from "../../assets/images.png";
import { useState } from "react";
import "./Auth.css";

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email && !password){
            alert('Enter email and password')
        }
    }
  return (
    <div className="auth_container">
      <div className="leftbar">
        <div>
          <img src={logo} className="logo"></img>
        </div>
        <div>
          <h1 className="left_text">
            Welcome back!
            <br />
            Login to your <br /> oneNDF account.
          </h1>
        </div>
        <div></div>
      </div>
      <div class="auth-container-1">
        <div class="auth-container-2">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Password</h4>
                {!isSignup && (
                  <p style={{ color: "#007ac6", fontSize: "1rem" }} >
                    forgot password?
                  </p>
                )}
              </div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {isSignup && (
                <p style={{ color: "#666767", fontSize: "13px" }}>
                  Passwords must contain at least eight
                  <br />
                  characters, including at least 1 letter and 1<br /> number.
                </p>
              )}
            </label>
            <button type="submit" className="auth-btn">
              {isSignup ? "Sign up" : "Log in"}
            </button>
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                By clicking “Sign up”, you agree to our
                <span style={{ color: "#007ac6" }}>
                  {" "}
                  terms of
                  <br /> service
                </span>
                ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
                <span style={{ color: "#007ac6" }}> cookie policy</span>
              </p>
            )}
          </form>
          <p className="txt">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              className="handle-switch-btn txt"
              onClick={handleSwitch}
            >
              {isSignup ? "Log in" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
