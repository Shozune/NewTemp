import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailError("Email must contain '@'");
      return;
    }
    setEmailError("");
    // ...submit logic...
  }

  return (
<div className="background">
  <div className="card">
    <button className="back" onClick={() => navigate("/")}>← Back</button>
    <div className="signup-logo-container">
      <img src="/signup-logo.png" alt="Signup Logo" className="signup-logo" />
    </div>

        <h2>Sign up</h2>
        <p>Create Account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="input-user"
            aria-label="Name"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input-email"
            aria-label="E-mail"
          />
          {emailError && <div style={{color: "red"}}>{emailError}</div>}
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input-password"
            aria-label="Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="input-confirm"
            aria-label="Confirm Password"
          />
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