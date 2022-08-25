import { useState } from "react";
import { updateuser } from "../utils";
  
const UpdateUser = ({ setter }) => {
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
  return (
    <form onSubmit={submitHandler}>
      <label>Curent Login Details:</label>
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
      ></input>
      <br></br><br></br>

      <label>Please enter new account details:</label>
      <br></br>
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
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateUser;
