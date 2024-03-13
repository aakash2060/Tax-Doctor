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
        <div>
          <Link to="/"> Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/aboutus"> AboutUs</Link>
        </div>
        <div className="navcompanyname">Tax Doctor Nepal</div>
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
