import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Login } from "./pages/Login";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="components">
          <Link to="/" style={{ fontSize: "20px" }}> Home</Link>
          <Link to="/login" style={{ fontSize: "20px" }}> Login</Link>
          <Link to="/aboutus" style={{ fontSize: "20px" }}> About Us</Link>
        </div>
        <div className="navcompanyname">Tax-Doctor Nepal</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
export default App;
