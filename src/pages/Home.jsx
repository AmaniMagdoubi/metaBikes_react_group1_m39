import Home from '../components/6-home-about';
import {useState, useEffect} from 'react';
import SignupOrLogin from "../components/1-signup";
import DeleteUser from "../components/15-delete-user";
import UpdateUser from "../components/14-edit-user";
import ListUsers from "../components/12-list-users";


const HomePage = () => {
  const [user, setUser]= useState('')
  const [pics, setPics]= useState([]);
  const [display, setDisplay]= useState(false);
  const [allUsers, setUsers]= useState(['']);
  const [del, setDel]= useState();
  const [upd, setUpd]= useState();

  const fetchPics = async()=>{
    const res = await fetch('https://picsum.photos/v2/list');
    const pictures = await res.json();
    setPics(pictures);console.log(pictures);
  } 
  useEffect(()=>{fetchPics();console.log(pics);}, [user])
  return (
    
    <div>
      <Home></Home>
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      {user ? <div><h1>{user} logged in</h1>
      <ListUsers setter={setUsers} /> {allUsers.map((allUsers)=>(
        <ul>
          <h2>{allUsers}</h2>
        </ul>
      ))} 

      <DeleteUser setter={setDel}>User deleted: {del}</DeleteUser>
      <UpdateUser setter={setUpd}>User updated: {upd}</UpdateUser>
      <button onClick={(event)=>{setDisplay(!display)}}>images</button>
      {display && pics.map((item, index)=>{
        return (<div>
          <h3>{item.author}</h3>
          <img alt='pic' src={item.download_url}></img>
        </div>)
      })}</div>: <h1>not logged in</h1>}
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