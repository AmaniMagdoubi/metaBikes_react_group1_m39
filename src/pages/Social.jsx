import React from "react";
import ImageFeed from "../components/20-image-feed";

const Social = ({ user }) => {
  console.log(user);
  return (
    <div className="test">
      <ImageFeed user={user}></ImageFeed>
    </div>
  );
};

export default Social;
