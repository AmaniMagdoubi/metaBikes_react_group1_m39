import styled from "styled-components";
import "../index.css";

export const InterestWrapper = styled.div`

    height: 100%;
    margin-top: 2.1em;
    display:flex;
    align-items: center;

    .interest_wrapper{

        width: 95%;
        height: auto;
        margin: auto;
        padding: 15px;
        text-align: center;
        background: var(--clr-background);
        display: flex;
        flex-direction: column;

    }

    .carousel_wrapper{

        width: 90%;
        height: auto;
        margin: auto;

        //Change carousel arrows

        .rec.rec-arrow {
            border-radius: 0;
            background: var(--clr-accent);
        }
        .rec.rec-arrow:hover {
            border-radius: 50%;
            background: var(--clr-outline);
        }
        
        .rec.rec-arrow:disabled {
            visibility: hidden;
        }

        //Change carousel dots

        .rec-dot_active {
            background-color: var(--clr-outline) !important;
            box-shadow: 0 0 1px 3px var(--clr-text-dark) !important;
        }
        .rec-dot:focus,
        .rec-dot:hover {
            background-color: var(--clr-outline) !important;
            box-shadow: 0 0 1px 3px var(--clr-text-dark) !important;
        }
        .rec-dot_active:focus,
        .rec-dot_active:hover {
            background-color: var(--clr-outline) !important;
            box-shadow: 0 0 1px 3px var(--clr-text-dark) !important;
        }
        button.rec-dot{
            background: var(--clr-text-light);
            box-shadow: 0 0 1px 3px var(--clr-accent);
        }

    }

    .text_wrapper{

        padding: 50px;
    }
    
`

export const CarouselImg = styled.div`

    border: solid var(--clr-accent) 2px;

    img{
        
        height: 300px;
        width: 600px;
    }

    

`