import styled from "styled-components";
import "../index.css";

export const ThemeWrapper = styled.div`

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 5em;
    top: 5em;
    width: 18em;
    height: 25em;
    border: solid 1px var(--clr-background);
    background: rgba(255, 255, 255, 0.516);
    

        .theme_modal {

            height: auto;
            width: 15em;
            background: var(--clr-text-light);
            padding: 10px;
        }

        .theme-text{
            
            text-align: center;
            padding: 30px 0px 10px;
        }

        .colour_links{

            height: auto;
            width: 100%;
            text-align: center;

            .colour_drop{

                height: 55px;
                width: 55px;
                border-radius: 50%;
                border: solid 2px var(--clr-text-dark);
                margin: 10px;
                display: inline-block;
                cursor: pointer;
                
            }


            /* make values 1, 6 & 7 the same */
            @keyframes maintheme {0%{background: #fe0707;}20%{background: #ff9741;}40%{background: #FBEDB8;}60%{background: #d05000;}80%{background: #FBEDB8;}90%{background: #fe0707;}100%{background: #fe0707;}}
            .main_theme{background: #d05000;}
            .main_theme:hover{ animation: maintheme 3s infinite;}
            /* .main_theme{ animation: maintheme 3s infinite;} */


            @keyframes bluetheme {0%{background: #00b4d8;}20%{background: #caf0f8;}40%{background: #00b4d8;}60%{background: #5e60ce;}80%{background: #7209b7;}90%{background: #00b4d8;}100%{background: #00b4d8;}}
            .blue_theme{background: #00b4d8;}
            .blue_theme:hover{ animation: bluetheme 3s infinite;}
            /* .blue_theme{ animation: bluetheme 3s infinite;} */

            @keyframes bluetheme {0%{background: #00b4d8;}20%{background: #caf0f8;}40%{background: #00b4d8;}60%{background: #5e60ce;}80%{background: #7209b7;}90%{background: #00b4d8;}100%{background: #00b4d8;}}
            .pink_theme{background: #ffb5a7;}
            .pink_theme:hover{ animation: bluetheme 3s infinite;}
            /* .blue_theme{ animation: bluetheme 3s infinite;} */

            
        }
     
    
    `