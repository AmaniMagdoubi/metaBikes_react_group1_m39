import React from 'react'
import {GolbalNavWrapper, TopBottomWrapper, Row, Column} from "../styles/global.styles.js"; //Golbal wrapper styles
import {UserWrapper} from "../styles/3-user-nav.styles";

const UserNav = () => {
  return (
    <GolbalNavWrapper>
    <TopBottomWrapper>
        <UserWrapper>
            <div className="user_wrapper">
                <Row>
                <div className="user_links">
                    
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    
                </div>
                <div class="header-verline"></div>
                <div className="user_display">
                  <span>Username</span>
                  <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div>
                </div>
                </Row>
            </div>
        </UserWrapper>
    </TopBottomWrapper>
    </GolbalNavWrapper>
  )
}

export default UserNav