import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="card">
        <button className="back" onClick={() => navigate("/")}>← Back</button>
        <h1 className="logo-text">
          TR<img src="/logo.png" alt="Logo Leaf" className="logo-leaf" />VE
        </h1>
        <h2>Sign up</h2>
        <p>Create Account</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <label>
            <input type="checkbox" /> By signing in, you agree to our
            <a href="#"> Terms and Conditions</a> | <a href="#">Privacy Policy</a>
          </label>
          <button type="submit" className="primary-btn">Register</button>
        </form>
        <p>
          Have an Account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
