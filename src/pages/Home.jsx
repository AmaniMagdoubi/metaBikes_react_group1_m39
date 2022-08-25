import React from "react";
import "../index.css";
import { useState } from "react";
import About from "../components/6-home-about";
import LeftNav from "../components/5-left-nav";
import Footer from "../components/9-contact-footer";

const HomePage = () => {
  // set modal button to show content on onclick
  const [modalShow, setModalShow] = useState(false);
  // eslint-disable-next-line
  const modalOn = () => {
    setModalShow(!modalShow);
  };
  // Set modal button to hide content on onclick
  // eslint-disable-next-line
  const modalOff = () => {
    setModalShow(false);
  };

  return (
    <div>
      <LeftNav />
      <About/>
      <Footer />
    </div>
  );
};

export default HomePage;
