import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Landing from "../../Pages/Landing";
import Home from "../../Pages/LandingUpdate";


const AppRouting = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/" element={<Landing/>} /> */}
          </Routes>
    </Router>
  );
}
export default AppRouting;