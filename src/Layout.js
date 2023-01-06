import React from "react";
import { useNavigate } from "react-router-dom";

function Layout(){
    let navigate=useNavigate();
    function backToLoginPage(){
        navigate("/Login",true);
    }
    return(
<>
            <h2>This is Layout component by Default.</h2>
            <button onClick={backToLoginPage}>Go To 
            Login Page</button>

</>

    )
}

export default Layout;