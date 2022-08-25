import React from "react";
import {
  GNavWrapper,
  LeftSpace,
  RightMainWrapper,
} from "../styles/global.styles.js"; //Global wrapper styles
import { ThemeWrapper } from "../styles/10-themes.styles";
import imageHomeTwo from '../assets/yamaha-blue-bike.jpeg'; 
import imageHomeThree from '../assets/kawasaki-green-bike.png'; 
import imageHomeFour from '../assets/honda-red-bike.jpeg'; 
import imageHomeFive from '../assets/norton-grey-bike.jpeg'; 
import imageHomeSix from '../assets/scrambler-ducati-yellow-bike.jpeg'; 

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
    switch(newColorBtn){
      // 2 "Blue" Yamaha 
      case "#7209b7": 
        document.getElementById("welcomeImage").src = imageHomeTwo; 
        break; 
      // 3 "Neon Green" Kawasaki 
      case "#1e5c45":
        document.getElementById("welcomeImage").src = imageHomeThree; 
        break;
      // 4 "Red" Honda
      case "#DC182D":
        document.getElementById("welcomeImage").src = imageHomeFour; 
        break;
      // 5 "Grey" Norton 
      case "#abb8c3":
        document.getElementById("welcomeImage").src = imageHomeFive; 
        break;
      // 6 "Yellow" Scrambler Ducati 
      case "#ffb331":
        document.getElementById("welcomeImage").src = imageHomeSix; 
        break;
      default:
        document.documentElement.style.setProperty("--clr-btn", newColorBtn);
    }
    
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
                
                        {/* Main Theme 1 found in index.css */}
                        <div className="colour_drop main_theme" onClick={() => {themeOff(); changeText1(''); changeText2('');changeBackground(''); changeAccent(''); changeOutline(''); changeBtn(''); changeHL(''); changeHeading(''); changeLink('');}}></div>
                           
                        {/* Theme 2 - "Blue" Yamaha */}
                        <div className="colour_drop blue_theme" onClick={() => {themeOff(); changeText1('#fff'); changeText2('#0a2d81');changeBackground('#518c9c'); changeAccent('#0099c1'); changeOutline('#0a2d81'); changeBtn('#7209b7'); changeHL('#caf0f8'); changeHeading(''); changeLink('');}}></div>

                        {/* Theme 3 - "Neon Green" Kawasaki */}
                        <div className="colour_drop green_theme" onClick={() => {themeOff(); changeText1('#fff'); changeText2('#1e5c45');changeBackground('#69be28'); changeAccent('#1e5c45'); changeOutline('#1e5c45'); changeBtn('#1e5c45'); changeHL('#32cd33'); changeHeading(''); changeLink('');}}></div>
                           
                        {/* Theme 4 - "Red" Honda */}
                        <div className="colour_drop red_theme" onClick={() => {themeOff(); changeText1(''); changeText2('');changeBackground('#fff'); changeAccent('#DC182D'); changeOutline('#979797'); changeBtn('#DC182D'); changeHL('#979797'); changeHeading(''); changeLink('');}}></div>
                           
                        {/* Theme 5 - "Grey" Norton */}
                        <div className="colour_drop grey_theme" onClick={() => {themeOff(); changeText1(''); changeText2('#fff');changeBackground('#000'); changeAccent('#9da8a9'); changeOutline('#5a5a5d'); changeBtn('#abb8c3'); changeHL('#2e3c41'); changeHeading(''); changeLink('');}}></div>

                        {/* Theme 6 - "Yellow" Scrambler Ducati */}
                        <div className="colour_drop yellow_theme" onClick={() => {themeOff(); changeText1(''); changeText2('');changeBackground('#fff'); changeAccent('#ffac2a'); changeOutline('#666666'); changeBtn('#ffb331'); changeHL(''); changeHeading(''); changeLink('');}}></div>


              <div class="theme-verline"></div>
              <div className="user_display">
                {/* <span>Username</span> */}
                {/* <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div> */}
              </div>
            </div>
            </div>
          </ThemeWrapper>
          : null}
      </RightMainWrapper>
    </GNavWrapper>
  );
};

export default Themes;
