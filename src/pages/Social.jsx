import React from 'react'
import {useState, useEffect} from 'react';

const Social = ({user}) => {
  const [pics, setPics]= useState([]);
  const [display, setDisplay]= useState(false);


  const fetchPics = async()=>{
    const res = await fetch('https://picsum.photos/v2/list');
    const pictures = await res.json();
    setPics(pictures);console.log(pictures);
  } 
  useEffect(()=>{fetchPics();console.log(pics);}, [user])
  return (
    <div>
    {user ? <div>
    
    <button onClick={(event)=>{setDisplay(!display)}}>images</button>
    {display && pics.map((item, index)=>{
      return (<div>
        <h3>{item.author}</h3>
        <img alt='pic' src={item.download_url}></img>
      </div>)
    })}</div> : <h1>not logged in</h1>}
    </div>
  )
}

export default Social;

