import React from "react";
import {useState, } from 'react';
import "./index.css";
import { JourneyPlanner } from "./components/7-journey-planner";
import About from "./components/6-home-about";
import Switch from "./components/17-switch";


const App = () => {

  return (
    <div>
      <About />
      <JourneyPlanner/>
      
      
      <Switch ></Switch>


     
    </div>
  );
};


export default App;

