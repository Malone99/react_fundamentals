import { Link } from "react-router-dom"


const Register= () => {

    const handleSubmit = e => {     
      
        e.preventDefault();
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label> Fisrt Name</label>
                <input type="text" id="firstName" name="firstName"/>
                <br/>
                <label>Surname</label>
                <input type="text" id="surname" name="surname"/>
                <br/>
                 <label>Date of Birth</label>
                 <input type="text" id="DOB" name="DOB"/>
                <br/>
                <label>Email</label>
                <input type="text" id="lastName" name="lastName"/>
                <label></label>
                <button type="onSubmit">Register</button>
           </form>
           <Link to='/login'>
                <button>Sign In</button>    
           </Link>
        </div>
    )
}

export default Register;