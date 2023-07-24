import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Client() {

    const [loading, setLoading] = useState(true);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        moviesRequest();
    }, []);

    const moviesRequest= async()=>{
         await axios.get(`${process.env.REACT_APP_BACKEND_URL}clients`).then(
             (res)=>{
                
                setClients(res.data.clients);
                setLoading(false)
                // console.log(clients)
             }
         )
    }

  const MoviesRender = ()=> {
    return loading ? (<div>Chargement....</div>): (
      <div>
        {clients.map(({id, titre,description})=>{
           return (
           <div key={id}>
             <h4>{titre}</h4>
             <p>{description}</p>
           </div>
           );
        }) }
      </div>
    )
  }

  return (
    <div>
    <div className='header'> Client {clients.length}</div>
     <div>{MoviesRender()}</div>
    </div>
  );
  
}

