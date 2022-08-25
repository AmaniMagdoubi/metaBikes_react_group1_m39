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

            @keyframes greentheme {0%{background: #1e5c45;}20%{background: #081c15;}40%{background: #32cd33;}60%{background: #1e5c45;}80%{background: #69be28;}90%{background: #1e5c45;}100%{background: #1e5c45;}}
            .green_theme{background: #32cd33;}
            .green_theme:hover{ animation: greentheme 3s infinite;}

            @keyframes redtheme {0%{background: #d00000;}20%{background: #c9184a;}40%{background: #b1a7a6;}60%{background: #bf0603;}80%{background: #bc3908;}90%{background: #d00000;}100%{background: #d00000;}}
            .red_theme{background: #d00000;}
            .red_theme:hover{ animation: redtheme 3s infinite;}

            @keyframes greytheme {0%{background: #dcdcdd;}20%{background: #f5f3f4;}40%{background: #6c757d;}60%{background: #343a40;}80%{background: #000000;}90%{background: #dcdcdd;}100%{background: #dcdcdd;}}
            .grey_theme{background: #6c757d;}
            .grey_theme:hover{ animation: greytheme 3s infinite;}

            @keyframes yellowtheme {0%{background: #f4e409;}20%{background: #b69121;}40%{background: #c36f09;}60%{background: #fdd85d;}80%{background: #fcefb4;}90%{background: #f4e409;}100%{background: #f4e409;}}
            .yellow_theme{background: #f4e409;}
            .yellow_theme:hover{ animation: yellowtheme 3s infinite;}

            
        }
     
    
    `