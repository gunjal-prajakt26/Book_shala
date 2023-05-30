import React, { useState, useEffect } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  
  return (
    <div className="auth-container">
      <div className="auth-main-container">
        <div className="auth-title">
          <h2 className="">Sign Up</h2>
        </div>
        <div className="auth-main">
          <div className="first-last-wrapper">
            <div className="auth-firstname">
              <label htmlFor="firstname">First Name</label>
              <input
                placeholder="Test"
                className="text-input"
                type="text"
                required
              />
            </div>
            <div className="auth-lastname">
              <label htmlFor="lastname">Last Name</label>
              <input
                placeholder="Admin"
                className="text-input"
                type="text"
                required
              />
            </div>
          </div>
          <div className="auth-email">
            <label htmlFor="mail">Email Address</label>
            <input
              placeholder="test@gmail.com"
              className="text-input"
              type="text"
              required
            />
          </div>
          <div className="auth-pwd">
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="***********"
              className="pwd-input"
              type="password"
              required
            />
          </div>
          <div className="auth-primary-btn">
            <span className="login-btn">Create New Account</span>
          </div>
          <Link className="auth-secondary-btn" to="/login">
              {"Already have an account >"}
          </Link>
        </div>
      </div>
    </div>
  );
}
