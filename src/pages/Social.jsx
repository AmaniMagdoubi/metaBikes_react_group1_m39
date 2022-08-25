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
            <RightMainWrapper>
            <LeftNav />
              <SocialWrapper>
            



              <div className="test">

              <ImageFeed user={user}></ImageFeed>
            </div>
            </SocialWrapper>
              
      </RightMainWrapper>
      </GlobalWrapper>
  );
};
  
export default Social;
