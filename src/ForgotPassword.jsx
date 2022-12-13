import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasword = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Forgot Password</h1>
            <Link to={'/reset-password'}>Reset Password</Link>
            <button onClick={() => navigate('/reset-password')}>this does the same thing</button>
        </div>
    )

}
export default ForgotPasword;