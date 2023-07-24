import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import adema from './adema.png'
function Register()
{
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const sendSubmit = () => {
      navigate('/accueil');
    };

    if (localStorage.getItem('user-info')) {
      sendSubmit();
    }
  }, [navigate]);

  async function signUp() {
    let item = { name, email, password,passwordconfirm };
    console.warn(item);

    setIsLoading(true);

    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));

    setIsLoading(false);
    sendSubmit();
  }

  const sendSubmit = () => {
    navigate("/accueil");
  };
  
    return (
       
            <div className="wrapper">
            <div className="logo">
              <img src={adema} alt="" />
            </div> <br />
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user" style={{color:'black'}}></span>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Nom" />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-envelope" style={{color:'black'}}></span>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
              </div>
               <div className="form-field d-flex align-items-center">
                <span className="fas fa-lock"></span>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Mot de passe" />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" value={passwordconfirm} onChange={(e)=>setPasswordconfirm(e.target.value)} className="form-control" placeholder="Confirmer mot de passe" />
              </div> 
              <button onClick={signUp} className="btn btn-primary"> {isLoading ? 'Loading...' : 'S\'inscrire'}</button>   
               
   </div>
    )
}
export default Register