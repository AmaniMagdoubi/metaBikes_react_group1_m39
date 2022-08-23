import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Social from "../pages/Social";
import Profile from "../pages/Profile";
import HomePage from "../pages/Home";
import Ebike from "../pages/Ebike";
import App from "../App";
// import { GlobalWrapper, LeftSpace, RightMainWrapper } from "../styles/global.styles";

const Router = ({ user }) => {
  return (
    <nav>
      <Link to="/" user={user}>
        Home
      </Link>
      <br></br>
      <Link to="/profile" user={user}>
        Profile Details
      </Link>
      <br></br>
      <Link to="/social" user={user}>
        Social App
      </Link>
      <br></br>
      <Link to="/ebike" user={user}>
        E-Bike
      </Link>
      <br></br>
      <h1>{user} logged in</h1>
    </nav>
  );
};

export default Router;
