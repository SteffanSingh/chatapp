import { useNavigate } from "react-router-dom";

 

function Home(){

    let navigate=useNavigate();
   

    
 function reloadLogin(){
    navigate("/Login",true);
 }
       
    
    return(
        <>
         <h3>Www.AshutoshCKapoor.Com</h3>

         <h2>TO DO APP</h2>
        <h4>Login successful and Welcome</h4>
        <div>
        <label>1. Task 1</label>
        <input type="text" placeholder="completed task"/>
        <button type="radio" > yes</button>
        <button type="radio" > No</button>
        </div>
        <div>
        <label>2. Task 2</label>
        <input type="text" placeholder="completed task"/>
        <button type="radio" > yes</button>
        <button type="radio" > No</button>
        </div>

        <button onClick={reloadLogin} >Log Out</button>
        </>
    )
}

export default Home;
