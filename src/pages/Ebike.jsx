import React from "react";
import LeftNav from "../components/5-left-nav";
import Footer from "../components/9-contact-footer";
import EbikeApp from "../components/ebikes/ebikeApp";

import {
  GlobalWrapper,
  LeftSpace,
  RightMainWrapper,
} from "../styles/global.styles";

const Ebike = () => {
  return (
    <div>
      <GlobalWrapper />
      <LeftSpace />
      <RightMainWrapper>
        <h1>The Meta Market</h1>
      </RightMainWrapper>
      <LeftNav />
      <EbikeApp />
      <Footer />
    </div>
  );
};

export default Ebike;
