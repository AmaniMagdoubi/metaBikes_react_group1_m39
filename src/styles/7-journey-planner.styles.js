import styled from "styled-components";
import "../index.css";



export const JourneyWrapper = styled.div`

    height: 100%;
    display:flex;
    padding: 5em 0;
    align-items: center;
    background: var(--clr-text-light);
    animation: fadeIn 2s;

    .Journey_wrapper{

        width: 95%;
        margin: auto;
        padding: 5px;
        text-align: center;
        display: flex;
        flex-direction: column;

        .text_wrapper{
          padding: 10px;
          margin-top: 3em;

          .sub_heading {
            font-family: var(--ff-three);
          }
        }
    }

    .display_top{

      height: auto;
      width: 100%;
      margin-bottom: 6px;
      padding: 20px;
      text-align: center;
      background: var(--clr-accent);
      border-radius: 25px;
      
      


      .input_wrapper{
        
        display: flex;
        background: var(--clr-text-light);
        border-radius: 25px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        @media (max-width: 807px) {
          flex-direction: column;
        }

      .button_wrapper{

        display: flex;
        flex-direction: row;

        .button{ height: auto;}

      }

      .icon, .button{
        height: auto;
        display: flex;
        justify-content: center;
        /* background: var(--clr-btn); */
        margin: 10px;
        border-radius: 20px;}

    }

    .from_input, .to_input {

        padding: 6px 20px;
        font: var(--ff-main);
        border-radius: 25px;
        border: none;
        border: 1px solid var(--clr-outline);
        background: var(--clr-text-light);
        @media (max-width: 807px) {
          margin: 10px;
        }

        ::placeholder {
          color: var(--clr-text-dark);
          opacity: 1; 
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--clr-text-dark);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--clr-text-dark);
        }
        }
    }

    .output_wrapper{

        display: flex;
        flex-direction: row;
        .output, .icon{margin: 10px 20px 8px;}
        .output{
          border: 1px solid var(--clr-outline);
          padding: 6px 100px 6px 20px ;
          border-radius: 25px;
        }

        @media (max-width: 807px) {
          flex-direction: column-reverse;
          margin: 20px;
        }

    }


    .display_middle{

      height: auto;
      width: 100%;
      padding: 20px;
      background: var(--clr-text-dark);
    }

    #map{

      /* height: 50em !important; */

      
    }

  
  
`








export const WeatherApp = styled.div`

  height: 100%;
  width: 100%;

.weather_app {
  width: 100%;
  height: auto;
  margin-top: 6px;
  background: var(--clr-text-light);
}

.search {
  text-align: center;
  padding: 1em;
}

.weather_app input {
  padding: 6px 20px;
  font: var(--ff-main);

  border-radius: 25px;
  border: 1px solid var(--clr-accent);
  background: rgba(255,255,255, 0.2);
  ::placeholder {
    color: var(--clr-text-dark);
    opacity: 1; 
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: var(--clr-text-dark);
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--clr-text-dark);
  }
}

.container {
  width: auto;
  /* height: 15em; */
  height: auto;
  margin: auto;
  padding: 1em;
  top: 10%;
  display: flex;
  flex-direction: column;
  background: var(--clr-accent);
  
  /* @media (max-width: 700px) {height: 25em;} */
}

.top {
  width: 100%;
  margin: 1em auto;
}

.bottom {
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
  border-radius: 12px;
  background-color: rgba(255,255,255, 0.2);
  @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 50%;
      height: auto;
      .humidity{
        margin: 25px auto;
      }
  }
}

`

