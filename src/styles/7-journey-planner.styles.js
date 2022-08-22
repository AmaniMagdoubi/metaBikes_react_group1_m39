import styled from "styled-components";
import "../index.css";

export const JourneyWrapper = styled.div`

    height: 100%;
    display:flex;
    padding: 5em 0;
    align-items: center;
    background: var(--clr-text-light);

    .Journey_wrapper{

        width: 95%;
        margin: auto;
        padding: 5px;
        text-align: center;
    }

    .map_wrapper{

        height: auto;
        width: 100%;
        margin: auto;
        padding: 20px;
        text-align: center;
        background: var(--clr-text-dark);

    }

    .display_wrapper{

        background: var(--clr-text-light);
        height: 4em;
        width: 100%;
        display: table;
        border-radius: 25px;
    }

    .display_top{

        display: table-cell;
        vertical-align: middle;


        span{
            height: 100%;
            width: 40%;
            padding-left: 10px;
            margin: auto;
            text-align: left;
        }

        .header-horLine{
            width: 100%;
            height: 1px;
            background-color: var(--clr-outlines);
        }
    }

    .map{

        height: auto;
        width: 70%;
        padding: 20px;
        display: flex;
        justify-content: center;

    }

    .input_wrapper{

        height: 300px;
        width: 300px;
        margin: auto;
        background: purple;

    }


    .oy-branch{

        position: relative;
        width: 400px;
        height: 400px;

    }

    //start of weather app styling

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Outfit', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  font-size: 1.6rem;
}

h1 {
  font-size: 6rem;
}

.weatherApp {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0,0,0,0.4);
  color: #fff;
}

.weatherApp:before {
  content: '';
  background: url('./assets/stelvio.jpg') no-repeat center center/cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.weatherApp .search {
  text-align: center;
  padding: 1rem;
}

.weatherApp input {
  padding: .7rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(255,255,255, 0.8);
  background: rgba(255,255,255, 0.1);
  color: #f8f8f8;
}

::placeholder {
  color: #f8f8f8;
}

.container {
  max-width: 700px;
  height: 700px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.weatherApp .top {
  width: 100%;
  margin: 1rem auto;
}

.weatherApp .description {
  position: relative;
  right: -90%;
  transform-origin: 0 0;
  transform: rotate(269deg);
}

.weatherApp .bottom {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255,255,255, 0.2);
}

.bold {
  font-weight: 700;
}


    
`

export const GoogleMap = styled.div``

