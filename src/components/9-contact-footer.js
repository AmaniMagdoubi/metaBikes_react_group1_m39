import React from 'react'
import {GlobalWrapper, LeftSpace, RightMainWrapper, Row, Column} from "../styles/global.styles.js"; //Global wrapper styles
import {FooterWrapper} from "../styles/9-contact-footer.styles"

const Footer = () => {
  return (
    <GlobalWrapper>
      <LeftSpace></LeftSpace>
            <RightMainWrapper>
        <FooterWrapper>
            <div className="footer_wrapper">
                <div className="footer_text">
                    <Row>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    </Row>
                </div>

                <div className="footer_icons">

                </div>
            </div>
        </FooterWrapper>
        </RightMainWrapper>
    </GlobalWrapper>
  )
}

export default Footer; 