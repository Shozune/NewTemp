import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="home-container">
        <h1 className="logo-text">
          TR<img src="/logo.png" alt="Logo Leaf" className="logo-leaf" />VE
        </h1>
        <button className="home-button" onClick={() => navigate("/signup")}>
          Sign up
        </button>
        <button className="home-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}
