import styled from "styled-components";
import "../index.css";

export const HomeWrapper = styled.div`

  animation: fadeIn 2s;
  height: 100%;
  margin-top: 2.1em;
  display:flex;
  align-items: center;
  padding-bottom: 5em;
    
  .home_wrapper{

    width: 95%;
    height: auto;
    margin: auto;
    padding: 15px;
    text-align: center;
    
    background: var(--clr-text-dark);
    border-radius: 25px;

    span img{
      margin: auto;
      max-width: 100%;
      border-radius: 20px;
    }
    
  }

  .title_wrapper{
    height: auto;
    width: auto;
    padding: 8em 0px 5em;
    background: var(--clr-accent);
    border-radius: 25px 0px 25px 0px;
    h3{padding: 5px 50px;}
    
  }

  .about_wrapper{

    background: var(--clr-text-light);
    padding: 3em 30px;
    border-radius: 0px  0px  25px 25px;
    max-width: 30em;
    text-align:left;
    position: absolute;
    opacity: 0.7;
    height: auto;

    h3{text-align:center;}
  }
  .text2{top: 63%; border-radius: 25px;}

  .productSection_wrapper{
    
    width: inherit;
    margin: auto;
    padding-top: 2em;
    

      .productSection{
      display:flex;
      text-align: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin: auto;
    }

    .product{
      position: relative;
      background-color: var(--clr-text-light);
      max-width: 250px;
      height: 300px;
      margin: 10px;
      display:flex;
      flex-direction: column;
      border-radius: 25px 0px 25px 25px;
      border: solid 2px var(--clr-outline);
      
    }

    .addTag img{
      height: 90px;
      border-radius: 50%;
      position: relative;
      padding-top: 40px;
      margin: auto;
      left: 20px;
    }

    #four img{
      left: 40px;
    }

    .productText{
      margin: 0 20px;
      
    }

    .productText h3{
      font-family: var(--ff-three);
      line-height: 0.8;
      font-size: 25px;
    }

    .productText p{
      padding-top: 30px;
      line-height: 1.5;
      width: 12em;

    }

    /* Product section Tags */

    .addTag{
      width: auto;
      display:flex;
      margin: 15px;
    }

    .addTag span{
      position: relative;
      height: 18px;
      width:40px;
      font-size: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #three span{
      background-color: var(--clr-hl);
      color: var(--clr-btn);
    }

    #four span{
      width: 75px;
      background-color: var(--clr-hl);
      color: var(--clr-btn);
    }

    /* Animation */


    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      width: 100%;
      height: 0;
      transition: .2s ease;
      border-radius: 25px 0px 25px 25px;
    }

    .product:hover .overlay {
      height: 100%;
      backdrop-filter: opacity(20%);
    }

    .overlayText {
      font-size: 30px;
      font-family: var(--ff-secondary);
      line-height: 1.2;
      position: absolute;
      overflow: hidden;
      top: 50%;
      left: 50%;
      white-space: nowrap; 
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }

    .overlay{
      background-color: var(--clr-hl);
    }
    .overlayText {
      color: var(--clr-btn);
    }
    
  }

  .home-end_wrapper{

  }

`