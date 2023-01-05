import React, { useState,useRef,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasword from "./ForgotPassword";
import Register from "./Register";

export const Login = (props) => {

    const  userRef=useRef();
    const errRef =useRef();
     


    const [user, setUser] =useState();
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [success, setSucess] = useState(); 

    useEffect(
        () => {
            if (userRef.current) {
                userRef.current.focus();
            }
        },
        []
    );

    useEffect(
        ()=>{
            setErrorMessage('');
        },[user,password]
    );

    const handleSummit= async(e)=>{
        e.preventDefault();
        console.log('Password-->'+password,'Username-->'+user);
        setPassword('');
        setUser('');
        setSucess(true);

    }


    // const handleSubmit = e => {     
    //     console.log(JSON.stringify(email, null, 2));
    //     e.preventDefault();
    // }
    // const navigate = useNavigate();

    return(
      <section>
        <p ref={errRef}  className={errorMessage ? "error Message" :"offScreen"}></p>
        <h1>Sign In</h1>
        <form onSubmit={handleSummit}>
            <label htmlFor="username">Username</label>
            <input type={"text"}
                id="username" 
                ref={userRef}
                autoComplete="off" 
                onChange={(e)=> setUser(e.target.value)}
                value={user} 
                required
            />
            <label htmlFor="password">Password</label>
            <input type={"password"}
                id="passsword" 
                autoComplete="off" 
                onChange={(e)=> setPassword(e.target.value)}
                value={password} 
                required
            />
            <button onClick={()=>{}}>Sign In</button>
            <p>
                Need an Account?
                <Link to={'/register'}>Sign Up</Link>
            </p>
        </form>
      </section>
    )       
}; 