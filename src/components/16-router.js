import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Social from "../pages/Social";
import Profile from "../pages/Profile";
import HomePage from "../pages/Home";
import Ebike from "../pages/Ebike";
import App from "../App";
// import { GlobalWrapper, LeftSpace, RightMainWrapper } from "../styles/global.styles";

const Router = ({user}) =>{

return(
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link><br></br>
          <Link to="/profile">Profile Details</Link><br></br>
          <Link to="/social">Social App</Link><br></br>
          <Link to="/ebike">E-Bike</Link><br></br>
        </nav>
        <h1>{user} logged in</h1>
        <Routes>
          <Route  path="*" element={<HomePage user={user} />} />
          <Route path="/profile/*" element={<Profile user={user}/>} />
          <Route path="/ebike" element={<Ebike user={user}/>} />
          <Route path="/social" element={<Social user={user}/>} />
        </Routes>
      </BrowserRouter>
      // </RightMainWrapper>
      // </GlobalWrapper>
    )}


export default Router;
