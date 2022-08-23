import styled from "styled-components";
import "../index.css";

export const FooterWrapper = styled.div`

    background: var(--clr-accent);
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer_wrapper{

        width: 90%;
        display: flex;
        align-items: center;
        padding-top: 10px;

    }

    .footer_text{
        
        margin: auto;
        display: flex;
        flex-direction: row;

        p{margin: 15px;}

        .header_text{
            height: auto;
            width:30%;
            padding-right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .info_text{
            height: auto;
            width:auto;
            display: flex;
            flex-wrap: wrap;
            

        }

        @media (max-width: 671px) {
        display: flex;
        flex-direction: column;
        align-items: center;
}
    }

    .footer_icons {

        display: flex;
        justify-content: space-between;
    }

    .twitter_icon:hover, .instagram_icon:hover, .facebook_icon:hover {

        fill: white;
    }

    .copyright_footer {

        display: flex;
        justify-content: left;
        align-items: center;
        
    }

`