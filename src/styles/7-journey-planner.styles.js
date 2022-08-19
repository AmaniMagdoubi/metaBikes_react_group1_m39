import styled from "styled-components";
import "../index.css";

export const JourneyWrapper = styled.div`

    height: 100%;
    display:flex;
    padding: 5em 0;
    align-items: center;
    background: var(--clr-text-light);

    .Journey_wrapper{

        width: 95%;
        margin: auto;
        padding: 5px;
        text-align: center;
    }

    .map_wrapper{

        height: auto;
        width: 100%;
        margin: auto;
        padding: 20px;
        text-align: center;
        background: var(--clr-text-dark);

    }

    .display_wrapper{

        background: var(--clr-text-light);
        height: 4em;
        width: 100%;
        display: table;
        border-radius: 25px;
    }

    .display_top{

        display: table-cell;
        vertical-align: middle;


        span{
            height: 100%;
            width: 40%;
            padding-left: 10px;
            margin: auto;
            text-align: left;
        }

        .header-horLine{
            width: 100%;
            height: 1px;
            background-color: var(--clr-outlines);
        }
    }

    .map{

        height: auto;
        width: 100%;
        background: black;
        padding: 20px;
        display: flex;
        justify-content: center;

    }

    .input_wrapper{

        height: 300px;
        width: 300px;
        margin: auto;
        background: purple;

    }

    
`
