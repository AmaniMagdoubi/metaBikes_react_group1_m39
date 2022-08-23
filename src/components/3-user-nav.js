import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { GNavWrapper, Row } from "../styles/global.styles.js"; //Global wrapper styles
import { UserWrapper } from "../styles/3-user-nav.styles";
import Router from "./16-router.js";
import "../index.css";
import Themes from "./10-themes.js";

const UserNav = ({user}) => {
  const [themeShow, setThemeShow] = useState (false)
  const themeOn = () => {
    // setThemeShow(!themeShow)
      setThemeShow(click => !click)
      // setThemeShow(true);
    };
    const themeOff = () => {setThemeShow(false)};
  
  return (
    <GNavWrapper>
        <UserWrapper>
        <div className="user_wrapper">
                <Row>
                    <div className="user_links">
                        <Router themeOn ={themeOn}/>
                        <Themes themeOff = {themeOff} themeShow = {themeShow} themeOn = {themeOn} />
                    </div>

                    <div class="header-verline"></div>

                    <div className="user_display">
                      <span>{user}</span>
                      <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div>
                    </div>
                    

                </Row>
            </div>
        </UserWrapper>
    </GNavWrapper>
  );
};

export default UserNav;
