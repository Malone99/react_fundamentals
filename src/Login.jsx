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

   

    const [username , setUsername ] =useState();
    const[validUsername, setValidUsername ]=useState(false);
    const [password, setPassword] = useState("");
    
    const [errorMessage, setErrorMessage] = useState();
    const [success, setSucess] = useState(); 

        const userRegex=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        const passwordRegex=/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
        const h1Color={color:'blue'}

    useEffect(
        () => {
            userRef.current.focus();
        },
        []
    );

    
    useEffect(
    ()=>{
        const isValid=userRegex.test(username);
        console.log("Valid username-->"+ isValid);

    },[username]
    );

    useEffect(
        ()=>{
            setErrorMessage('');
        },[username ,password]
    );

    const handleSummit= async(e)=>{
        e.preventDefault();
        console.log('Password-->'+password,'Username-->'+username );
        setPassword('');
        setUsername ('');
        setSucess(true);

    }

    return(
      <div className="form-Login">
        
         <p ref={errRef}  className={errorMessage ? "error Message" :"offScreen"}></p>
         <div className="login-subform">
            <form onSubmit={handleSummit}>
            <h1 style={h1Color}>Sign In</h1>
            <div>
                <div className="imgs">
                    <div className="container-img">
                       <img src={userIMG} alt="userIMG"></img>
                    </div>
                </div>
            </div>

                <div>
                <img src={email}  className="icon-email"></img>
                </div>
     <div>
        <div>
               
                <input className="input" 
                    type={"text"}
                    id="username" 
                    placeholder=" username"
                    ref={userRef}
                    autoComplete="off" 
                    onChange={(e)=> setUsername (e.target.value)}
                    value={username } 
                    required
                />
          </div>      
          <div>
              
                <input className="passwd"
                    type={"password"}
                    id="passsword" 
                    placeholder="Password"

                    autoComplete="off" 
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password} 
                    required
                />
            </div>
        </div> 
                <button className="btn-signin" onClick={()=>{}}>Sign In</button>
                <p>
                    Need an Account?
                    <Link to={'/register'}>Sign Up</Link>
                </p>
           
            </form>
            </div>
      </div>
    )       
}; 