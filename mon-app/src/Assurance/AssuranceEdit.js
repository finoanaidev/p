
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
function AssuranceEdit() {
    const { id } = useParams();
    const [effet, setEffet] = useState('');
    const [expirele, setExpirele] = useState('');
    const [objetassure, setObjetassure] = useState('');
    const [fractionnement, setFractionnement] = useState('');
    const [police, setPolice] = useState('');
    const [matricule, setMatricule] = useState('');



  useEffect(() => {
    async function fetchData() {
      let result = await fetch(`http://localhost:8000/api/addAssurance/${id}/editassurance`, {
        method: 'GET'
      });

      result = await result.json();
      setEffet(result.effet);
      setExpirele(result.expirele);
      setObjetassure(result.objetassure);
      setFractionnement(result.fractionnement);
      setPolice(result.police);
      setMatricule(result.matricule);
      alert("Donnée bien modifiée");
    }

    fetchData();
  }, [id]);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      effet,
      expirele,
      objetassure,
      fractionnement,
      police,
      matricule,
    };

    await fetch(`http://localhost:8000/api/addAssurance/${id}/editassurance`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

  
  };

  return (
   
             <div className='container mt-5'>
                 <div className="row">
                     <div className="col-md-12">
                         <div className="card">
                             <div className="card-header">
                                 <h2>Edit Assurance</h2>
                                 <Link to="/addVehicule" className='btn btn-danger float-end'>Back</Link>
                             </div>
                             <div className="card-body">
                                 <form onSubmit={handleSubmit}>
                                 <div className="mb-3">
                                     <label>effet</label>
                                     <input type="text" className='form-control' value={effet} onChange={(e) => setEffet(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <label>expirele</label>
                                     <input type="text" className='form-control' value={expirele} onChange={(e) => setExpirele(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <label>objetassure</label>
                                     <input type="text" className='form-control' value={objetassure} onChange={(e) => setObjetassure(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <label>fractionnement</label>
                                     <input type="text" className='form-control' value={fractionnement} onChange={(e) => setFractionnement(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <label>police</label>
                                     <input type="text" className='form-control' value={police} onChange={(e) => setPolice(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <label>matricule</label>
                                      <input type="text" className='form-control' value={matricule} onChange={(e) => setMatricule(e.target.value)} /> <br />
                                 </div>
                                 <div className="mb-3">
                                     <button type="submit" className='btn btn-primary'>Update Assurance</button>
                                 </div>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>    
  );
}
export default AssuranceEdit;
