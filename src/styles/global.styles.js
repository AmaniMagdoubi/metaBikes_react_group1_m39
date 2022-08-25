import styled from "styled-components";

export const GlobalWrapper = styled.div`

    height: 100%;
    display: flex;
    flex-direction: row;

`
export const LeftSpace = styled.div`

    height: auto;
    min-width: 10em !important;
    background: var(--clr-accent);

`
export const RightMainWrapper = styled.div`

    height: auto;
    width: 100%;

`

export const Row = styled.div`

    display: flex;
    flex-direction: row;


`
export const Column = styled.div`

    display: flex;
    flex-direction: column;

`
export const GNavWrapper = styled.div`

    position: fixed;
    margin: auto;
    height: auto;
    width: 100%;
    z-index: 1;
  
`

export const LoginWrapper = styled.div`

    height: 3.3em;
    width: 100%;
    display: flex;
    padding-right: 20px;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    cursor: pointer;
    p:hover{color: var(--clr-btn);}
    
`

export const LogoutWrapper = styled.div`

        height: auto;
        width: auto;
        display: flex;
        padding-right: 20px;
        top: 4.8em;
        justify-content: flex-end;
        position: absolute;
        right: 1em;
        button{padding: 5px 10px; border-radius: 25px 0px 25px;}
        button:hover{background: var(--clr-outline); color: var(--clr-text-light); border-radius: 0px 25px 0px;}
    
`