import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Social from "../pages/Social";
import Profile from "../pages/Profile";
import HomePage from "../pages/Home";
import Ebike from "../pages/Ebike";
import App from "../App";
import { Row } from "../styles/global.styles";

const Router = ({user, themeOn}) => {
  return (
    <Row>
      <a onClick = {themeOn}>Themes</a>
      <Link to="/" user={user}>Home</Link><br></br>
      <Link to="/profile" user={user}>Profile Details</Link><br></br>
      <Link to="/social" user={user}>Social App</Link><br></br>
      <Link to="/ebike" user={user}>E-Bike</Link><br></br>
      <p>{user}</p>
    </Row>
  );
};

export default Router;
