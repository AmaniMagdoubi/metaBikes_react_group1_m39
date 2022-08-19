import React from "react"; 
import Carousel from "react-elastic-carousel";
import CarouselItems from "./18-carousel"
import {GolbalWrapper, LeftSpace, RightMainWrapper, Row} from "../styles/global.styles.js"; //Golbal wrapper styles

const breakPoints = [
  { width: 100, itemToShow: 1 }, 
  { width: 550, itemToShow: 2 }, 
  { width: 768, itemToShow: 3 }, 
  { width: 1200, itemToShow: 4 }, 
];

const LocalInterests = () => {
  return (
    <GolbalWrapper>
            <LeftSpace></LeftSpace>
            <RightMainWrapper>
    <div>
        <h1>Local Interests</h1>
        <p><em>Are you planning a journey / tour?</em> Browse our e-ideas-board to sparke your creativity!</p>
        
        <p>Mark all the towns, highways and streets you want to drive through! Connect with your friends, build a community and share your pictures! Use our Journey Planner and make your ideas come to life!</p>
        <p>Enjoy your travels!</p>
        {/* <img src="https://random.imagecdn.app/500/500" alt="Ideas Board to plan your journey"></img> */}
        <div className="Carousel">
          <CarouselItems Component breakPoints={breakPoints}>
           <Carousel></Carousel>
          </CarouselItems>

        </div>
    </div>
    </RightMainWrapper>
    </GolbalWrapper>
  )
}

export default LocalInterests; 