import React from "react"
import "../index.css"; //Golbal styles
import {GolbalWrapper, LeftSpace, RightMainWrapper, Row} from "../styles/global.styles.js"; //Golbal wrapper styles
import {JourneyWrapper} from "../styles/7-journey-planner.styles";

export const JourneyPlanner = () => {
  return (
    <GolbalWrapper>
            <LeftSpace></LeftSpace>
            <RightMainWrapper>

                <JourneyWrapper>
                <div className="home_wrapper">
                    <div className="title_wrapper">
                        {/* <h1>META BIKES</h1>
                        <h2>Plan a trip with your friends online and meet offline!</h2>  */}
                        {/* <img src={image} alt="bike"/> */}
                    </div>
                    {/* <div className="about_wrapper">
                        <h3>WELCOME TO META BIKES</h3> 
                        <p>Your all-in-one platform whether you are a professional or hobbyist biker. We're touring-friendly and here to help you every step of the way. Plan your eagerly-awaited adventure, join our community and sell, buy and share gear on our e-Bike store!</p>
                    </div> */}
                    <Row>
                    </Row>
                </div>
                </JourneyWrapper>

            </RightMainWrapper>
        </GolbalWrapper>
  )
}

export default JourneyPlanner; 
