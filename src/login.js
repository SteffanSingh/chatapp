import  { useRef, useState } from "react";
import loginDetails from "./LoginDetails.json"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InvalidAccess  from "./InvalidAccess";


function Login(props)
{
  let inputRef=useRef(null);

   let navigate=useNavigate();
console.log(navigate);

let pathLocation=useLocation();
console.log(pathLocation);
  
const [formData,setFormData]=useState({
    email:"",
    password:""
})

const {email,password}=formData;

function handleChange(e){
e.preventDefault();
const {name,value}=e.target;
setFormData({...formData,[name]:value});
console.log(formData)
}

function handleSubmit(e){
e.preventDefault();
console.log(e)
if(e.target[0].value===email && loginDetails.password===password){
     //test(true);
   
     navigate("/Home" , true)
}
 else{
   navigate("/InvalidAccess",true)
 }
}


    return(

        <>
         <h3>Www.AshutoshCKapoor.Com</h3>
       <form  onSubmit={handleSubmit} className="form-section">

        <h1>ChatApp</h1>

        <h2>Enter LogIn Details</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" name='email' id='email' onChange={handleChange} value={email} ref={inputRef}   />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} value={password} />
        </div>

          <button type='submit' id='btn' >Log In</button>

        <h3>New User? Register here<a href="#top"> Sign Up. </a></h3>
       </form>


        </>

    )
    console.log(inputRef);
}

export default Login;