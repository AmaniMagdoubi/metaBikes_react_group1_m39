import React from 'react'
import {GNavWrapper, Column} from "../styles/global.styles.js"; //Global wrapper styles
import {LeftNavWrapper} from "../styles/5-left-nav.styles";
import Image from "../assets/meta bikes-header-logo.png"; 
import {Link} from "react-router-dom";

const LeftNav = ({user}) => {
  return (
    <GNavWrapper>
        <LeftNavWrapper>
            <div className="logo_wrapper">
                <div className="logo"><img src={Image} alt="Meta Bikes Logo"/></div>
            </div>
            <div className="left-nav_wrapper">
                <div className="link_wrapper">
                    <Column>
                    <Link to="/" user={user}>Home</Link>
                    <a>Local Interests</a>
                    <a>Journey Planner</a>
                    <Link to="/ebike" user={user}>E-Bike</Link>
                    </Column>
                </div>
            </div>
        </LeftNavWrapper>
    </GNavWrapper>
  )
}

export default LeftNav