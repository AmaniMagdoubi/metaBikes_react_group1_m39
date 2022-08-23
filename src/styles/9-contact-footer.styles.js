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

        width: 95%;
        display: flex;
        align-items: center;
        padding-top: 10px;

    }

    .footer_text{
        
        
        display: flex;
        flex-direction: row;
        margin: auto;

        p{margin: 15px;}

        .header_text{
            /* margin: auto; */
            height: auto;
            width: 20%;
            padding-left: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .right_text{
            display: flex;
            justify-content: center;
            padding-left: 50px;

            @media (max-width: 768px) {padding-left: 0px;}
        }

        .info_text{
            height: auto;
            width:auto;
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 768px) {
                display: flex;
                justify-content: center;
                padding-top: 30px;
                
            }
        }

        @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
        
}
    }

    .footer_icons {

        display: flex;
        justify-content: space-between;
    }

    .copyright_footer {

        display: flex;
        justify-content: left;
        align-items: center;
        
    }

`