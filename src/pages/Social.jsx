import React from "react";
import ImageFeed from "../components/20-image-feed";
import LeftNav from "../components/5-left-nav";
import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper
} from "../styles/global.styles.js"; //Global wrapper styles
import { SocialWrapper } from "../styles/Social.styles";

const Social = ({ user }) => {
  console.log(user);
  return (<GlobalWrapper>
          <LeftSpace></LeftSpace>
          <LeftNav />
          <RightMainWrapper>
              <SocialWrapper>
              <div className="feed_position">

              <ImageFeed user={user}></ImageFeed>
            </div>
            </SocialWrapper>
              
      </RightMainWrapper>
      </GlobalWrapper>
  );
};
  
export default Social;
