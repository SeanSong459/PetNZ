import React from "react";
import "./SigninSection.css";
import { Link } from "react-router-dom";

const SigninSection = () => {
  return (
    <div className="signin-section-wrapper">
      <div className="signin-section-left">
        <div className="signin-title">Sign in</div>
        <div className="signin-form-wrapper">
          <form>
            <div className="signin-form-label">Email address</div>
            <input
              className="signin-form"
              type="text"
              placeholder="papa.bear@gmail.com"
            />
          </form>
          <form>
            <label className="signin-form-label">Password </label>
            <input
              className="signin-form"
              type="password"
              placeholder="...................."
            />
          </form>
          <Link to="/dashboard">
            <button className="signin-button">SIGN IN</button>
          </Link>

          <div className="signin-forget-text">Forgot your password?</div>
        </div>
      </div>
      {/*---------------------- signin-section-middle ---------------------*/}
      <div className="signin-section-middle">
        <div className="signin-middle-text">or</div>
      </div>
      {/*  ----------------signin-section-right ---------------- */}
      <div className="signin-section-right">
        <div className="signup-title">Create an account</div>
        <div className="signup-subtitle">Join pet.co.nz to:</div>
        <ul className="signup-benefit-text">
          <li>View order history</li>
          <li>Add product reviews</li>
          <li>Add flea and worm reminders</li>
          <li>Answer customer questions or post your own</li>
        </ul>

        <button className="signup-button">JOIN NOW</button>
      </div>
    </div>
  );
};

export default SigninSection;
