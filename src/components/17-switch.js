import React from "react";
import {useState, } from 'react';
import { GlobalWrapper, LeftSpace, RightMainWrapper } from "../styles/global.styles";


import SignupOrLogin from "./1-signup";
import Router from "./16-router";


const Switch = () => {
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

      
  );
};

export default Switch;