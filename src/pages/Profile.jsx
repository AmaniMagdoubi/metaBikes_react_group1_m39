import DeleteUser from "../components/15-delete-user";
import UpdateUser from "../components/14-edit-user";
import ListUsers from "../components/12-list-users";
import LoginLogout from "../components/1-login-logout";
import {useState, useEffect} from 'react';
import Switch from "../components/17-switch";
import UserProfile from "../components/13-user-profile";

const Profile = ({user}) => {
  
  return (
    <div>
    
    <UserProfile user={user} ></UserProfile>
    </div>

  )
}

export default Profile;