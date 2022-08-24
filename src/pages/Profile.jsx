import DeleteUser from "../components/15-delete-user";
import UpdateUser from "../components/14-edit-user";
import ListUsers from "../components/12-list-users";
import LoginLogout from "../components/1-login-logout";
import { useState, useEffect } from "react";

import UserProfile from "../components/13-user-profile";
import Footer from "../components/9-contact-footer";
import UserNav from "../components/3-user-nav";

const Profile = ({ user }) => {
  return (
    <div>
      <UserProfile user={user}></UserProfile>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
