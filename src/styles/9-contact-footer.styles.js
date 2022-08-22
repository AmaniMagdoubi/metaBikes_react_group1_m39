import styled from "styled-components";
import "../index.css";

export const FooterWrapper = styled.div`

    background: var(--clr-text-light);
    height: 10em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer_wrapper{

        width: 80%;
        display: flex;
        align-items: center;

    }

    .footer_text{

        margin: auto;

        p{
            margin: 20px;
        }

    }

    .footer_icons {

        display: flex;
        justify-content: space-between;
    }

    .copyright_footer {

        display: flex;
        justify-content: center;
        align-items: center;
        
    }

`