import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import Social from "./pages/Social";
import Ebike from "./pages/Ebike";
import { LoginWrapper } from "./styles/global.styles";
import LoginLogout from "./components/1-login-logout";
import UserNav from "./components/3-user-nav";
import JP from "./pages/JourneyPlanner";
import LI from "./pages/LocalInterest";
import Themes from "./components/10-themes";

const App = () => {
  const [user, setUser] = useState("");
  const [logged] = useState(false);
  const [signupShow, setSignupShow] = useState (false);
  const [loginShow, setLoginShow] = useState (false);
  
  const loginOn = () => {setLoginShow(!loginShow)};

  const signupOn = () => {
    setSignupShow(!signupShow)};
  const signupOff = () => {setSignupShow(false)};
   

  let component;
  let component2;
  let component3;

  switch (!logged && !user) {
    case !logged:
      console.log("signup");
      component2 = <LoginLogout signupOff = {signupOff} signupOn = {signupOn} signupShow = {signupShow} loginShow ={loginShow} loginOn = {loginOn} setter={setUser}></LoginLogout>;
      component3 = <p>Login or Signup</p>;
      break;
    case logged && user:
      console.log("router");
      component = <UserNav user={user}></UserNav>;
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      component3 = <p></p>;
      break;
    default:
      console.log("default");
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      component3 = <p>Login</p>;
      break;
  }

  return (
    <BrowserRouter>

          <LoginWrapper>
            <p clasName = "login_switch" ><span onClick={loginOn}>{component3}</span></p>
          </LoginWrapper>
          <div className="switch_wrapper" user={user}>{component}{component2}</div>

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
