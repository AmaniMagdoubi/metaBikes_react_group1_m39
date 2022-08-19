import React from "react";
import "./index.css";

import LeftNav from "./components/5-left-nav"
import HomePage from "./pages/Home";
import UserNav from "./components/3-user-nav"
import Footer from "./components/9-contact-footer";
import Switch from "./components/17-switch";

import About from "./components/6-home-about";
import JourneyPlanner from "./components/7-journey-planner";
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
        <LocalInterests/>
        
        <Footer />
      </div>

      
     
    
  );

};


export default App;

