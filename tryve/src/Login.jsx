import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="card">
        <button className="back" onClick={() => navigate("/")}>← Back</button>
        <h1 className="logo-text">
          TR<img src="/logo.png" alt="Logo Leaf" className="logo-leaf" />VE
        </h1>
        <h2>Login</h2>
        <p>Welcome back! Please login.</p>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
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
