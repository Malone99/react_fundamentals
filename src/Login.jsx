import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasword from "./ForgotPassword";

export const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {     
        console.log(JSON.stringify(email, null, 2));
        e.preventDefault();
    }
    const navigate = useNavigate();

    return(
        <div>

           <form className="form" onSubmit={handleSubmit}>
            <label> Email</label>
            <input
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                id="email"
                placeholder="yourname@gmail.com"
                name="email"
            />
            <br/>
            <label>Password</label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" placeholder="Password" name="password"></input>
            <button type="onSubmit">Login</button>
           </form>
           <Link to={'/forgot-password'}><p>Forgot password</p></Link> 
           <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}; 