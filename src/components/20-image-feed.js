import React from 'react'
import {useState, useEffect} from 'react';
import "../index.css"
import InstaImg from './22-insta-image';
import { SocialWrapper } from "../styles/Social.styles";

const ImageFeed = ({user, pics}) => {
  const [myPics, setMyPics] = useState([]);
  const [display, setDisplay]= useState(false);


  const fetchPics = async ()=>{
    const res = await fetch("https://picsum.photos/v2/list?page=7");
    const data = await res.json();
    const pic2 = data.map(function(item, index){
      return {key:index,
      download_url : item.download_url,
      author : item.author,
      liked: 0};
  })
    console.log(pic2);
    setMyPics(pic2);
    console.log(data);
  }

  useEffect(()=>{fetchPics();},[])
  return (
    <SocialWrapper>
    {user ? <div className="feed_wrapper">
    
    <div><button onClick={(event)=>{setDisplay(!display)}}>Click For Your Feed</button></div> 
    {display && 
        myPics.map((item, index)=>{
          return(
            <div>
            <InstaImg author= {item.author} imgURL={item.download_url} key={index}/>            
            </div>
          )
        })          
    }</div> 
    :
   <h1>not logged in</h1>}
    </SocialWrapper>
  )
}

export default ImageFeed;

// className="top_btn"