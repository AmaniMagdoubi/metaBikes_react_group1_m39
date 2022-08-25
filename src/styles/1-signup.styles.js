import styled from "styled-components";

export const SignupWrapper = styled.div`

    .modal_off{
        position: relative;
        padding: 3px 10px;
        left: 130px;
        bottom: 7px;
    }
    
    .form{
    height: 100vh;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    padding-left: 5em;
    z-index: 2;


    form{
        height: auto;
        width: auto;
        padding: 2em;
        border-radius: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        
    }

    .full_wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: auto;
        width: 20em;
        margin: 5px;
        background: var(--clr-hl);
        padding: 20px;
        border: solid 2px black;
        span{animation: milUsers 10s infinite;}
        a{ color: var(--clr-btn);}
        
    }

}
.bg{ background-color: rgba(0, 0, 0, 0.4);}
    

    /* Form / Input Styling */
    input {
        background-color: var(--clr-background);
        padding: 15px;
        width: 20em;
        margin: 5px;
        border: 3px var(--clr-accent) solid;
        color: black;
    }

    input:hover {
        background-color: var(--clr-accent);
        border: 3px var(--clr-hl) solid;
    }

@keyframes milUsers {
  0%   {color: rgb(201, 58, 58);}
  10%   {color: rgb(255, 119, 0);}
  20%  {color: rgb(151, 144, 12);}
  30%   {color: rgb(90, 164, 20);}
  40%  {color: rgb(25, 149, 107);}
  50%  {color: rgb(71, 221, 235);}
  60% {color: rgb(41, 189, 142);}
  70% {color: rgb(87, 69, 255);}
  80% {color: rgb(169, 98, 255);}
  90% {color: rgb(255, 106, 243);}
  100% {color: rgb(255, 118, 173);}
}


    
`