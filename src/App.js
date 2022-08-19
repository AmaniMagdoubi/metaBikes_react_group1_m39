import React from "react";
import {useState, } from 'react';
import "./index.css";
import JourneyPlanner from "./components/7-journey-planner";
import HomePage from "./pages/Home";
import About from "./components/6-home-about";

import SignupOrLogin from "./components/1-signup";
import Router from "./components/16-router";
import Switch from "./components/17-switch";


const App = ({user}) => {

  return (
    
      
      <div user={user}>
        
        <Switch></Switch>
        <About></About>
        {/* <LeftNav></LeftNav> */}
        <JourneyPlanner></JourneyPlanner>
        {/*  Footer  */}
      </div>

      
     
    
  );
};


export default App;

