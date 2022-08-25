import React from "react";
import { useState } from "react";
import { GNavWrapper, Row } from "../styles/global.styles.js"; //Global wrapper styles
import { UserWrapper } from "../styles/3-user-nav.styles";
import Router from "./16-router.js";
import "../index.css";
import Themes from "./10-themes.js";

const UserNav = ({ user }) => {
  const [themeShow, setThemeShow] = useState(false);
  const themeOn = () => {
    setThemeShow((click) => !click);
  };
  const themeOff = () => {
    setThemeShow(false);
  };
  
  return (
    <GNavWrapper>
        <UserWrapper>
        <div className="user_wrapper">
                <Row>
                    <div className="user_links">
                        <Router themeOn ={themeOn}/>
                        <div className="position_themes"><Themes themeOff = {themeOff} themeShow = {themeShow} themeOn = {themeOn} /></div>
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
