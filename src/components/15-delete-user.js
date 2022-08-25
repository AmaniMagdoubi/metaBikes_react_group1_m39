import React from "react";
import deleteuser from "../utils/delete";
import {Wrapper} from "../styles/11-user.profile.styles";

const DeleteUser = ({ setter, user }) => {
  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const submitHandler = async (event) => {
    event.preventDefault();
    await deleteuser(setter, user);
  };
  return (<Wrapper>
    <div>
      
      <button onClick={submitHandler} type="submit">Delete Account</button>
    </div></Wrapper>
  );
};

export default DeleteUser;
