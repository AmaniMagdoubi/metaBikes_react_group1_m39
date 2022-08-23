import React from "react";
import {useState, } from 'react';
import { GlobalWrapper, LeftSpace, RightMainWrapper } from "../styles/global.styles";
import LoginLogout from "./1-login-logout";
import UserNav from "./3-user-nav";


import Signup from "./1-signup";
import Router from "./16-router";


const Switch = () => {
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

  return (

    <GlobalWrapper>
<LeftSpace></LeftSpace>
            <RightMainWrapper>
    
      {/* <SwitchWrapper> */}
      <div className="switch_wrapper" user={user}>
        {component}, {component2}
      
      </div>
      {/* </SwitchWrapper> */}
      </RightMainWrapper>

     </GlobalWrapper>

      
  );
};

export default Switch;