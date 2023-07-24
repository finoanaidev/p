import React, { useState, useEffect } from 'react';
//import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
function VehiculeEdit() {
  const { id } = useParams();
  const [moteur, setMoteur] = useState('');
  const [marque, setMarque] = useState('');
  const [serie, setSerie] = useState('');
  const [carrosserie, setCarrosserie] = useState('');
  const [puissance, setPuissance] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [poids, setPoids] = useState('');
  const [usage, setUsage] = useState('');
  const [place, setPlace] = useState('');



  useEffect(() => {
    async function fetchData() {
      let result = await fetch(`http://localhost:8000/api/addVehicule/${id}/edit`, {
        method: 'GET'
      });

      result = await result.json();
      setMoteur(result.moteur);
      setMarque(result.marque);
      setSerie(result.serie);
      setCarrosserie(result.carrosserie);
      setPuissance(result.puissance);
      setSource(result.source);
      setDate(result.date);
      setPoids(result.poids);
      setUsage(result.usage);
      setPlace(result.place)
      alert("Donnée bien modifiée");
    }

    fetchData();
  }, [id]);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      moteur,
      marque,
      serie,
      carrosserie,
      puissance,
      source,
      date,
      poids,
      usage,
      place,
    };

    await fetch(`http://localhost:8000/api/addVehicule/${id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    // Gérer la réponse après la mise à jour

    // ...
  };

  return (
   
             <div className='container mt-3' style={{color:'black'}}>
                 <div className="row">
                     <div className="col-md-12">
                         <div className="card">
                             <div className="card-header" style={{backgroundColor:'#ADDCC8'}}>
                                 <h2>Edit vehicules</h2>
                                 {/* <Link to="/addVehicule" className='btn btn-danger float-end'>Back</Link> */}
                             </div>
                             <div className="card-body">
                                 <form onSubmit={handleSubmit}>

  <div className="row">
<div className="col-md-4">
                                 <div className="mb-3">
                                     <label>N° immatriculation ou N° moteur</label>
                                     <input type="text" className='form-control' value={moteur} onChange={(e) => setMoteur(e.target.value)} /> 
                                 </div>
                                 <div className="mb-3">
                                     <label>Marque et type</label>
                                     <input type="text" className='form-control' value={marque} onChange={(e) => setMarque(e.target.value)} /> 
                                 </div>
                                 <div className="mb-3">
                                     <label>N° de serie</label>
                                     <input type="text" className='form-control' value={serie} onChange={(e) => setSerie(e.target.value)} /> 
                                 </div>
                                 <div className="mb-3">
                                     <label>Carrosserie</label>
                                     <input type="text" className='form-control' value={carrosserie} onChange={(e) => setCarrosserie(e.target.value)} /> 
                                 </div>
                                 </div>
                                 <div className="col-md-4">
                                 <div className="mb-3">
                                     <label>Puissance fiscale</label>
                                     <input type="text" className='form-control' value={puissance} onChange={(e) => setPuissance(e.target.value)} /> 
                                 </div>
                                 <div className="mb-3">
                                     <label>Source d'energie</label>
                                      <input type="text" className='form-control' value={source} onChange={(e) => setSource(e.target.value)} />
                                 </div>
                                 <div className="mb-3">
                                     <label>Date de premiere mise en circulation</label>
                                      <input type="date" className='form-control' value={date} onChange={(e) => setDate(e.target.value)} /> 
                                 </div>
                                 </div>
                                 <div className="col-md-4">
                                 <div className="mb-3">
                                     <label>Poids total en charge</label>
                                     <input type="text" className='form-control' value={poids} onChange={(e) => setPoids(e.target.value)} /> 
                                 </div>
                                 <div className="mb-3">
                                     <label>Usage</label>
                                     <input type="text" className='form-control' value={usage} onChange={(e) => setUsage(e.target.value)} /> 
                                 </div>
                                 <div className="mb-3">
                                     <label>Nombre de place</label>
                                     <input type="text" className='form-control' value={place} onChange={(e) => setPlace(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <button type="submit" className='btn btn-primary'>Update Vehicule</button>
                                 </div>
                                 </div>
                                 </div>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>   
  )
}

export default VehiculeEdit;
