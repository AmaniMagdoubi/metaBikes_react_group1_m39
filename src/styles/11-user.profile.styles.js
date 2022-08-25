import styled from "styled-components";

export const UserProfileWrapper = styled.div`

    height: 100vh;
    width: 100%;
    margin-top: 0px;
    display:flex;
    align-items: center;
    p{margin: auto;}

        

.profile_wrapper{

        width: 95%;
        height: auto;
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

.list_wrapper{

    height: auto;
    width: auto;
    margin: 2em;

}


`
export const Wrapper = styled.div`

    
    button{
        margin: 20px;
    }


`

