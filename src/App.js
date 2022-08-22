import React from "react";
import "./index.css";
import { useState } from "react";

import LeftNav from "./components/5-left-nav"
import HomePage from "./pages/Home";
import UserNav from "./components/3-user-nav"
import Themes from "./components/10-themes";
import Footer from "./components/9-contact-footer";
import Weather from "./components/19-weatherApp";

import JourneyPlanner from "./components/7-journey-planner";
// import HomePage from "./pages/Home";
import About from "./components/6-home-about";
// import SignupOrLogin from "./components/1-signup";
// import Router from "../components/16-router";

import Switch from "./components/17-switch";
import LocalInterests from "./components/8-local-interests";

const App = () => {

  // set modal button to show content on onclick
  const [modalShow, setModalShow] = useState (false)
  const modalOn = () => {
      setModalShow(!modalShow)
      // setModalShow(click => !click)
      // setModalShow(true);
  };
  // Set modal button to hide content on onclick
  const modalOff = () => {setModalShow(false)};

  return (

    
      
      <div>

        <UserNav modalShow = {modalShow} modalOn={modalOn}/>
        <Themes modalOff = {modalOff} modalShow = {modalShow} modalOn={modalOn}/>
        <LeftNav />
        {/* <Switch></Switch> */}
        
        {/* <HomePage /> */}


        <About></About>

        <LocalInterests/>
        {/* <JourneyPlanner></JourneyPlanner> */}
        
        <Footer />

      </div>

      
     
    
  );

};


export default App;

