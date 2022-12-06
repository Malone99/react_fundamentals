import React, { useState } from "react";

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
           <button onClick={() => window.location.href = 'register'}>Register here</button>
        </div>
    )
}; 