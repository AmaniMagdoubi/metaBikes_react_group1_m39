import styled from "styled-components";
import "../index.css";

export const LeftNavWrapper = styled.div`

    background: var(--clr-text-dark);
    height: 100vh;
    width: 10em;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;

    .logo_wrapper, .left-nav_wrapper{

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .logo_wrapper{
        
        height: 10em;
        max-width: 10px;
        img {
            max-width: 100px;
        }
    }

    .left-nav_wrapper{

        height: 40%;
    }

    .link_wrapper a{
        margin: 10px;
    }

    .logo {


    }


    
    
`