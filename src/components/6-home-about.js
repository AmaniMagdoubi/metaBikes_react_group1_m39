import React from "react";
import "../index.css"; //Global styles
import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper,
  Row,
  Column,
} from "../styles/global.styles.js"; //Global wrapper styles
import { HomeWrapper } from "../styles/6-home-about.styles";


const About = () => {
  return (
    <GlobalWrapper>
      <LeftSpace></LeftSpace>
      <RightMainWrapper>
        <HomeWrapper>
          <div className="home_wrapper">
            <div className="title_wrapper">
              <h1>META BIKES</h1>
              <h3>Plan a trip with your friends online and meet offline!</h3>
            </div>
           
            <Column>
            <Row>
              <div className="about_wrapper">
                <h3>WELCOME TO META BIKES</h3>
                <br></br>
                <p><p>- Your all-in-one platform whether you are a professional or
                  hobbyist biker. We're touring-friendly and here to help you
                  every step of the way.</p>
                  <br></br>
                  <p>- Plan your eagerly-awaited adventure,
                  join our community and sell, buy and share gear on our e-Bike
                  store!</p></p>
              </div>
              </Row>
              <span>
                <img
                  src="https://i.postimg.cc/XYLXNCfL/honda-red-bike.jpg"
                  alt="Motor Bike" 
                  id="welcomeImage"
                />
              </span>
            </Column>

            <Row>
              <div class="productSection_wrapper">
                <div class="productSection">
                  <div class="product" id="two">
                    <div class="addTag">
                      <img
                        src="https://picsum.photos/id/177/500/500"
                        alt="random img"
                      />
                      <span></span>
                    </div>
                    <div class="productText">
                      <h3>Journey Planner</h3>
                      <p>Plan a journey with ease</p>
                    </div>
                    <div class="overlay">
                      <div class="overlayText">
                        As simple as
                        <br />
                        one click
                      </div>
                    </div>
                  </div>
                  <div class="product" id="two">
                    <div class="addTag">
                      <img
                        src="https://picsum.photos/id/492/500/500"
                        alt="random img"
                      />
                      <span></span>
                    </div>
                    <div class="productText">
                      <h3>Weather Forcast</h3>
                      <p>Check the weather forcast</p>
                    </div>
                    <div class="overlay">
                      <div class="overlayText">
                        No more
                        <br />
                        rainy days
                      </div>
                    </div>
                  </div>
                  <div class="product" id="three">
                    <div class="addTag">
                      <img
                        src="https://picsum.photos/id/454/500/500"
                        alt="random img"
                      />
                      <span>NEW</span>
                    </div>
                    <div class="productText">
                      <h3>Meta Community</h3>
                      <p>Build friendships</p>
                    </div>
                    <div class="overlay">
                      <div class="overlayText">
                        Don't have <br />
                        and account?
                        <br />
                        sign up!
                      </div>
                    </div>
                  </div>
                  <div class="product" id="four">
                    <div class="addTag">
                      <img
                        src="https://picsum.photos/id/7/500/500"
                        alt="random img"
                      />
                      <span>COMING SOON</span>
                    </div>
                    <div class="productText">
                      <h3>E-Bike</h3>
                      <p>Buy and sell on our eBike store</p>
                    </div>
                    <div class="overlay">
                      <div class="overlayText">
                        Browse our new
                        <br />
                        store!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
            
            <div className=""></div>
          </div>
        </HomeWrapper>
      </RightMainWrapper>
    </GlobalWrapper>
  );
};

export default About;
