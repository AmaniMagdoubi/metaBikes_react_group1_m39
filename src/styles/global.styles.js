import styled from "styled-components";

export const GlobalWrapper = styled.div`

    height: 100%;
    display: flex;
    flex-direction: row;

`
export const LeftSpace = styled.div`

    height: auto;
    min-width: 10em !important;
    background: red; /* tester to be removed */

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

    a{
        
    }
  
`

export const LoginWrapper = styled.div`

    height: 3.3em;
    width: 100%;
    display: flex;
    padding-right: 20px;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    
`

export const LogoutWrapper = styled.div`

        height: auto;
        width: auto;
        display: flex;
        padding-right: 20px;
        top: 3.5em;
        justify-content: flex-end;
        position: relative;
    
`