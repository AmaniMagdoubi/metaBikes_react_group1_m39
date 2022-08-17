import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Social from "./pages/Social";
import Profile from "./pages/Profile";
import HomePage from "./pages/Home";
import Ebike from "./pages/Ebike";

import "./index.css";
import Home from "./components/6-home-about";

const App = () => {
  return (
    <div className="App">
      <h1>MetaBike</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile Details</Link>
          <Link to="/social">Social App</Link>
          <Link to="/ebike">E-Bike</Link>
        </nav>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/ebike" element={<Ebike />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;

