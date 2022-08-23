import React from "react";
import {
  GNavWrapper,
  LeftSpace,
  RightMainWrapper,
  Row,
} from "../styles/global.styles.js"; //Global wrapper styles
import { ThemeWrapper } from "../styles/10-themes.styles";

const Themes = ({ modalShow, modalOff }) => {
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
        {modalShow ? (
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
                    modalOff();
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
                    modalOff();
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
                    modalOff();
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
                        {/* Main theme found in index.css */}
                        <div className="colour_drop main_theme" onClick={() => {modalOff(); changeText1(''); changeText2('');changeBackground(''); changeAccent(''); changeOutline(''); changeBtn(''); changeHL(''); changeHeading(''); changeLink('');}}></div>
                           
                        {/* Theme 1 - "Blue" Yamaha */}
                        <div className="colour_drop blue_theme" onClick={() => {modalOff(); changeText1('#fff'); changeText2('#0a2d81');changeBackground('#518c9c'); changeAccent('#0099c1'); changeOutline('#0a2d81'); changeBtn('#7209b7'); changeHL('#caf0f8'); changeHeading(''); changeLink('');}}></div>

                        {/* Theme 2 - "Neon Green" Kawasaki */}
                        <div className="colour_drop green_theme" onClick={() => {modalOff(); changeText1('#fff'); changeText2('#1e5c45');changeBackground('#69be28'); changeAccent('#1e5c45'); changeOutline('#1e5c45'); changeBtn('#1e5c45'); changeHL('#32cd33'); changeHeading(''); changeLink('');}}></div>
                           
                        {/* Theme 3 - "Red" Honda */}
                        <div className="colour_drop red_theme" onClick={() => {modalOff(); changeText1(''); changeText2('');changeBackground('000'); changeAccent('#DC182D'); changeOutline('#979797'); changeBtn('#DC182D'); changeHL('#979797'); changeHeading(''); changeLink('');}}></div>
                           
                        {/* Theme 4 - "Grey" */}
                        <div className="colour_drop grey_theme" onClick={() => {modalOff(); changeText1(''); changeText2('');changeBackground(''); changeAccent('#9da8a9'); changeOutline('#5a5a5d'); changeBtn('#abb8c3'); changeHL('#2e3c41'); changeHeading(''); changeLink('');}}></div>

                        {/* Theme 5 - "Yellow" Scrambler Ducati */}
                        <div className="colour_drop yellow_theme" onClick={() => {modalOff(); changeText1(''); changeText2('');changeBackground('fff'); changeAccent('#ffac2a'); changeOutline('#666666'); changeBtn('#ffb331'); changeHL(''); changeHeading(''); changeLink('');}}></div>


              <div class="theme-verline"></div>
              <div className="user_display">
                {/* <span>Username</span> */}
                {/* <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div> */}
              </div>
            </div>
          </ThemeWrapper>
        ) : null}
      </RightMainWrapper>
    </GNavWrapper>
  );
};

export default Themes;
