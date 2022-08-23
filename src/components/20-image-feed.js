import React from 'react'
import {useState, useEffect} from 'react';
import Heart from '../assets/heart.png';
import Liked from '../assets/liked.png';
import "../index.css"
import Faker from './21-faker';
import InstaImg from './22-insta-image';
import CatCard from './22-insta-image';


const ImageFeed = ({user, pics}) => {
  const [myPics, setMyPics] = useState([]);
  const [display, setDisplay]= useState(false);


  const fetchPics = async ()=>{
    const res = await fetch("https://picsum.photos/v2/list");
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
    <div>
    {user ? <div>
    
    <button onClick={(event)=>{setDisplay(!display)}}>images</button>
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
    </div>
  )
}

export default ImageFeed;


// function ImageFeed(){
//   const [cat, setCat] = useState("");

//   const [error, setError] = useState('');
//   try{
//     const getCat = async () => {
//       let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
//       if (!res.ok){throw new Error(res.statusText);}
//       console.log(res);
//       let data = await res.json();
      
//       let urlCopies = data.map((item) => { return item.url });
//       fakerData = fakerData.map((cat, index) => {
//         cat.image = urlCopies[index];
//         cat.id = index;
//         return cat;
//       });
//       setCat(fakerData);
//     };
//       useEffect(() => { getCat(); }, []);
//     }catch (err){setError('Could not find picture');}

// if (!cat){return <p>loading</p>};
// return (
//     <div className="heightOfPage">
//         <div className='left-page'>
//         {cat.map((item, index) => {
//             return (
//             <CatCard cat={item} imgURL={item.image} key={index} />);
// })}</div>
        
//     </div>
// )
// }

// export default ImageFeed;