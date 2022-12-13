import React from "react";
import { Link } from "react-router-dom";

const ForgotPasword = () => {

    function handleChange() {
    }

    return (
        <div>
            <h1>Forgot Password</h1>
            <Link to={'/reset-password'}>Reset Password</Link>
        </div>
    )

}
export default ForgotPasword;