import React from "react";
import { Link } from "react-router-dom";
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
