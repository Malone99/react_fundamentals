import React from "react";  
import { Link,useNavigate } from "react-router-dom";
const ResetPassword = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Reset Password</h1>
            <input type={'text'}></input>
            <button onClick={()=>navigate('/login')}>Reset Password</button>
            <div>
                <Link to={'/login'}>Sign in</Link>
            </div>
        </div>      
    )
}
export default  ResetPassword;
