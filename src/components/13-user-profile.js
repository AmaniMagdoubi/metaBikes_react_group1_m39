import { useState, useEffect } from "react";
import ListUsers from "./12-list-users";
import DeleteUser from "./15-delete-user";
import UpdateUser from "./14-edit-user";
import { UserProfileWrapper } from "../styles/11-user.profile.styles";

const UserProfile = ({setter, user }) => {
  const [allUsers, setUsers] = useState([""]);
  const [del, setDel] = useState();
  const [upd, setUpd] = useState();
 
  return (
    <UserProfileWrapper>
      {user ? (
        <div>
          <h1>{user} logged in</h1>
          
          <DeleteUser setter={setDel} user={user}></DeleteUser>
          <UpdateUser setter={setUpd}></UpdateUser><br></br><br></br>
          <ListUsers setter={setUsers} />{" "}
          {allUsers.map((allUsers) => (
            <ul>
              <h2>{allUsers}</h2>
            </ul>
          ))}
        </div>
      ) : (
        <p style={{textAlign: "center", fontSize: "50px"}}>No User !<br></br> Login To View</p>
      )}
    </UserProfileWrapper>
  );
};

export default UserProfile;