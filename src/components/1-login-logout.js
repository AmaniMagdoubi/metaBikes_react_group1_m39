import React from "react";
import { useState } from "react";
import login from "../utils/log";
import { SignupWrapper } from "../styles/1-signup.styles";
import {LogoutWrapper} from "../styles/global.styles.js"; //Global wrapper styles
import "../index.css"; //Global styles
import signUp from "../utils/sign";

const LoginLogout = ({ setter, user, signupShow, signupOn, loginShow, signupOff, loginOn}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoggedin, setIsLoggedin] = useState(false);

  const loginHandler = async (event) => {
    event.preventDefault();
    await login(username, email, password, setter);

    localStorage.setItem("token", user);
    setIsLoggedin(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token", user);
    setIsLoggedin(false);
    setter();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoggedin(true);
    await signUp(username, email, password, setter);
  };

  return (
        <SignupWrapper>
          {!isLoggedin ? (
            <div className="form_wrappers">

                      {loginShow ?<div className="form bg">
                      
                        <div className="full_wrapper"><p>login or signup to META BIKES <br></br>to gain access to <br></br><span>our colour themes and social app!</span></p></div>

                        <div className="full_wrapper">
                        <button className="modal_off"onClick={loginOn}>X</button>
                        <form onSubmit={loginHandler} >
                          <h2>LOGIN</h2>
                          <input
                            onChange={(event) => setUsername(event.target.value)}
                            type="text"
                            maxLength="35"
                            placeholder="Username"
                          ></input>
                          <input
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            placeholder="Email"
                          ></input>
                          <input
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            minLength="5"
                            placeholder="Password"
                          ></input>
                          <button type="submit">Submit</button>
                        </form>
                        </div>
                        <div className="full_wrapper"><p> Don't have an account?<a onClick={signupOn}><br></br>Signup</a></p></div>
                        </div>: null}

                        {signupShow ?<div className="form">

                        <div className="full_wrapper"><p>login or signup to META BIKES <br></br>to gain access to <br></br><span>our colour themes and social app!</span></p></div>

                        <div className="full_wrapper"> 
                        <button className="modal_off" onClick={() => {loginOn(); signupOff('');}}>X</button>
                          <form onSubmit={submitHandler}>
                          <h2>Signup</h2>
                          <input
                            onChange={(event) => setUsername(event.target.value)}
                            type="text"
                            maxLength="35"
                            placeholder="Username"
                          ></input>
                          <input
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            placeholder="Email"
                          ></input>
                          <input
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            minLength="5"
                            placeholder="Password"
                          ></input>
                          <button type="submit">Submit</button>
                        </form>
                        </div> 

                        <div className="full_wrapper"><p>Have an account?<a onClick={signupOff}><br></br>Login</a></p></div>
                        </div>: null}
          </div>
          ) : (
            <>
            <LogoutWrapper><button clasName = "logout_switch" onClick={logoutHandler}>Logout</button></LogoutWrapper>
            </>
          )}
        </SignupWrapper>
  );
};

export default LoginLogout;