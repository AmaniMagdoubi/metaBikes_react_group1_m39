import React from "react";
import "./index.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home"
import Profile from "./pages/Profile";
import Social from "./pages/Social";
import Ebike from "./pages/Ebike"
import Switch from "./components/17-switch";
import SignupOrLogin from "./components/1-signup";
import Router from "./components/16-router";
import { GlobalWrapper } from "./styles/global.styles";
import { LeftSpace } from "./styles/global.styles";
import { RightMainWrapper } from "./styles/global.styles";

const App = () => {
  const [user, setUser]= useState('')
  const [logged, setLogged]= useState(false)
  
  let component;
  
  switch (!logged && !user){
    case !logged:
      console.log('signup');
      component = <SignupOrLogin setter={setUser}></SignupOrLogin>;
      break;
    case logged && user:
      console.log('router');
      component = <Router user={user}></Router>
      break;
    default :
      console.log('default');
      component =
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      break;
  }
 

  return (

    
    <BrowserRouter>
        <GlobalWrapper>
<LeftSpace></LeftSpace>
            <RightMainWrapper>
    
      {/* <SwitchWrapper> */}
      <div className="switch_wrapper" user={user}>
        {component}
      
      </div>
      {/* </SwitchWrapper> */}
      </RightMainWrapper>

     </GlobalWrapper>
        <Routes>
          <Route  path="*" element={<HomePage />} />
          <Route path="/profile/*" element={<Profile user={user}/>} />
          {/* <Route path="/ebike" element={<Ebike/>} /> */}
          <Route path="/social" element={<Social user={user}/>} />
          <Route path="/ebike" element={<Ebike user={user}/>} />
        </Routes>
      </BrowserRouter>
      
     
    
  );

};  


export default App;

