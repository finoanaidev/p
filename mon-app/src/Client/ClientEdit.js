// import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'
// import { useParams } from 'react-router-dom';



// import Loading from './Loading'

// function ClientEdit() {
//     const { id } = useParams();
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

//     const [loading, setLoading] = useState(false);

   





//   useEffect(() => {
//     async function fetchData() {
//       let result = await fetch(`http://localhost:8000/api/addClient/${id}/editclient`, {
//         method: 'GET'
//       });

//       result = await result.json();
//       setPauto(result.pauto);
//       setOrdrea(result.ordrea);
//       setPafp(result.pafp);
//       setOrdreafp(result.ordreafp);
//       setProduction(result.production);
//       setEffet(result.effet);
//       setAssure(result.assure);
//       setFaritany(result.faritany);
//       setLieu(result.lieu);
//       setAgence(result.agence);
//       setExpiration(result.expiration);
//       setDate(result.date);
//       setNom(result.nom);
//       setProffession(result.proffession);
//       setAdresse(result.adresse)
      
//     }

//     fetchData();
//   }, [id]);

//   // Fonction de gestion de la soumission du formulaire
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const updatedData = {
//         pauto,
//         ordrea,
//         pafp,
//         ordreafp,
//         production,
//         effet,
//         assure,
//         faritany,
//         lieu,
//         agence,
//         expiration,
//         date,
//         nom,
//         proffession,
//         adresse
//     };

//     await fetch(`http://localhost:8000/api/addClient/${id}/editclient`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedData)
//     });
//     setLoading(false);
//   };

//   return (
   
//              <div className='container'>
//                  <div className="row">
//                      <div className="col-md-12">
//                          <div className="card">
//                              <div className="card-header">
//                                  <h2>Edit client</h2>
//                                  <Link to="/addClient" className='btn btn-danger float-end'>Back</Link>
//                              </div>
//                              <div className="card-body">


//                              {loading ? (
//         <div> <Loading /> </div>
//       ) : (
                             
//                                  <form onSubmit={handleSubmit}>

//                                   <div className="row">   

//                                 <div className="col-md-4">

//                                  <div className="mb-1">
//                                      <label>N° Police auto</label>
//                                      <input type="text" className='form-control' value={pauto} onChange={(e) => setPauto(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>N° d'ordre auto</label>
//                                      <input type="text" className='form-control' value={ordrea} onChange={(e) => setOrdrea(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>N° Police AFP</label>
//                                      <input type="text" className='form-control' value={pafp} onChange={(e) => setPafp(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>N° d'ordre AFP</label>
//                                      <input type="text" className='form-control' value={ordreafp} onChange={(e) => setOrdreafp(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Nom Complet</label>
//                                      <input type="text" className='form-control' value={nom} onChange={(e) => setNom(e.target.value)} /> 
//                                  </div>

//                                  </div>


//                                 <div className="col-md-4">
//                                 <div className="mb-1">
//                                      <label>Production</label>
//                                      <input type="text" className='form-control' value={production} onChange={(e) => setProduction(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Date d'effet</label>
//                                      <input type="date" className='form-control' value={effet} onChange={(e) => setEffet(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>N° assure</label>
//                                       <input type="text" className='form-control' value={assure} onChange={(e) => setAssure(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Faritany</label>
//                                       <input type="text" className='form-control' value={faritany} onChange={(e) => setFaritany(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Adresse</label>
//                                      <input type="text" className='form-control' value={adresse} onChange={(e) => setAdresse(e.target.value)} /> 
//                                  </div>
                                

//                                  </div>

//                                 <div className="col-md-4">
//                                 <div className="mb-1">
//                                      <label>Lieu</label>
//                                      <input type="text" className='form-control' value={lieu} onChange={(e) => setLieu(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Agence de</label>
//                                      <input type="text" className='form-control' value={agence} onChange={(e) => setAgence(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Expiration</label>
//                                      <input type="text" className='form-control' value={expiration} onChange={(e) => setExpiration(e.target.value)} /> 
//                                  </div>
//                                  <div className="mb-1">
//                                      <label>Date de rattachement</label>
//                                      <input type="date" className='form-control' value={date} onChange={(e) => setDate(e.target.value)} /> 
//                                  </div>
                                
//                                  <div className="mb-1">
//                                      <label>Proffession</label>
//                                      <input type="text" className='form-control' value={proffession} onChange={(e) => setProffession(e.target.value)} /> 
//                                  </div>
                                 
//                                  <div className="mb-1">
//                                      <button type="submit" className='btn btn-primary'>Update Vehicule</button>
//                                  </div>
              
//                                  </div>

//                                  </div>
//                                  </form>


// )}

//                              </div>
//                          </div>
//                      </div>
//                  </div>
//              </div>   
//   )
// }

// export default ClientEdit;

import React, { useState, useEffect } from 'react';
//import {Link} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';



import Loading from './Loading'

function ClientEdit() {
    const { id } = useParams();
    const [pauto, setPauto] = useState('');
    const [ordrea, setOrdrea] = useState('');
    const [pafp, setPafp] = useState('');
    const [ordreafp, setOrdreafp] = useState('');
    const [production, setProduction] = useState('');
    const [effet, setEffet] = useState('');
    const [assure, setAssure] = useState('');
    const [faritany, setFaritany] = useState('');
    const [lieu, setLieu] = useState('');
    const [agence, setAgence] = useState('');
    const [expiration, setExpiration] = useState('');
    const [date, setDate] = useState('');
    const [nom, setNom] = useState('');
    const [proffession, setProffession] = useState('');
    const [adresse, setAdresse] = useState('');

    const [loading, setLoading] = useState(false);

    //const [successMessage, setSuccessMessage] = useState('');
   
    const navigate = useNavigate();




  useEffect(() => {
    async function fetchData() {
    //     setLoading(true);
    //   try {
      let result = await fetch(`http://localhost:8000/api/addClient/${id}/editclient`, {
        method: 'GET'
      });

      result = await result.json();
      setPauto(result.pauto);
      setOrdrea(result.ordrea);
      setPafp(result.pafp);
      setOrdreafp(result.ordreafp);
      setProduction(result.production);
      setEffet(result.effet);
      setAssure(result.assure);
      setFaritany(result.faritany);
      setLieu(result.lieu);
      setAgence(result.agence);
      setExpiration(result.expiration);
      setDate(result.date);
      setNom(result.nom);
      setProffession(result.proffession);
      setAdresse(result.adresse)
    //   setSuccessMessage('Data loaded successfully.');
    // } catch (error) {
    //   console.error('Error');
      
     };

    fetchData();
  }, [id]);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = {
        pauto,
        ordrea,
        pafp,
        ordreafp,
        production,
        effet,
        assure,
        faritany,
        lieu,
        agence,
        expiration,
        date,
        nom,
        proffession,
        adresse
    };

    await fetch(`http://localhost:8000/api/addClient/${id}/editclient`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    setLoading(false);
    navigate('/addClient');
  };

  return (
   
             <div className='container mt-3' style={{color:'black'}}>
                 <div className="row">
                     <div className="col-md-12">
                         <div className="card">
                             <div className="card-header" style={{backgroundColor:'#ADDCC8'}}>
                                 <h3>Modofier le(s) information(s) de client(s)</h3>
                                 {/* <Link to="/addClient" className='btn btn-danger float-end'>Back</Link> */}
                             </div>
                             <div className="card-body">


                             {loading ? (
        <div> <Loading /> </div>
      ) : (
                             
                                 <form onSubmit={handleSubmit}>

                                  <div className="row">   

                                <div className="col-md-4">

                                 <div className="mb-1">
                                     <label>N° Police auto</label>
                                     <input type="text" className='form-control' value={pauto} onChange={(e) => setPauto(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>N° d'ordre auto</label>
                                     <input type="text" className='form-control' value={ordrea} onChange={(e) => setOrdrea(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>N° Police AFP</label>
                                     <input type="text" className='form-control' value={pafp} onChange={(e) => setPafp(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>N° d'ordre AFP</label>
                                     <input type="text" className='form-control' value={ordreafp} onChange={(e) => setOrdreafp(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Nom Complet</label>
                                     <input type="text" className='form-control' value={nom} onChange={(e) => setNom(e.target.value)} /> 
                                 </div>

                                 </div>


                                <div className="col-md-4">
                                <div className="mb-1">
                                     <label>Production</label>
                                     <input type="text" className='form-control' value={production} onChange={(e) => setProduction(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Date d'effet</label>
                                     <input type="date" className='form-control' value={effet} onChange={(e) => setEffet(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>N° assure</label>
                                      <input type="text" className='form-control' value={assure} onChange={(e) => setAssure(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Faritany</label>
                                      <input type="text" className='form-control' value={faritany} onChange={(e) => setFaritany(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Adresse</label>
                                     <input type="text" className='form-control' value={adresse} onChange={(e) => setAdresse(e.target.value)} /> 
                                 </div>
                                

                                 </div>

                                <div className="col-md-4">
                                <div className="mb-1">
                                     <label>Lieu</label>
                                     <input type="text" className='form-control' value={lieu} onChange={(e) => setLieu(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Agence de</label>
                                     <input type="text" className='form-control' value={agence} onChange={(e) => setAgence(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Expiration</label>
                                     <input type="text" className='form-control' value={expiration} onChange={(e) => setExpiration(e.target.value)} /> 
                                 </div>
                                 <div className="mb-1">
                                     <label>Date de rattachement</label>
                                     <input type="date" className='form-control' value={date} onChange={(e) => setDate(e.target.value)} /> 
                                 </div>
                                
                                 <div className="mb-1">
                                     <label>Proffession</label>
                                     <input type="text" className='form-control' value={proffession} onChange={(e) => setProffession(e.target.value)} /> 
                                 </div>
                                 
                                 <div className="mb-1">
                                     <button type="submit" className='btn btn-primary'>Enregistrer</button>
                                 </div>
              
                                 </div>

                                 </div>
                                 </form>


)}

                             </div>
                         </div>
                     </div>
                 </div>
             </div>   
  )
}

export default ClientEdit;

