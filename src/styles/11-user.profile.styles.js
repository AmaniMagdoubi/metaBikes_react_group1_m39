import styled from "styled-components";

export const UserProfileWrapper = styled.div`

    body {
        display: flex
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    /* Button Styling */
    button {
        /* border: 2px black solid;
        background-color: orange;
        border-radius: 0%;
        padding: 8px 30px; */
            

    }

    button:hover {
        /* background-color: var(--clr-accent); */
        /* color: black; */
    }

    /* Form / Input Styling */
    input {
        background-color: white;
        padding: 15px;
        width: 25%;
        border: 3px black solid;
        color: black;
    }

    input:hover {
        background-color: #E3E3E3;
        border: 3px orange solid;
    }
`