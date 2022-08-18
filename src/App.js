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
import Switch from "./components/17-switch";

const App = () => {
  const [user, setUser]= useState('');
  return (
    <div className="App" >
      <h1>MetaBike</h1>
      <About ></About>
      
      <Switch ></Switch>


     
    </div>
  );
};


export default App;

