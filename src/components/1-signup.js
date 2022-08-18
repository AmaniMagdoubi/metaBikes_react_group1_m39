import { useState } from "react";
import { login, signUp } from "../utils"; 
import { SignupWrapper } from "../styles/1-signup.styles";


const SignupOrLogin = ({setter})=>{
    const [username, setUsername] = useState();
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const submitHandler= async(event)=>{
        event.preventDefault();
        await signUp(username, email, password, setter);
    }

    const loginHandler= async(event)=>{
        event.preventDefault();
        await login(username, email, password, setter);
    }
    return(
        <SignupWrapper>
        <form onSubmit={submitHandler}>
            <label>Create account details:</label><br></br>
            <input onChange={(event)=>setUsername(event.target.value)} placeholder="Username"></input><br></br>
            <input onChange={(event)=>setEmail(event.target.value)} type='email' placeholder="Email"></input><br></br>
            <input onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input><br></br>
            <button type="submit">Submit</button>
            
        </form>

<form onSubmit={loginHandler}>
<label>LOGIN account details:</label><br></br>
<input onChange={(event)=>setUsername(event.target.value)} placeholder="Username"></input><br></br>
<input onChange={(event)=>setEmail(event.target.value)} type='email' placeholder="Email"></input><br></br>
<input onChange={(event)=>setPassword(event.target.value)} placeholder="Password"></input><br></br>
<button type="submit">Submit</button>

</form>
</SignupWrapper>
    );
}

export default SignupOrLogin;