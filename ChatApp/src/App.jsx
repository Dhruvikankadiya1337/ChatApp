import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./Components/Signup";
import SignIn from "./Components/Signin";
import AddData from "./Components/Adddata";
import ChatView from "./Components/Chatview/Chatview"; 
import "./Components/Chatview/Chatview.css";          


import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

// 🔹 Extra Page jaha dono chats ek sath dikhenge   
function ChatPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "50px" }}>
      {/* User A */}
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", width: "300px" }}>
        <h2>User A</h2>
        <ChatView userId="userA" receiverId="userB" />
      </div>

      {/* User B */}
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", width: "300px" }}>
        <h2>User B</h2>
        <ChatView userId="userB" receiverId="userA" />
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        {/* ✅ Default route = Home */}
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />

        {/* ✅ Protect AddData & ChatView */}
        <Route
          path="/add"
          element={isAuthenticated ? <AddData /> : <Navigate to="/signin" />}
        />
        <Route
          path="/chat"
          element={isAuthenticated ? <ChatPage /> : <Navigate to="/signin" />}
        />

        {/* 404 Fallback */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
