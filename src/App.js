import React from "react";
import "./index.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home"
import Profile from "./pages/Profile";
import Social from "./pages/Social";
import Ebike from "./pages/Ebike"

// import SignupOrLogin from "./components/1-signup";
import Router from "./components/16-router";
import { GlobalWrapper } from "./styles/global.styles";
import { LeftSpace } from "./styles/global.styles";
import { RightMainWrapper } from "./styles/global.styles";
import Signup from "./components/1-signup";
import LoginLogout from "./components/1-login-logout";
import UserNav from "./components/3-user-nav";


import JP from "./pages/JourneyPlanner";
import LI from "./pages/LocalInterest";


const App = () => {
  const [user, setUser]= useState('')
  const [logged, setLogged]= useState(false)

  let component;
  let component2;

  switch (!logged && !user){
    case !logged:
      console.log('signup');
      component = <Signup setter={setUser}></Signup>;
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      break;
    case logged && user:
      console.log('router');
      component = <UserNav user={user}></UserNav>
      component2 = <LoginLogout setter={setUser}></LoginLogout>;
      break;
    default :
      console.log('default');
      component =
      <Signup setter={setUser}></Signup>;
      component2 =
      <LoginLogout setter={setUser}></LoginLogout>;
      break;
  }

  return (<BrowserRouter>

        <GlobalWrapper>
            <LeftSpace></LeftSpace>
            <RightMainWrapper>

      {/* <SwitchWrapper> /} */}
      <div className="switch_wrapper" user={user}>
        {component}, {component2}

      </div>
      {/* {/ </SwitchWrapper> */}
        <Routes>
          <Route  path="*" element={<HomePage />} />
          <Route path="/profile/*" element={<Profile user={user}/>} />
          {/* <Route path="/ebike" element={<Ebike/>} /> */}
          <Route path="/social" element={<Social user={user}/>} />
          <Route path="/ebike" element={<Ebike user={user}/>} />
          <Route path="/journeyplanner" element={<JP user={user}/>} />
          <Route path="/localinterests" element={<LI user={user}/>} />
        </Routes>
      

      </RightMainWrapper>

      </GlobalWrapper>
      </BrowserRouter>
      
     
    
  );

};  


export default App;

