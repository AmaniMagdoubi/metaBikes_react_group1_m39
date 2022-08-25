import React from "react";
import { useState } from "react";
import Heart from "../assets/heart.png";
import Liked from "../assets/liked.png";

const InstaImg = ({ author, imgURL, liked, index, user }) => {
  const [like, setLike] = useState(Heart);
  const notLikedPic = Heart;
  const likedPic = Liked;

  const likeHandler = (e) => {
    e.preventDefault(notLikedPic);
    if (like === Heart) {
      setLike(likedPic);
    }
    if (like === Liked) {
      setLike(notLikedPic);
    }
  };
  return (
    <div>
      <h2>{author}</h2>
      <img src={imgURL} alt="post" />
      <button onClick={likeHandler}>
        <img className="like-button" alt="heart" src={like} />
        <h5>{liked}</h5>
      </button>
    </div>
  );
};

export default InstaImg;
