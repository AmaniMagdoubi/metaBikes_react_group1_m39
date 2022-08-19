import React from 'react'
import {GolbalNavWrapper, Column} from "../styles/global.styles.js"; //Golbal wrapper styles
import {LeftNavWrapper} from "../styles/5-left-nav.styles";

const LeftNav = () => {
  return (
    <GolbalNavWrapper>
        <LeftNavWrapper>
            <div className="logo_wrapper">
                <div className="logo"><img src="https://random.imagecdn.app/100/100" alt="random img"/></div>
            </div>
            <div className="left-nav_wrapper">
                <div className="link_wrapper">
                    <Column>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    </Column>
                </div>
            </div>
        </LeftNavWrapper>
    </GolbalNavWrapper>
  )
}

export default LeftNav