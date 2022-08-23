import React from "react";
import { useState } from "react";
import {
  GNavWrapper,
  LeftSpace,
  RightMainWrapper,
  Row,
} from "../styles/global.styles.js"; //Global wrapper styles
import { ThemeWrapper } from "../styles/10-themes.styles";

const Themes = ({themeOff, themeShow}) => {
  // Change theme functions

  function changeText1(newColorText1) {
    document.documentElement.style.setProperty(
      "--clr-text-dark",
      newColorText1
    );
  }
  function changeText2(newColorText2) {
    document.documentElement.style.setProperty(
      "--clr-text-light",
      newColorText2
    );
  }
  function changeBackground(newColorBackground) {
    document.documentElement.style.setProperty(
      "--clr-background",
      newColorBackground
    );
  }
  function changeAccent(newColorAccent) {
    document.documentElement.style.setProperty("--clr-accent", newColorAccent);
  }
  function changeOutline(newColorOutline) {
    document.documentElement.style.setProperty(
      "--clr-outline",
      newColorOutline
    );
  }
  function changeBtn(newColorBtn) {
    document.documentElement.style.setProperty("--clr-btn", newColorBtn);
  }
  function changeHL(newColorHL) {
    document.documentElement.style.setProperty("--clr-hl", newColorHL);
  }
  function changeHeading(newHeading) {
    document.documentElement.style.setProperty("--ff-title", newHeading);
  }
  function changeLink(newLink) {
    document.documentElement.style.setProperty("--ff-three", newLink);
  }

  return (
    <GNavWrapper>
      <LeftSpace></LeftSpace>
      <RightMainWrapper>
        {themeShow ?
        <ThemeWrapper>
            <div className="theme_modal">
              <div class="theme-text">
                <p>Pick a theme for your account:</p>
              </div>
              <div className="colour_links">
                {/* Main theme found in index.css */}
                <div
                  className="colour_drop main_theme"
                  onClick={() => {
                    themeOff();
                    changeText1("");
                    changeText2("");
                    changeBackground("");
                    changeAccent("");
                    changeOutline("");
                    changeBtn("");
                    changeHL("");
                    changeHeading("");
                    changeLink("");
                  }}
                ></div>

                {/* Theme one "Blue" test*/}
                <div
                  className="colour_drop blue_theme"
                  onClick={() => {
                    themeOff();
                    changeText1("#fff");
                    changeText2("#03045e");
                    changeBackground("#00b4d8");
                    changeAccent("#5e60ce");
                    changeOutline("#000814");
                    changeBtn("#7209b7");
                    changeHL("#caf0f8");
                    changeHeading("Caveat");
                    changeLink("Rajdhani");
                  }}
                ></div>

                {/* Theme two test*/}
                <div
                  className="colour_drop pink_theme"
                  onClick={() => {
                    themeOff();
                    changeText1("#ff006e");
                    changeText2("#ffd166");
                    changeBackground("#b5838d");
                    changeAccent("#ffcdb2");
                    changeOutline("#d90429");
                    changeBtn("#6d6875");
                    changeHL("#006d77");
                    changeHeading("");
                    changeLink("");
                  }}
                ></div>

                {/* Theme three */}
                <div
                  className="colour_drop main_theme"
                  onClick={() => {
                    themeOff();
                    changeText1("");
                    changeText2("");
                    changeBackground("");
                    changeAccent("");
                    changeOutline("");
                    changeBtn("");
                    changeHL("");
                    changeHeading("");
                    changeLink("");
                  }}
                ></div>

                {/* Theme four */}
                <div
                  className="colour_drop main_theme"
                  onClick={() => {
                    themeOff();
                    changeText1("");
                    changeText2("");
                    changeBackground("");
                    changeAccent("");
                    changeOutline("");
                    changeBtn("");
                    changeHL("");
                    changeHeading("");
                    changeLink("");
                  }}
                ></div>

                {/* Theme five */}
                <div
                  className="colour_drop main_theme"
                  onClick={() => {
                    themeOff();
                    changeText1("");
                    changeText2("");
                    changeBackground("");
                    changeAccent("");
                    changeOutline("");
                    changeBtn("");
                    changeHL("");
                    changeHeading("");
                    changeLink("");
                  }}
                ></div>
              </div>

              <div class="theme-verline"></div>
              <div className="user_display">
                {/* <span>Username</span> */}
                {/* <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div> */}
              </div>
            </div>
          </ThemeWrapper>
          : null}
      </RightMainWrapper>
    </GNavWrapper>
  );
};

export default Themes;
