import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔹 Redirect ke liye
import "../css/Auth.css";

const Signin = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signin Data:", formData);

    // 🔹 Yaha Firebase Auth login call karna hoga (abhi demo ke liye alert rakha hai)
    alert("✅ Successfully Logged In!");
    setIsAuthenticated(true); // App.jsx me authentication true karne ke liye
    navigate("/"); // 🔹 Home.jsx par redirect
  };

  const handleCancel = () => {
    navigate("/"); // 🔹 Cancel → Home.jsx
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">Sign In</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
