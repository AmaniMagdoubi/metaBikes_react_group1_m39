import React from 'react'
import {GNavWrapper, Column} from "../styles/global.styles.js"; //Global wrapper styles
import {LeftNavWrapper} from "../styles/5-left-nav.styles";

const LeftNav = () => {
  return (
    <GNavWrapper>
        <LeftNavWrapper>
            <div className="logo_wrapper">
                <div className="logo"><img src="https://random.imagecdn.app/100/100" alt="random img"/></div>
            </div>
            <div className="left-nav_wrapper">
                <div className="link_wrapper">
                    <Column>
                    <a>Home</a>
                    <a>Local Interests</a>
                    <a>Journey Planner</a>
                    <a>E-Bikes</a>
                    </Column>
                </div>
            </div>
        </LeftNavWrapper>
    </GNavWrapper>
  )
}

export default LeftNav