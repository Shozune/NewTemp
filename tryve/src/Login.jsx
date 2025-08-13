import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  <div className="login-card">
    <button className="back" onClick={() => navigate("/")}>← Back</button>
    <div className="login-logo-container">
      <img src="/login-logo.png" alt="Login Logo" className="login-logo" />
    </div>

        <h2>Login</h2>
        <p>Welcome back! Please login.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && <div style={{color: "red"}}>{emailError}</div>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label className="checkbox-label">
            <input type="checkbox" /> Remember me
          </label>
          <button type="submit" className="primary-btn">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}