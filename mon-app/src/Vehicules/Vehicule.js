import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import Loading from './Loading'
function Vehicule() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  async function searchVehicule(key)
    {
         console.warn(key);

         let result= await fetch(`http://localhost:8000/api/searchVehicule/${key}`);
        result=await result.json();
        console.warn(result)
        setData(result)
    }

  async function deleteVehicule(id) {
    let result = await fetch(`http://localhost:8000/api/addVehicule/${id}/delete`, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);
    getData();
    setLoading(false);
  }

  async function getData() {
    let result = await fetch('http://localhost:8000/api/addVehicule');
    result = await result.json();
    setData(result);
    setLoading(false);
  }

  return (
    <>
      <h2 className="text-center">Vehicule</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', width: '7cm', background: '#ADDCC8', padding: '5px' }}>
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
          <input
            type="text"
            onChange={(e)=>searchVehicule(e.target.value)}
            className="form-control"
            style={{ border: 'none', outline: 'none', width: '100%' }}
            placeholder="Recherche"
          />
        </div>
      </div>
      <br />
      
      <div className="table-responsive-lg">
      {loading ? (
        <div> <Loading /> </div>
      ) : (
        <div  className="table-responsive-sm">
        <div className="mx-auto" style={{ maxWidth: '97%',fontSize: '13px' }}>
        <table className="table table-bordered">
          <thead style={{ backgroundColor:'#ADDCC8' }}>
            <tr>
              <th>Id</th>
              <th>N° Immatriculation ou N° moteur</th>
              <th>Marque et type</th>
              <th>N° de serie</th>
              <th>Carrosserie</th>
              <th>Puissance fiscale</th>
              <th>Source d'energie</th>
              <th>Date de premiere mise en circulation</th>
              <th>Poids total en charge</th>
              <th>Usage</th>
              <th>Nombre de place</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:'white'}}>
            {Array.isArray(data) && data.map((item) => (
               <tr key={item.id}>
                             <td>{item.id}</td>
                               <td>{item.moteur}</td>
                               <td>{item.marque}</td>
                               <td>{item.serie}</td>
                               <td>{item.carrosserie}</td>
                               <td>{item.puissance}</td>
                               <td>{item.source}</td>
                               <td>{item.date}</td>
                               <td>{item.poids}</td>
                               <td>{item.usage}</td>
                               <td>{item.place}</td>
                               <td>
                               <div className="d-flex justify-content-between">
                                   <Link to={`/addVehicule/${item.id}/edit`} className='btn btn-info' style={{ backgroundColor: '#41C9BF' }}>
                                   <FontAwesomeIcon icon={faEdit} />
                                   </Link>
                                   <button type='button' onClick={() =>deleteVehicule(item.id)} className='btn btn-primary' style={{ backgroundColor: '#79BDFO' }}>
                                   <FontAwesomeIcon icon={faTrash} />
                                   </button>
                                   </div>
                               </td>
                               
                               </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
         )}
      </div>
    </>
  );
}

export default Vehicule;



