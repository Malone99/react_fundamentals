import React,{useState, useRef,useEffect} from "react";
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";



const Register= () => {

    const handleSubmit = e => {     
      
        e.preventDefault();
        console.log(user);
    }
    const userRegex=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
    const pwdRegex=/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
    const userRef=useRef();
    const errRef=useRef();

    const [user, setUser]=useState();
    const[validName, setValidName]=useState(false);
    const [userFocus, setUserFocus]=useState(false);

    const [password, setPassword]=useState();
    const[validPassword, setValidPassword]=useState(false);
    const [focusPassword, setFocusPassword]=useState(false);

    const [matchPassword, setMatchPassword]=useState();
    const[validMatchPassword, setValidMatchPassword]=useState(false);
    const [focusMatchPassword, setFocusMatchPassword]=useState(false);

    const [errMsg, setErrMsg]=useState('');
    const [success,setSucess]=useState(false);

    const [startDate, setStartDate] = useState(new Date());
    
    useEffect(
        () => {
            console.log("D.O.B -->"+startDate);
            },[startDate]
    )

    // useEffect(
    //     () => {
    //         if (userRef.current) {
    //             userRef.current.focus();
    //         }
    //     },
    //     []
    // );
    useEffect(
        ()=>{
            const result =userRegex.test(user);
            console.log("test result==>"+result);
            console.log(user);
        },[user]
    )
    useEffect(
        ()=>{
            const result=pwdRegex.test(password);
            console.log(result);
            console.log(password);
            const match = password===matchPassword;
            setValidMatchPassword(match)
        },[password,matchPassword]
    );

    useEffect(
        ()=>{setErrMsg('')},[user, password,matchPassword]
    );

    return(
      
        <div>
            <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>

            <h1>Register</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="user"> Username</label>
                <input
                     type="text" 
                     id="firstName" 
                     autoComplete="off" 
                     value={user} 
                     onChange={(e)=>  setUser(e.target.value)} 
                     name="firstName"
                />
                <br/>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        autoComplete="off" 
                        name="surname"
                    />
                <br/>
                <label>Date of Birth</label>
                <input className="date" type="date" onChange={(e)=>setStartDate(e.target.value)}/>
                <br />
                <label>Email</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                />
                <label></label>
                <button type="onSubmit" onClick={()=>{}}>Register</button>
           </form>
           <Link to='/login'>
                <button>Sign In</button>    
           </Link>
        </div>
    )
}
export default Register;