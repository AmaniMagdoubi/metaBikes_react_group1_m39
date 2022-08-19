import React from 'react'
import {TopBottomWrapper, Row, Column} from "../styles/global.styles.js"; //Golbal wrapper styles
import {FooterWrapper} from "../styles/9-contact-footer.styles"

const Footer = () => {
  return (
    <TopBottomWrapper>
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

    </TopBottomWrapper>
  )
}

export default Footer; 