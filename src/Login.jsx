import React, { useState,useRef,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasword from "./ForgotPassword";
import Register from "./Register";
import "./Login.css";
import email from "./logo/email.png";
import userIMG from "./logo/user.png";



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
      <section className="form-Login">
        
         <p ref={errRef}  className={errorMessage ? "error Message" :"offScreen"}></p>
         <div className="login-subform">
            <form onSubmit={handleSummit}>
            <h1>Sign In</h1>
            <div>
                <div className="imgs">
                    <div className="container-img">
                       <img src={userIMG} alt="userIMG"></img>
                    </div>
                </div>
            </div>


     <div>
        <div>
               <img src={email}  className="userInput"></img>
                <input className="input" 
                    type={"text"}
                    id="username" 
                    placeholder="           username"
                    ref={userRef}
                    autoComplete="off" 
                    onChange={(e)=> setUser(e.target.value)}
                    value={user} 
                    required
                />
          </div>      
          <div>
              
                <input className="passwd"
                    type={"password"}
                    id="passsword" 
                    autoComplete="off" 
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password} 
                    required
                />
            </div>
        </div> 
                <button onClick={()=>{}}>Sign In</button>
                <p>
                    Need an Account?
                    <Link to={'/register'}>Sign Up</Link>
                </p>
           
            </form>
            </div>
      </section>
    )       
}; 