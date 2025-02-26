import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LoginForm from "./Pages/Login/LoginForm";
import RegisterForm from "./Pages/Register/RegisterForm";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs/AboutUs"
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
       {<Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />        
      </Routes>
    </Router>
  );
} 

export default App;
