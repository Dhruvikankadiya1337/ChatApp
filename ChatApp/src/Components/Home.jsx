import React from "react";

const Home = ({ isAuthenticated }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Chat App 🚀</h1>
      {!isAuthenticated && (
        <p>Please Sign Up or Sign In to continue.</p>
      )}
    </div>
  );
};

export default Home;
