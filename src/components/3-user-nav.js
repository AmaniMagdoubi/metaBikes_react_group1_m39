import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {GNavWrapper, Row} from "../styles/global.styles.js"; //Global wrapper styles
import {UserWrapper} from "../styles/3-user-nav.styles";
import "../index.css";

const UserNav = ({modalOn, user}) => {
  
  return (
    <GNavWrapper>
        <UserWrapper>
            <div className="user_wrapper">
                <Row>
                <div className="user_links">
                    
                    <a onClick = {modalOn}>Themes</a>
                    
                    <a>Community</a>
                    <a>Profile</a>
                    <nav >
                    <Link to="/" user={user}>Home</Link><br></br>
                    <Link to="/profile" user={user}>Profile Details</Link><br></br>
                    <Link to="/social" user={user}>Social App</Link><br></br>
                    <Link to="/ebike" user={user}>E-Bike</Link><br></br>
                    <h1>{user} logged in</h1>
                  </nav>
                    
                </div>
                <div class="header-verline"></div>
                <div className="user_display">
                  <span>Username</span>
                  <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div>
                </div>
                </Row>
            </div>
        </UserWrapper>
    </GNavWrapper>
  )
}

export default UserNav