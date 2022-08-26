import React from "react";
import LeftNav from "../components/5-left-nav";
import EbikeApp from "../components/ebikes/ebikeApp";
import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper,
} from "../styles/global.styles";
import {EBikesWraper} from "../styles/Ebike.styles"

const Ebike = () => {
  return (
      <GlobalWrapper>
          <LeftSpace></LeftSpace>
          <LeftNav />
          <RightMainWrapper>
            <EBikesWraper>
              <div className="ebike_wrapper">
                <div classname="title_wrapper">
                 <h1>The Meta Market</h1>
                </div>
                <EbikeApp />
              </div>
        </EBikesWraper>
      </RightMainWrapper>
      </GlobalWrapper>
  );
};

export default Ebike;
