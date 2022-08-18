import styled from "styled-components";
import "../index.css";

export const HomeWrapper = styled.div`

  height: 100%;
  display:flex;
  align-items: center;
    
  .home_wrapper{

    width: 90%;
    margin: auto;
    padding: 5px;
    text-align: center;
    background: orange;
    
  }

  .title_wrapper{
    height: auto;
    width: auto;
    margin-top: 10em;
    /* background: var(--clr-accent); */

    img{
      margin: auto;
    }
    
  }

  .about_wrapper{

    background: var(--clr-text-light);
    padding: 20px 30px;
    border-radius: 50px;
    background-image: url("https://postimg.cc/SYWYzmV8");
    background-size: cover;
    /* width: 20em; */
    /* text-align:left; */

  }

  .productSection_wrapper{
    width: inherit;
    margin: auto;
    padding-top: 8em;

      .productSection{
      display:flex;
      text-align: center;
      justify-content: center;
      height: 320px;
      width: 100%;
      margin: auto;
    }

    .product{
      position: relative;
      background-color: var(--clr-text-light);
      max-width: 250px;
      margin: 10px;
      display:flex;
      flex-direction: column;
      border: solid 2px black;
      
    }

    .addTag img{
      height: 90px;
      border-radius: 50%;
      position: relative;
      padding-top: 40px;
      margin: auto;
      left: 20px;
    }

    #adobeExtension img{
      left: 40px;
    }

    #iosApp img, #chromeExtension img{
      left: 0px;
      padding-top: 30px;
      padding-bottom: 10px; 
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

    #androidApp span{
      background-color: #C7F5EB;
      color: #0D8161;
    }

    #figmaPlugin span{
      background-color: #FFE5F4;
      color: #CC0178;
    }

    #adobeExtension span{
      width: 75px;
      background-color: #FBEDB8;
      color: #A98501;
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

    #iosApp .overlay{
      background-color: #bee4ff;
      color:#0066FF;
    }

    #androidApp .overlay{
      background-color: #C7F5EB;
    }
    #androidApp .overlayText {
      color: #0D8161;
    }

    #figmaPlugin .overlay {
      background-color: #FFE5F4;
    }
    #figmaPlugin .overlayText {
      color: #CC0178;
    }

    #chromeExtension .overlay{
      background-color: #d9bcf9;
      color: purple;
    }

    #adobeExtension .overlay{
      background-color: #FBEDB8;
      color: #A98501;
    }
  }

  .home-end_wrapper{

  }

`