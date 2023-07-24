import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

//import adema from './image/adema.png'
import adema from './adema.png';

//import {Link} from 'react-router-dom'
import './Login.css'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(() => {
      const sendSubmit = () => {
        navigate('/accueil');
      };
  
      if (localStorage.getItem('user-info')) {
        sendSubmit();
      }
    }, [navigate]);
    async function login()
    {
        let item=(email,password);
        console.warn(email,password);
        let result= await fetch("http://localhost:8000/api/login", {
            method:'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        sendSubmit();
    }
    const sendSubmit = () => {
        navigate("/accueil");
      };
    return (
           <div className="wrapper">
         <div className="logo">
           <img src={adema} alt="" />
         </div> <br /> <br />
           <div className="form-field d-flex align-items-center">
             <span className="far fa-user" style={{color:'black'}}></span>
             <input type="email" id="useEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
           </div>
            <div className="form-field d-flex align-items-center">
             <span className="fas fa-key"></span>
             <input type="password" id="pwd" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
           </div> <br />
            <button className="btn btn-primary  btn-block" onClick={login} type="submit">Se connecter</button> <br /> <br/>    
            <div className=" d-flex justify-content-center text-center mt-4 pt-1">
      <Link to="#!"><FontAwesomeIcon icon={faFacebookF} size="lg" /></Link>
      <Link to="#!"><FontAwesomeIcon icon={faTwitter} size="lg" className="mx-4 px-2" /></Link>
      <Link to="#!"><FontAwesomeIcon icon={faGoogle} size="lg" /></Link>
    </div>   
</div>

    )
}
export default Login


 // <div className="col-sm-6 offset-sm-3">
        //     <h3 className="text-center text-danger">Login Page</h3>
        //      <br />
        //     <input type="email" onChange={(e)=>setEmail(e.target.value)}
        //      className="form-control" placeholder="email" />
        //     <br />
        //     <input type="password" onChange={(e)=>setPassword(e.target.value)}
        //      className="form-control" placeholder="password" />
        //     <br />
        //     <button onClick={login} className="btn btn-primary">Login</button>
        // </div>