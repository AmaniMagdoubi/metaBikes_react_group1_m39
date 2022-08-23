import {useState, useEffect} from 'react';
import ListUsers from "./12-list-users";
import DeleteUser from "./15-delete-user";
import UpdateUser from "./14-edit-user";

const UserProfile = ({user})=>{
    console.log(user);

    const [allUsers, setUsers]= useState(['']);
  const [del, setDel]= useState();
  const [upd, setUpd]= useState();
    return(
        <div >
      
      
      {user ? <div><h1>{user} logged in</h1>
      <ListUsers setter={setUsers} /> {allUsers.map((allUsers)=>(
        <ul>
          <h2>{allUsers}</h2>
        </ul>
      ))} 

      <DeleteUser setter={setDel}>User deleted: {del}</DeleteUser>
      <UpdateUser setter={setUpd}>User updated: {upd}</UpdateUser>
      
      </div>
      :
      <h1>not logged in</h1>}

      </div>
    )
}

export default UserProfile;