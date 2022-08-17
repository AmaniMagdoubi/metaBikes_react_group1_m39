import Home from '../components/6-home-about';
import {useState, useEffect} from 'react';

import DeleteUser from "../components/15-delete-user";
import UpdateUser from "../components/14-edit-user";
import ListUsers from "../components/12-list-users";


const HomePage = ({user}) => {


  const [allUsers, setUsers]= useState(['']);
  const [del, setDel]= useState();
  const [upd, setUpd]= useState();


  return (
    
    <div >
      
      
      {user ? <div><h1>{user} logged in</h1>
      <ListUsers setter={setUsers} /> {allUsers.map((allUsers)=>(
        <ul>
          <h2>{allUsers}</h2>
        </ul>
      ))} 

      <DeleteUser setter={setDel}>User deleted: {del}</DeleteUser>
      <UpdateUser setter={setUpd}>User updated: {upd}</UpdateUser>
      
      </div>: <h1>not logged in</h1>}
      <h1>Test heading 1</h1>
      <h2>Test heading 2</h2>
      <h3>Test heading 3</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button>Test button</button>
      <a href="#">Test link</a>

    </div>
    
  )
};

export default HomePage;