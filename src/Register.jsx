import { Link } from "react-router-dom"


const Register= () => {

    const handleSubmit = e => {     
      
        e.preventDefault();
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <label> Full Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
            />
            <br/>
            <label>Email</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
            /><button type="onSubmit">Login</button>
           </form>
           <Link to='/login'>
                <button>login</button>
           </Link>
        </div>
    )
}

export default Register;