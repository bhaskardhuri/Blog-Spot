// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to BLoG SPoT</h1>
      <p>Share your thoughts and explore amazing blogs.</p>
      <Link to="/login" className="home-login-btn">Get Started</Link>
    </div>
  );
};
export default Home;
