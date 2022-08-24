import { useState } from "react";
import { login } from "../utils";
import { SignupWrapper } from "../styles/1-signup.styles";
import {GlobalWrapper, LeftSpace, RightMainWrapper, LogoutWrapper} from "../styles/global.styles.js"; //Global wrapper styles
import "../index.css"; //Global styles

const LoginLogout = ({ setter, user }) => {
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

  return (
    <GlobalWrapper>
      <LeftSpace></LeftSpace>
      <RightMainWrapper>
        <SignupWrapper>
          {!isLoggedin ? (
            <form onSubmit={loginHandler}>
              <label>LOGIN account details:</label>
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
          ) : (
            <>
            <LogoutWrapper><button clasName = "logout_switch" onClick={logoutHandler}>Logout</button></LogoutWrapper>
            </>
          )}
        </SignupWrapper>
      </RightMainWrapper>
    </GlobalWrapper>
  );
};

export default LoginLogout;
