import React from "react";
import { useState } from "react";
import ListUsers from "./12-list-users";
import UpdateUser from "./14-edit-user";
import { UserProfileWrapper, ListWrapper } from "../styles/11-user.profile.styles";

const UserProfile = ({setter, user }) => {
  const [allUsers, setUsers] = useState([""]);
  // eslint-disable-next-line
  const [del, setDel] = useState();
  // eslint-disable-next-line
  const [upd, setUpd] = useState();
 
  return (
    <UserProfileWrapper>
      {user ? (
        <div className="profile_wrapper">
          <h1>{user} logged in</h1>
          <UpdateUser setDel={setDel} user={user} setter={setUpd}></UpdateUser>
          <ListUsers setter={setUsers} />{" "}
          <ListWrapper>{allUsers.map((allUsers) => (
            <ul className="list_wrapper">
              <p>{allUsers}</p>
            </ul>
          ))}
          </ListWrapper>
        </div>
      ) : (
        <p style={{textAlign: "center", fontSize: "50px"}}>No User !<br></br> Login To View</p>
      )}
    </UserProfileWrapper>
  );
};

export default UserProfile;
