import React from 'react'
import {GNavWrapper, Row} from "../styles/global.styles.js"; //Global wrapper styles
import {UserWrapper} from "../styles/3-user-nav.styles";
import "../index.css";

const UserNav = ({modalOn}) => {
  
  return (
    <GNavWrapper>
        <UserWrapper>
            <div className="user_wrapper">
                <Row>
                <div className="user_links">
                    
                    <a onClick = {modalOn}>Themes</a>
                    
                    <a>Community</a>
                    <a>Profile</a>
                    {/* <a><Link to="/profile" user={user}>Profile</Link></a>
                    <a><Link to="/social" user={user}>Community</Link></a> */}
                    
                </div>
                <div class="header-verline"></div>
                <div className="user_display">
                  <span>Username</span>
                  <div className="user_img"><img src="https://random.imagecdn.app/900/900" alt="random"/></div>
                </div>
                </Row>
            </div>
        </UserWrapper>
    </GNavWrapper>
  )
}

export default UserNav