import React from "react";
import { useState } from "react";
import updateuser from "../utils/update";
import { Wrapper } from "../styles/11-user.profile.styles";
import DeleteUser from "./15-delete-user";
  
const UpdateUser = ({ setter, setDel, user }) => {
  const [username, setUsername] = useState();
  const [old_password, setPassword] = useState();
  const [new_username, setNewUsername] = useState();
  const [email, setNewEmail] = useState();
  const [password, setNewPassword] = useState();
  const submitHandler = async (event) => {
    event.preventDefault();
    await updateuser(
      username,
      old_password,
      new_username,
      email,
      password,
      setter
    );
  };
  return (<Wrapper>

    <form onSubmit={submitHandler}>
      <div><label>Enter Current Login Details to Update:</label></div>
      <div>
      <br></br>
      <input
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        maxLength="35"
        placeholder="Current Username"
      ></input>
      
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        minLength="5"
        placeholder="Current Password"
      ></input></div>

      <div><label>Please Enter Your New Account Details Here:</label></div>
      <br></br>
      <div>
      <input
        onChange={(event) => setNewUsername(event.target.value)}
        type="text"
        maxLength="35"
        placeholder="New Username"
      ></input>
      
      <input
        onChange={(event) => setNewEmail(event.target.value)}
        type="email"
        placeholder="Email"
      ></input>
      
      <input
        onChange={(event) => setNewPassword(event.target.value)}
        type="password"
        minLength="5"
        placeholder="New Password"
      ></input>
      </div>
      <br></br>
      <button type="submit">Update User</button>
    </form>

    <DeleteUser setter={setDel} user={user}></DeleteUser>
    
    </Wrapper>
  );
};

export default UpdateUser;
