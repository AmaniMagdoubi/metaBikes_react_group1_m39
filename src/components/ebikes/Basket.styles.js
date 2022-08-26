import styled from "styled-components";

export const Position = styled.div`

    button{
        background-color: var(--clr-btn);
        border: solid 2px white;
        height: 50px;
        width: 120px;
        margin: 9px;
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
  z-index: 3;
  padding-left: 10em;
`;

export const BasketWrapper = styled.div`
  height: auto;
  width: 25em;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  z-index: 1;

  h2 {
    font-family: var( --ff-title);
    margin: 0 0 15px 0;
    text-align: center;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }


    height: auto;
    width: 25em;
    border: solid 3px white;
    border-radius: 10px;
    background: var(--clr-hl);
    padding: 30px;
    position: relative;
    z-index: 1;
    
    


    h2{
        font-family: var(--ff-main);
        margin: 0 0 15px 0;
        text-align: left;
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 5px;
        margin-top: 10px;
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
  height: auto;
  width: auto;
  position: absolute;
  left: 20em;
  top: 13px;

  button {
    height: 30px;
    width: 60px;
  }

  button:active {
    background: #000;
    color: #fff;
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
  background: var(--clr-accent);
  border: solid 1px var(--clr-outline);
  border-radius: 5px;
  margin: 10px;
  box-shadow: 10px 10px 10px rgba(134, 134, 134, 0.4);
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
  /* text-align: center;
  font: small-caps bold 15px Georgia, serif;


text-align: center;
font-family: var(--ff-main);

  button {

    margin: 30px auto 0 auto;
    height: 30px;
    width: 75%;
    display: inline-block;
  } */
`;
