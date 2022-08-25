import React from "react";
import deleteuser from "../utils/delete";

const DeleteUser = ({ setter, user }) => {
  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const submitHandler = async (event) => {
    event.preventDefault();
    await deleteuser(setter, user);
  };
  return (
    <div>
      
      <button onClick={submitHandler} type="submit">Delete Account</button>
    </div>
  );
};

export default DeleteUser;
