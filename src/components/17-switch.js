import SignupOrLogin from "./1-signup";
import Router from "./16-router";
import {useState, useEffect} from 'react';

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
      <div user={user}>
        {component}
      </div>
      );
  }

export default Switch;