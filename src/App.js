import React from "react";
import {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Social from "./pages/Social";
import Profile from "./pages/Profile";
import HomePage from "./pages/Home";
import Ebike from "./pages/Ebike";
import SignupOrLogin from "./components/1-signup";

import "./index.css";
import About from "./components/6-home-about";

const App = () => {
  const [user, setUser]= useState('')
  return (
    <div className="App" >
      <h1>MetaBike</h1>
      <About ></About>
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      {user ? <div><h1>{user} logged in</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link><br></br>
          <Link to="/profile">Profile Details</Link><br></br>
          <Link to="/social">Social App</Link><br></br>
          <Link to="/ebike">E-Bike</Link><br></br>
        </nav>
        <Routes>
          <Route  path="*" element={<HomePage user={user}/>} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/ebike" element={<Ebike />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </BrowserRouter></div>
      : <h1>not logged in</h1>}
    </div>
  );
};


export default App;

