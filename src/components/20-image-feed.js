import React from "react";
import { useState, useEffect } from "react";
import Heart from "../assets/heart.png";
import Liked from "../assets/liked.png";
import "../index.css";
import Faker from "./21-faker";
import CatCard from "./22-insta-image";

const ImageFeed = ({user}) => {
  const [pics, setPics]= useState([]);
  const [display, setDisplay]= useState(false);
  const [like, setLike]=useState(Heart);
  const notLikedPic = Heart;
  const likedPic = Liked;

    const likeHandler =(e)=>{
        e.preventDefault(notLikedPic);
        if(like == Heart){setLike(likedPic)};
        if(like == Liked){setLike(notLikedPic)};

    }

  const fetchPics = async()=>{
    const res = await fetch('https://picsum.photos/v2/list');
    const pictures = await res.json();
    setPics(pictures);
  }
  useEffect(()=>{fetchPics();console.log(pics);}, [user])
  return (
    <div>
    {user ? <div>

    <button onClick={(event)=>{setDisplay(!display)}}>images</button>
    {display && pics.map((item, index)=>{
      return (<div>
        <div className='image-box'>
        <h3>{item.author}</h3>
        <img alt='pic' src={item.download_url}></img>
        <button onClick={likeHandler}>
            <img className='like-button' alt='heart' src={like}/>
        </button>

        </div>
      </div>)
    })}</div>
    :
    <h1>not logged in</h1>}
    </div>
  )
}

// export default ImageFeed;
// function ImageFeed() {
//   const [cat, setCat] = useState("");

//   const [error, setError] = useState("");
//   try {
//     const getCat = async () => {
//       let res = await fetch(
//         "https://api.thecatapi.com/v1/images/search?limit=20"
//       );
//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }
//       console.log(res);
//       let data = await res.json();
//       let fakerData = Faker();
//       let urlCopies = data.map((item) => {
//         return item.url;
//       });
//       fakerData = fakerData.map((cat, index) => {
//         cat.image = urlCopies[index];
//         cat.id = index;
//         return cat;
//       });
//       setCat(fakerData);
//     };
//     useEffect(() => {
//       getCat();
//     }, []);
//   } catch (err) {
//     setError("Could not find picture");
//   }

//   if (!cat) {
//     return <p>loading</p>;
//   }
//   return (
//     <div className="heightOfPage">
//       <div className="left-page">
//         {cat.map((item, index) => {
//           return <CatCard cat={item} imgURL={item.image} key={index} />;
//         })}
//       </div>
//     </div>
//   );
// }

export default ImageFeed;
