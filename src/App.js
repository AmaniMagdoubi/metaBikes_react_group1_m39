import React from "react";
import {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Social from "./pages/Social";
import Profile from "./pages/Profile";
import HomePage from "./pages/Home";
import Ebike from "./pages/Ebike";
import SignupOrLogin from "./components/1-signup";
import LocalInterests from "./components/8-local-interests";
import Footer from "./components/9-contact-footer";


import "./index.css";


const App = () => {
  const [user, setUser]= useState('')
  return (
    <div>
      <HomePage />
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      {/* {user ? <div><h1>{user} logged in</h1>
      <ListUsers setter={setUsers} /> {allUsers.map((allUsers)=>(
        <ul>
          <h2>{allUsers}</h2>
        </ul>
      ))}  */}
      
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      {user ? <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link><br></br>
          <Link to="/profile">Profile Details</Link><br></br>
          <Link to="/social">Social App</Link><br></br>
          <Link to="/ebike">E-Bike</Link><br></br>
        </nav>
        <h1>{user} logged in</h1>
        <Routes>
          <Route  path="*" element={<HomePage user={user}/>} />
          <Route path="/profile/*" element={<Profile user={user}/>} />
          <Route path="/ebike" element={<Ebike user={user}/>} />
          <Route path="/social" element={<Social user={user}/>} />
        </Routes>
      </BrowserRouter></div>
      : <h1>not logged in</h1>}

      <LocalInterests />
      <Footer />
    </div>
  )
};


export default App;

