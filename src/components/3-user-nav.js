import React from 'react'
import {GolbalNavWrapper, TopBottomWrapper, Row, Column} from "../styles/global.styles.js"; //Golbal wrapper styles
import {UserWrapper} from "../styles/3-user-nav.styles";

const UserNav = () => {
  return (
    <GolbalNavWrapper>
    <TopBottomWrapper>
        <UserWrapper>
            <div className="user_wrapper">
                <div className="user_links">
                    <Row>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    <a>Lorem Ipsum</a>
                    </Row>
                </div>
            </div>
        </UserWrapper>
    </TopBottomWrapper>
    </GolbalNavWrapper>
  )
}

export default UserNav