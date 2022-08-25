import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  padding: 20px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const Wrapper = styled.div`
  display: flex;
  button {
    background-color: green;
    color: white;
    border-radius: 5px;
    border-color: rgb(0, 0, 0);
    border-style: double;
    height: 50px;
    width: 70%;
    font-size: 20px;
    margin: 9px;
  }
`;

export const StyleNavbar = styled.nav`
  width: 100%;
  padding-bottom: 15px;
  overflow-x: hidden;
`;
