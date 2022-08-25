import React from "react";
import UserProfile from "../components/13-user-profile";
import Footer from "../components/9-contact-footer";

const Profile = ({ user }) => {
  return (
    <div >
      <UserProfile user={user}></UserProfile>
      <Footer />
    </div>
  )
};

export default Profile;
