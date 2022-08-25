import React from "react";
import findusers from "../utils/find";
import {Wrapper} from "../styles/11-user.profile.styles";

const ListUsers = ({ setter }) => {
  const clickHandler = async (event) => {
    await findusers(setter);
  };
  return (<Wrapper>
    <div className="btnlist_wrapper">
      <button onClick={clickHandler}>Click for Total Users</button>
    </div></Wrapper>
  );
};

export default ListUsers;
