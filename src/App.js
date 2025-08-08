import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./App.css";
import { NavBar } from "./pages/NavBar";
import Footer from "./components/Footer.js";
import { Banner } from "./components/Banner.js";

function App() {
  console.log("App component rendering");
  return (
    <div>
      <Router>
        <Banner />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;