import React from "react";  
import { Link } from "react-router-dom";
const ResetPassword = () => {
    return(
        <div>
            <h1>Reset Password</h1>
            <Link to='/login'>
            <button>Reset Password</button>
            </Link>
        </div>    
          
    )


}
export default  ResetPassword;
