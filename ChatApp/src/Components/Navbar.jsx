import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="nav-left">
        <h1 className="logo">💬 ChatApp</h1>
      </div>

      {/* Right Side - Links */}
      <div className="nav-right">
        <Link to="/chat">Chats</Link>
        <Link to="/add">Add Data</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>

        {/* Profile Image (Right Side) */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img"
        />
      </div>
    </nav>
  );
};

export default Navbar;
