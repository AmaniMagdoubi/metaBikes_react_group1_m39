import styled from "styled-components";

export const Position = styled.div`

    button{
        background-color: var(--clr-btn);
        border: solid 5px white;
        height: 50px;
        width: 120px;
        font-size: 20px;
        margin: 9px;
    }

    button:hover {
        background-color: white;
        border: solid 5px var(--clr-btn);
    }

`

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const BasketWrapper = styled.div`
  height: auto;
  width: 25em;
  border: solid 3px #46863d;
  border-radius: 10px;
  background: #f5f5db;
  padding: 30px;
  position: relative;
  z-index: 1;

  h2 {
    font: small-caps bold 30px Georgia, serif;
    color: #46863d;
    margin: 0 0 15px 0;
    text-align: center;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #46863d;
  }


    height: auto;
    width: 25em;
    color: #fff;
    border: solid 3px white;
    border-radius: 10px;
    background: var(--clr-btn);
    padding: 30px;
    position: relative;
    z-index: 1;
    
    


    h2{
        font-family: var(--ff-main);
        color: white;
        margin: 0 0 15px 0;
        text-align: center;
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background: #fff;
    }

    button:hover{
        background: grey;
    }
    button:active{
        background: #000;
        color:#fff;
    }


`

export const ModalOff = styled.div`

  button:active {
    background: #000;
    color: #fff;
  }
`;

export const ModalOff = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  left: 24em;
  top: 1em;

  button {
    height: 30px;
    width: 60px;
  }
`;

export const YourSelection = styled.div`
  height: auto;
  width: auto;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  height: auto;
  width: 350px;
  background: #8dcb85;
  border: solid 1px #6cbb63;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 10px 10px 10px rgba(113, 113, 113, 0.4);
  position: relative;
`;

export const CatName = styled.div`
  padding: 10px 20px;
  position: absolute;
  top: 25%;
`;

export const QuantityWrapper = styled.div`
  text-align: right;
  padding-right: 5px;

  button {
    margin: 10px;
    height: 30px;
    width: 40px;
  }

  button:active {
    background: #fff;
    color: #000;
  }

  p {
    margin: 0 10px 10px 10px;
    padding-right: 6px;
  }
`;

export const BottomWrapper = styled.div`
  text-align: center;
  font: small-caps bold 15px Georgia, serif;


text-align: center;
font-family: var(--ff-main);

  button {

    margin: 30px auto 0 auto;
    height: 30px;
    width: 75%;
    display: inline-block;
  }
`;
