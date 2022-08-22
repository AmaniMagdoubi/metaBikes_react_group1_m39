import styled from "styled-components";
import "../index.css";

export const UserWrapper = styled.div`

    height: 5em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    

    .user_wrapper{

        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--clr-text-dark);
        border-radius: 50px 0px 0px 50px;

    }

    .user_links{

        display: flex;
        align-items: center;
        margin: 0px 20px;

        a{margin: 10px;}
    }

    .header-verline{
        width: 1px;
        height: 50px;
        background: var(--clr-text-light);
        margin-right: 20px;
    }

    .user_display{

        display: flex;
        align-items: center;
        margin-right: 10px;
        
        span{
            margin-right: 20px;
            color: var(--clr-text-light);
        }

    }

    .user_img{

        height: 54px;
        width: 54px;
        border: solid 2px var(--clr-text-light);
        border-radius: 50%;
        margin-right: 15px;
        cursor: pointer;

        img{
            height: 50px;
            width: 50px;
            border-radius: inherit;
          }
    }

    
`