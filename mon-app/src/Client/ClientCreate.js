
// import React from 'react'
// //import {  useNavigate  } from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import { useState } from 'react'


// function ClientCreate() {
//     //const navigate = useNavigate();

//     const [pauto, setPauto] = useState('');
//     const [ordrea, setOrdrea] = useState('');
//     const [pafp, setPafp] = useState('');
//     const [ordreafp, setOrdreafp] = useState('');
//     const [production, setProduction] = useState('');
//     const [effet, setEffet] = useState('');
//     const [assure, setAssure] = useState('');
//     const [faritany, setFaritany] = useState('');
//     const [lieu, setLieu] = useState('');
//     const [agence, setAgence] = useState('');
//     const [expiration, setExpiration] = useState('');
//     const [date, setDate] = useState('');
//     const [nom, setNom] = useState('');
//     const [proffession, setProffession] = useState('');
//     const [adresse, setAdresse] = useState('');


  

//     async function addClient() {
//         console.warn(pauto, ordrea, pafp, ordreafp, production, effet, assure, faritany, lieu, agence, expiration, date, nom, proffession, adresse)
//         const formData = new FormData();
//         formData.append('pauto', pauto);
//         formData.append('ordrea', ordrea);
//         formData.append('pafp', pafp);
//         formData.append('ordreafp', ordreafp);
//         formData.append('production', production);
//         formData.append('effet', effet);
//         formData.append('assure', assure);
//         formData.append('faritany', faritany);
//         formData.append('lieu', lieu);
//         formData.append('agence', agence);
//         formData.append('expiration', expiration);
//         formData.append('date', date);
//         formData.append('nom', nom);
//         formData.append('proffession', proffession);
//         formData.append('adresse', adresse);
//         let result = await fetch("http://localhost:8000/api/addClient", {
//             method: 'POST',
//             body: formData,

//         });
//         result = await result.json();
//         localStorage.setItem("user-info", JSON.stringify(result));
//         //navigate('/addClient');
//     }
    
//     return (

//         <div className="container mt-4" style={{color:'black'}}>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header"  style={{backgroundColor:'#ADDCC8'}}>
//                             <h2>Information concernant au client</h2>
                            
//                         </div>
//                         <div className="card-body">

//                             <form>
//                                 <div className="row">
//                                     <div className="col-md-4">
//                                         <div className="mb-1">
//                                             <label>N° Police auto</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setPauto(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° d'ordre auto</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setOrdrea(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° Police AFP</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setPafp(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° d'ordre AFP</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setOrdreafp(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                                 <label>Nom Complet</label>
//                                                 <input type="text" className="form-control form-control-sm"
//                                                     onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
//                                             </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="mb-1">
//                                             <label>Production</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setProduction(e.target.value)} placeholder="Production" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Date d'effet</label>
//                                             <input type="date" className="form-control form-control-sm" onChange={(e) => setEffet(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° assure</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setAssure(e.target.value)} placeholder="Numero assure" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Faritany</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setFaritany(e.target.value)} placeholder="Faritany" />
//                                         </div>
//                                         <div className="mb-1">
//                                                 <label>Adresse</label>
//                                                 <input type="text" className="form-control form-control-sm"
//                                                     onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse" />
//                                             </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="mb-1">
//                                             <label>Lieu</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setLieu(e.target.value)} placeholder="Lieu" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Agence de</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setAgence(e.target.value)} placeholder="Agence" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Expiration</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setExpiration(e.target.value)} placeholder="Expiration" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Date de rattachement</label>
//                                             <input type="date" className="form-control form-control-sm" onChange={(e) => setDate(e.target.value)} />
//                                         </div>
                                        
                                              
//                                               <div className="mb-1">
//                                                   <label>Proffession</label>
//                                                   <input type="text" className="form-control form-control-sm"
//                                                       onChange={(e) => setProffession(e.target.value)} placeholder="Proffession" />
//                                               </div>
                                              
//                                               <div className="mb-1">
//                                                   {/* <button onClick={addClient} type="submit"><Link to="/addClient" className="btn btn-danger float-end">
//                                   Back
//                               </Link></button> */}
                              
//                               <button type='submit' className='btn btn-info'  ><Link to="/addClient" onClick={addClient} style={{ textDecoration:'none',color:'darkblue', fontSize:'20px' }}>
//                                   Enregistrer
//                               </Link></button>
//                                               </div>
//                                               </div>
//                                       </div>
//                                       </form>
//                                   </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>

//               )
//   }

//   export default ClientCreate

// import React from 'react'
// import { useNavigate} from 'react-router-dom'
// import { useState } from 'react'

// function ClientCreate() {

//   const navigate = useNavigate();

//     const [pauto, setPauto] = useState('');
//     const [ordrea, setOrdrea] = useState('');
//     const [pafp, setPafp] = useState('');
//     const [ordreafp, setOrdreafp] = useState('');
//     const [production, setProduction] = useState('');
//     const [effet, setEffet] = useState('');
//     const [assure, setAssure] = useState('');
//     const [faritany, setFaritany] = useState('');
//     const [lieu, setLieu] = useState('');
//     const [agence, setAgence] = useState('');
//     const [expiration, setExpiration] = useState('');
//     const [date, setDate] = useState('');
//     const [nom, setNom] = useState('');
//     const [proffession, setProffession] = useState('');
//     const [adresse, setAdresse] = useState('');

    

//     async function addClient() {
//         console.warn(pauto, ordrea, pafp, ordreafp, production, effet, assure, faritany, lieu, agence, expiration, date, nom, proffession, adresse)
//         const formData = new FormData();
//         formData.append('pauto', pauto);
//         formData.append('ordrea', ordrea);
//         formData.append('pafp', pafp);
//         formData.append('ordreafp', ordreafp);
//         formData.append('production', production);
//         formData.append('effet', effet);
//         formData.append('assure', assure);
//         formData.append('faritany', faritany);
//         formData.append('lieu', lieu);
//         formData.append('agence', agence);
//         formData.append('expiration', expiration);
//         formData.append('date', date);
//         formData.append('nom', nom);
//         formData.append('proffession', proffession);
//         formData.append('adresse', adresse);
//         let result = await fetch("http://localhost:8000/api/addClient", {
//             method: 'POST',
//             body: formData,

//         });
//         result = await result.json();
//         localStorage.setItem("user-info", JSON.stringify(result));
//         navigate('/createVehicule');
//     }

//     function handleConfirmation(response) {
//       if (response === 'oui') {
//         navigate('/createVehicule');
//       } else {
//         navigate('/addClient');
//       }
//     }
    
//     return (

//         <div className="container mt-4" style={{color:'black'}}>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header"  style={{backgroundColor:'#ADDCC8'}}>
//                             <h2>Information concernant au client</h2>
                            
//                         </div>
//                         <div className="card-body">

//                             <form>
//                                 <div className="row">
//                                     <div className="col-md-4">
//                                         <div className="mb-1">
//                                             <label>N° Police auto</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setPauto(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° d'ordre auto</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setOrdrea(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° Police AFP</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setPafp(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° d'ordre AFP</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setOrdreafp(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                                 <label>Nom Complet</label>
//                                                 <input type="text" className="form-control form-control-sm"
//                                                     onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
//                                             </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="mb-1">
//                                             <label>Production</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setProduction(e.target.value)} placeholder="Production" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Date d'effet</label>
//                                             <input type="date" className="form-control form-control-sm" onChange={(e) => setEffet(e.target.value)} />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>N° assure</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setAssure(e.target.value)} placeholder="Numero assure" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Faritany</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setFaritany(e.target.value)} placeholder="Faritany" />
//                                         </div>
//                                         <div className="mb-1">
//                                                 <label>Adresse</label>
//                                                 <input type="text" className="form-control form-control-sm"
//                                                     onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse" />
//                                             </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="mb-1">
//                                             <label>Lieu</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setLieu(e.target.value)} placeholder="Lieu" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Agence de</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setAgence(e.target.value)} placeholder="Agence" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Expiration</label>
//                                             <input type="text" className="form-control form-control-sm" onChange={(e) => setExpiration(e.target.value)} placeholder="Expiration" />
//                                         </div>
//                                         <div className="mb-1">
//                                             <label>Date de rattachement</label>
//                                             <input type="date" className="form-control form-control-sm" onChange={(e) => setDate(e.target.value)} />
//                                         </div>
                                        
                                              
//                                               <div className="mb-1">
//                                                   <label>Proffession</label>
//                                                   <input type="text" className="form-control form-control-sm"
//                                                       onChange={(e) => setProffession(e.target.value)} placeholder="Proffession" />
//                                               </div>
                                              
//                                               <div className="mb-1">
//         <button
//           type="submit"
//           className="btn btn-info"
//           onClick={addClient}
//           style={{ textDecoration: 'none', color: 'darkblue', fontSize: '20px' }}
//         >
//           Enregistrer
//         </button>
//       </div>
//       <div>
//           Voulez-vous enregistrer un véhicule?
//           <button onClick={() => handleConfirmation('oui')}>Oui</button>
//           <button onClick={() => handleConfirmation('non')}>Non</button>
//         </div>
//                                               </div>
//                                       </div>
//                                       </form>
//                                   </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>

//               )
//   }

//   export default ClientCreate




import React, { useState } from 'react';
import Modal from 'react-modal';


const MyComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <button onClick={handleOpenModal}>Ouvrir la fenêtre</button>
  
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Fenêtre de confirmation"
        >
          <h2>Confirmer votre choix :</h2>
          <button onClick={handleCloseModal}>NON</button>
          <button onClick={handleCloseModal}>OUI</button>
        </Modal>
      </div>
    );
  };
  
  export default MyComponent;
  




