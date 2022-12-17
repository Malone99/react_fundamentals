import React from "react";
import { Link, useNavigate } from "react-router-dom";



const ForgotPasword = () => {

   const navigate = useNavigate();

    return (
        <div>
            <h1>Forgot Password</h1>
            <button onClick={() => navigate('/reset-password')}>Continue</button>
            <button onClick={() => navigate('/login')}>back</button>
        </div>
    )

}
export default ForgotPasword;

