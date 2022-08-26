import styled from "styled-components";

export const BodyWrapper = styled.div`

  height: auto;
  width: 95%;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 5em 0px;
  border-radius: 25px;
  background: var(--clr-hl);
  flex-wrap: wrap;
  margin: auto;


`

export const CardWrapper = styled.div`

  width: 38%;
  height: auto;
  display: flex;
  border: solid 2px var(--clr-outline);
  background-color: var(--clr-btn);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: left;
  padding: 10px;
  margin: 20px;
  min-width: 600px;


  strong{
    margin: 9px 0px;
    font-family: var(--ff-main);
  }
  

  @media (max-width: 913px) {
    display: flex;
    flex-direction: column;
    height: auto;
    min-width: 90%;
    button{margin-bottom: 10px;}
   
   
  }
`
export const ImgWrapper = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  

img{
  max-width: 80%;
  max-height: 100%;
}

button{
      margin-top: 10px;
    }
`;

export const CardTextWrapper = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
padding: 10px;
background-color: var(--clr-accent);

    .card{width: auto; height: 100%; display: flex; align-items: center;}


`

export const Button = styled.button`
  color: white;
  border: none;
  background: black;
  padding: 7px;
  border-radius: 5px;
  margin-left: 25px;
  cursor: pointer;
  height: 30px;
  width: 10em;

  :hover{
    background: white;
    color: #000;
  }
  :active{
    background: #fff;
    color: black;
}
`;