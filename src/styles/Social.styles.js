import styled from "styled-components";

export const SocialWrapper = styled.div`

  height: 100%;
  margin-top: 3em;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: fadeIn 2s;


  .feed_position{
    width: 95%;
    height: auto;
    margin: auto;
    padding: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 25px;
  
  }

  .feed_wrapper{

    background: var(--clr-accent);
    padding: 50px;
    border-radius: 25px;

  }

  .images_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    border: solid var(--clr-text-dark) 2px;
    height: auto;
    max-width: 40em;
    padding: 15px 0px 15px 15px;
    @media (max-width: 807px) {
        display: flex;
        flex-direction: column;
        padding: 15px 15px 0px;
        }
    
    .like_wrapper{display: flex; flex-direction: column; align-items: center;
      @media (max-width: 807px) {
        flex-direction: row;
        }
    
    }

    .like-button{margin-top: 20px; width: 45px; height: 45px; cursor: pointer; padding: 5px;}
    .resize{ width: 65px; height: 65px}
    .images{
      margin: auto;
      max-width: 100%;
      height: auto;
      border-radius: 18px;
    }
  }

`

