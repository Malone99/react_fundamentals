import React from "react";
import { Link } from "react-router-dom";

const ForgotPasword=()=>{

    function handleChange (){
       <Link to={'/reset-password'}></Link>
    }

    return(
        <div>
            <h1>Forgot Password</h1>
             <button onClick={()=> handleChange()}>Reset Password</button>
        </div>
    )

}
export default ForgotPasword;