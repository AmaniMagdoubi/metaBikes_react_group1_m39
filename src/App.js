import React from "react";
import "./index.css";

import LeftNav from "./components/5-left-nav"
import HomePage from "./pages/Home";
import UserNav from "./components/3-user-nav"
import Footer from "./components/9-contact-footer";
import Weather from "./components/19-weatherApp";

import JourneyPlanner from "./components/7-journey-planner";
// import HomePage from "./pages/Home";
import About from "./components/6-home-about";
// import SignupOrLogin from "./components/1-signup";
// import Router from "../components/16-router";

import Switch from "./components/17-switch";
import LocalInterests from "./components/8-local-interests";

const App = ({user}) => {

  return (

    
      
      <div user={user}>

        <UserNav />
        <LeftNav />
        <Switch></Switch>
        
        {/* <HomePage /> */}


        <About></About>
        <JourneyPlanner></JourneyPlanner>
        <Weather/>
        <LocalInterests/>
        
        <Footer />

      </div>

      
     
    
  );

};


export default App;

