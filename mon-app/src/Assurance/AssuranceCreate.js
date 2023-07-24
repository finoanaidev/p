
import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
function AssuranceCreate() {
    const [effet, setEffet] = useState('');
    const [expirele, setExpirele] = useState('');
    const [objetassure, setObjetassure] = useState('');
    const [fractionnement, setFractionnement] = useState('');
    const [police, setPolice] = useState('');
    const [matricule, setMatricule] = useState('');
  async function addAssurance()
  {
    console.warn(effet,expirele,objetassure,fractionnement,police,matricule)
    const formData= new FormData();
    formData.append('effet',effet);
    formData.append('expirele',expirele);
    formData.append('objetassure',objetassure);
    formData.append('fractionnement',fractionnement);
    formData.append('police',police);
    formData.append('matricule',matricule);
    let result=await fetch("http://localhost:8000/api/addAssurance", {
       method: 'POST',
       body: formData,
       
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    alert("Donnée bien enregistré")
  }
  return (
     <div>
     <div className='container mt-5' style={{color:'black'}}>
         <div className="row">
             <div className="col-md-12">
                 <div className="card">
                     <div className="card-header">
                         <h2>Assurance</h2>
                         <Link to="/addAssurance" className='btn btn-danger float-end'>Back</Link>
                     </div>
                     <div className="card-body">
                         <form>

<div className="row">
<div className="col-md-6">
                         <div className="mb-3">
                             <label>Effet</label>
                             <input type="date" className="form-control"
                              onChange={(e)=>setEffet(e.target.value)}  />
                         </div>
                         <div className="mb-3">
                             <label>Expirele</label>
                             <input type="date" className="form-control"
                              onChange={(e)=>setExpirele(e.target.value)} />
                         </div>
                         <div className="mb-3">
                             <label>ObjetAssure</label>
                             <input type="text" className="form-control"
                              onChange={(e)=>setObjetassure(e.target.value)} placeholder="description" />
                         </div>

                         </div>
<div className="col-md-6">
                         <div className="mb-3">
                             <label>Fractionnement</label>
                             <input type="text" className="form-control"
                              onChange={(e)=>setFractionnement(e.target.value)} placeholder="Duree" />
                         </div>
                         <div className="mb-3">
                             <label>Police</label>
                             <input type="text" className="form-control"
                              onChange={(e)=>setPolice(e.target.value)} placeholder="Police" />
                         </div>
                         <div className="mb-3">
                             <label>Matricule</label>
                             <input type="text" className="form-control"
                              onChange={(e)=>setMatricule(e.target.value)} placeholder="Numero de matricule" /><br />
                         </div>
                         <div className="mb-3">
                             <button onClick={addAssurance} type="submit" className='btn btn-primary'>Save Assurance</button>
                         </div>
                         </div>

                         </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
  )
}

export default AssuranceCreate