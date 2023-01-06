 
import './App.css';
 
import Login from './login';
import { useState } from 'react';
import Home from "./Home"
import InvalidAccess from './InvalidAccess';
import {Routes,Route} from "react-router-dom";
import Layout from './Layout';
import NotFound from './NotFound';

function App() {

//const [loginState,setloginState]=useState(false)

//{ ! loginState && <Login test={setloginState}/>}
//{ loginState && <Home/>}

  return (
    <div className="App">
      


<Routes>
          <Route path="/" element={<Layout/>} />
          
          <Route path="/Home" element={<Home/>} />
          
          <Route path="/InvalidAccess" element={<InvalidAccess/>} />
          
          <Route path="/login" element={<Login/>} />

          <Route path="/*" element={<NotFound/>} />


          

     </Routes>

     </div>
  );
}

export default App;
