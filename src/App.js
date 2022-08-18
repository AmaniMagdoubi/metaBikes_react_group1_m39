import React from "react";
import "./index.css";

import LeftNav from "./components/5-left-nav"
import { JourneyPlanner } from "./components/7-journey-planner";
import HomePage from "./pages/Home";
import About from "./components/6-home-about";
import Switch from "./components/17-switch";
import UserNav from "./components/3-user-nav"
import Footer from "./components/9-contact-footer";


const App = () => {

  return (
    <div>
      <UserNav />
      <LeftNav />
      <About />
      <JourneyPlanner />
      <Switch></Switch>
      <HomePage />
      <Footer />
    </div>
  )
};


export default App;

