import { useState } from "react";
import { login } from "../utils";
import { SignupWrapper } from "../styles/1-signup.styles";
import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper,
} from "../styles/global.styles.js"; //Global wrapper styles

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
              <br></br>
              <input
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                maxLength="35"
                placeholder="Username"
              ></input>
              <br></br>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email"
              ></input>
              <br></br>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                minLength="5"
                placeholder="Password"
              ></input>
              <br></br>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <>
              <h1>{user} is logged in</h1>
              <button onClick={logoutHandler}>Logout</button>
            </>
          )}
        </SignupWrapper>
      </RightMainWrapper>
    </GlobalWrapper>
  );
};

export default LoginLogout;
