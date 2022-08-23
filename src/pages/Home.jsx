import React from "react";
import "../index.css";
import { useState } from "react";
import About from "../components/6-home-about";
import JourneyPlanner from "../components/7-journey-planner";

import LeftNav from "../components/5-left-nav";

import UserNav from "../components/3-user-nav";
import Themes from "../components/10-themes";
import Footer from "../components/9-contact-footer";
import Weather from "../components/19-weatherApp";

// import HomePage from "./pages/Home";

// import SignupOrLogin from "./components/1-signup";
// import Router from "../components/16-router";

import LocalInterests from "../components/8-local-interests";

// IGNORE THIS PAGE FOR NOW

const HomePage = () => {

  return (
    <div>

      <LeftNav />
      <About></About>
      <Footer />
    </div>
  );
};

export default HomePage;

