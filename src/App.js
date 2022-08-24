import React from "react";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import Social from "./pages/Social";
import Ebike from "./pages/Ebike";

// import SignupOrLogin from "./components/1-signup";
import Router from "./components/16-router";
import { LoginWrapper } from "./styles/global.styles";
import Signup from "./components/1-signup";
import LoginLogout from "./components/1-login-logout";
import UserNav from "./components/3-user-nav";

import JP from "./pages/JourneyPlanner";
import LI from "./pages/LocalInterest";
import Themes from "./components/10-themes";
import { login } from "./utils";

const App = () => {
  const [user, setUser] = useState("");
  const [logged, setLogged] = useState(false);
  const [modalShow, setModalShow] = useState (false)
  const modalOn = () => {
      setModalShow(!modalShow)
   };
  const modalOff = () => {setModalShow(false)};
  // const [themeShow, setThemeShow] = useState (false)
  // const themeOn = () => {
  //   // setThemeShow(!themeShow)
  //     setThemeShow(click => !click)
  //     // setThemeShow(true);
  //   };
  //   const themeOff = () => {setThemeShow(false)};
   

  let component;
  let component2;
  let component3;

  switch (!logged && !user) {
    case !logged:
      console.log("signup");
      // component = <Signup setter={setUser}></Signup>;
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      component3 = <p>Login or Signup</p>;
      break;
    case logged && user:
      console.log("router");
      component = <UserNav user={user}></UserNav>;
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      component3 = <p>{user} signed in!</p>;
      break;
    default:
      console.log("default");
      // component = <Signup setter={setUser}></Signup>;
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      component3 = <p>Login or Signup</p>;
      break;
  }

  return (
    <BrowserRouter>



          <LoginWrapper>
            <p clasName = "login_switch" ><span onClick={modalOn}>{component3}</span></p>
          </LoginWrapper>
            
          {modalShow ?<div className="switch_wrapper" user={user}><br></br>
            {component}<br></br><br></br><br></br><br></br>{component2}
          </div>: null}
          <Themes />

          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/profile/*" element={<Profile user={user} />} />
            <Route path="/social" element={<Social user={user} />} />
            <Route path="/ebike" element={<Ebike user={user} />} />
            <Route path="/journeyplanner" element={<JP user={user} />} />
            <Route path="/localinterests" element={<LI user={user} />} />
          </Routes>
          
    </BrowserRouter>
  );
};

export default App;

