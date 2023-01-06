import { useNavigate } from "react-router-dom";

import React from "react";

function InvalidAccess(){
  let navigate=useNavigate();
  
  function backToLoginPage(){
      navigate("/Login",true);
  }
    return(
<>
  <form>
 

    <h3>ChatApp</h3>
    <h2>Invalid credentials, please enter correct email id and password</h2>
    <button onClick={backToLoginPage}> Back To Log In Page</button>

  </form>
</>
    )
    
}

export default InvalidAccess;