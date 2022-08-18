import React from "react"
import "../index.css"; //Golbal styles
import {GolbalWrapper, LeftSpace, RightMainWrapper, Row} from "../styles/global.styles.js"; //Golbal wrapper styles
import {HomeWrapper} from "../styles/6-home-about.styles";
// import image from "../assets/IMG002.jpg"

const About = () => {
    return(
        <GolbalWrapper>
            <LeftSpace></LeftSpace>
            <RightMainWrapper>

                <HomeWrapper>
                <div className="home_wrapper">
                    <div className="title_wrapper">
                        <h1>META BIKES</h1>
                        <h2>Plan a trip with your friends online and meet offline!</h2> 
                        {/* <img src={image} alt="bike"/> */}
                    </div>
                    <div className="about_wrapper">
                        <h3>WELCOME TO META BIKES</h3> 
                        <p>Your all-in-one platform whether you are a professional or hobbyist biker. We're touring-friendly and here to help you every step of the way. Plan your eagerly-awaited adventure, join our community and sell, buy and share gear on our e-Bike store!</p>
                    </div>
                    <Row>
                        <div class="productSection_wrapper">
                            <div class="productSection">
                                
                                <div class="product" id="androidApp">

                                    <div class="addTag">
                                        <img src="https://random.imagecdn.app/600/600" alt="random img"/>
                                        <span>NEW</span>
                                    </div>
                                    <div class="productText">
                                        <h3>Plan a journey with ease</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="overlayText">
                                            As simple as<br/>one click
                                        </div>
                                    </div>

                                </div>
                                <div class="product" id="figmaPlugin">

                                    <div class="addTag">
                                        <img src="https://random.imagecdn.app/500/500" alt="random img"/>
                                        <span>NEW</span>
                                    </div>
                                    <div class="productText">
                                        <h3>Check the weather forcast</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="overlayText">
                                            No more<br/>rainy days
                                        </div>
                                    </div>

                                </div>
                                <div class="product" id="androidApp">

                                    <div class="addTag">
                                        <img src="https://random.imagecdn.app/400/400" alt="random img"/>
                                        <span>NEW</span>
                                    </div>
                                    <div class="productText">
                                        <h3>Build friendships</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="overlayText">
                                            Don't have <br/>and account?<br/>sign up!
                                        </div>
                                    </div>

                                </div>
                                <div class="product" id="adobeExtension">

                                    <div class="addTag">
                                        <img src="https://random.imagecdn.app/300/300" alt="random img"/>
                                        <span>COMING SOON</span>
                                    </div>
                                    <div class="productText">
                                        <h3>Buy and sell on our eBike store</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="overlayText">
                                            Browse our new<br/>store!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Row>
                    {/* <div className="home-end_wrapper">
                        <p>Share with your friends!</p>
                        <p>images / design</p>
                    </div> */}
                </div>
                </HomeWrapper>

            </RightMainWrapper>
        </GolbalWrapper>
    )
}

export default About; 

