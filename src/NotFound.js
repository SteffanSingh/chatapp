import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){

    let navigate=useNavigate();

 
  
    function backToLoginPage(){
        navigate("/Login",true);
    }
    return(
        <>
        <h2>The page you are looking for , does not exist.</h2>
        <button id="btn" onClick={backToLoginPage}>Go Back To login</button>
        </>


    )
}

export default NotFound;