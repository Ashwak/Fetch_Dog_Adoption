import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        { name, email },
        { withCredentials: true }
      );
      navigate("/search");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h1>
          <span className="logo-main">Pawfect</span>
          <span className="logo-companion">Companion</span>
          <span className="logo-paw">🐕</span>
        </h1>
      </div>
      <div className="login-card">
        <h2 className="login-title">Welcome to Pawfect Companion</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label className="login-label">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="login-input"
          />
          <label className="login-label">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
