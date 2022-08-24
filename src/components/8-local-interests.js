import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselItems from "./18-carousel";
import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper,
} from "../styles/global.styles.js"; //Global wrapper styles
import { InterestWrapper } from "../styles/8-local-interests.styles";

const breakPoints = [
  { width: 100, itemToShow: 1 },
  { width: 550, itemToShow: 2 },
  { width: 768, itemToShow: 3 },
  { width: 1200, itemToShow: 4 },
];

const LocalInterests = () => {
  return (
    <GlobalWrapper>
      <LeftSpace></LeftSpace>
      <RightMainWrapper>
        <InterestWrapper>
          <div className="interest_wrapper">

            <div className="text_wrapper">
              <h1>Local Interests</h1>
              <h2 className="sub_heading">
                <em>Are you planning a journey / tour?</em> Browse our
                e-ideas-board to sparke your creativity!
              </h2>

              <p>
                Mark all the towns, highways and streets you want to drive
                through! Connect with your friends, build a community and share
                your pictures! Use our Journey Planner and make your ideas come
                to life!
              </p>
              <h3 className="sub_heading">Enjoy your travels!</h3>
            </div>
            <br></br>
            <div className="carousel_wrapper">
              <CarouselItems Component breakPoints={breakPoints}>
                <Carousel></Carousel>
              </CarouselItems>
            </div>
          </div>
        </InterestWrapper>
      </RightMainWrapper>
    </GlobalWrapper>
  );
};

export default LocalInterests;
