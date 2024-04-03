import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import "./App.css";
import { NavBar } from "./pages/NavBar";
import Footer from "./components/Footer.js";
import { Banner } from "./components/Banner.js";
function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />        
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}
export default App;
