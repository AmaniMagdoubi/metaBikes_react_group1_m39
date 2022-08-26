import React from "react";
import { useState } from "react";
import Heart from "../assets/heart.png";
import Liked from "../assets/liked.png";
import { SocialWrapper } from "../styles/Social.styles";
import Plus from "../assets/Image-plus.png";
import Ques from "../assets/Image-ques.png";
import Book from "../assets/Image-bm.png";
import User from "../assets/Image-user.png";


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
  return (<SocialWrapper>
        <div><h2>{author}</h2></div>
        <div className="images_wrapper">
          
          <div><img className="images"src={imgURL} alt="post" /></div>
          <div onClick={likeHandler} className="like_wrapper">
            <img className="like-button resize" alt="heart" src={User} />
            <img className="like-button" alt="heart" src={like} />
            <img className="like-button" alt="heart" src={Plus} />
            <img className="like-button resize" alt="heart" src={Ques} />
            <img className="like-button resize" alt="heart" src={Book} />
            <h5>{liked}</h5>
          </div>
          </div>
      </SocialWrapper>
  );
};

export default InstaImg;
