import React from "react";
import {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Social from "./pages/Social";
import Profile from "./pages/Profile";
import HomePage from "./pages/Home";
import Ebike from "./pages/Ebike";
import SignupOrLogin from "./components/1-signup";

import "./index.css";

import { JourneyPlanner } from "./components/7-journey-planner";
import About from "./components/6-home-about";
import Switch from "./components/17-switch";


const App = () => {
  const [user, setUser]= useState('');
  return (
    <div>
      <About />
      <JourneyPlanner/>
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      {user ? <div><h1>{user} logged in</h1>
      <ListUsers setter={setUsers} /> {allUsers.map((allUsers)=>(
        <ul>
          <h2>{allUsers}</h2>
        </ul>
      ))} 
      
      <Switch ></Switch>


     
    </div>
  );
};


export default App;

