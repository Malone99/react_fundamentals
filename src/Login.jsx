import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {     
        console.log(JSON.stringify(email, null, 2));
        e.preventDefault();
    }

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
           <Link to='/register'>
                <button>Register</button>
           </Link>
        </div>
    )
}; 