import styled from "styled-components";

export const UserProfileWrapper = styled.div`

    height: 100%;
    width: 100%;
    padding-top: 10em;
    margin-top: 0px;
    display:flex;
    align-items: center;
    p{margin: auto;}

        

.profile_wrapper{

        width: 95%;
        height: 100%;
        margin: auto;
        padding: 15px;
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
            

        }

    input {
        background-color: white;
        padding: 15px;
        width: 25%;
        border: 3px black solid;
        color: black;
    }

    input:hover {
        background-color: #E3E3E3;
        border: 3px orange solid;
    }
`






export const ListWrapper = styled.div`

background: var(--clr-accent);
border: dotted var(--clr-text-light) 4px;

display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-bottom: 5em;
animation: fadeIn 2s;

.list_wrapper{

    height: auto;
    width: auto;
    margin: 2em;

}


`
export const Wrapper = styled.div`

    padding: 10px;

    button{
        margin: 5px;
    }

    input{margin: 0px 20px 20px;}


`

