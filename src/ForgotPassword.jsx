import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasword = () => {

   const navigate = useNavigate();

    return (
        <div>
            <h1>Forgot Password</h1>
            <label>Username or Email</label><br/>       
            <input type={"text"}></input>
            <button onClick={() => navigate('/reset-password')}>Continue</button>
            <button onMouseDown={() => navigate('/login')}>back</button>
        </div>
    )
}
export default ForgotPasword;   