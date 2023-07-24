// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom'
// function Client() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function searchClient(key) {
//     console.warn(key);

//     let result = await fetch(`http://localhost:8000/api/searchClient/${key}`);
//     result = await result.json();
//     console.warn(result)
//     setData(result)
//   }

//   async function deleteClient(id) {
//     let result = await fetch(`http://localhost:8000/api/addClient/${id}/deleteclient`, {
//       method: 'DELETE'
//     });
//     result = await result.json();
//     console.warn(result);
//     getData();
//   }

//   async function getData() {
//     let result = await fetch('http://localhost:8000/api/addClient');
//     result = await result.json();
//     setData(result);

//   }

//   return (
//     <>
//       <h2 className="text-center">Nombre de client: {data.length}</h2>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', width: '7cm', background: '#ADDCC8', padding: '5px' }}>
//           <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
//           <input
//             type="text"
//             onChange={(e) => searchClient(e.target.value)}
//             className="form-control"
//             style={{ border: 'none', outline: 'none', width: '100%' }}
//             placeholder="Recherche"
//           />
//         </div>
//       </div>
//       <br />
//       <div className=" table-responsive-lg col-sm-12">
//         <table className="table table-bordered">
          // <thead style={{ fontSize: '12px' }}>
          //   <tr className="table-active">
          //     <th>Id</th>
          //     <th >N° Police Auto</th>
          //     <th>N° d'ordre auto</th>
          //     <th>N° Police AFP</th>
          //     <th>N° d'ordre AFP</th>
          //     <th>Production</th>
          //     <th>Date d'effet</th>
          //     <th>N° assure</th>
          //     <th>Faritany</th>
          //     <th>Lieu</th>
          //     <th>Agence de</th>
          //     <th>Expiration</th>
          //     <th>Date de rattachement</th>
          //     <th>Nom Complet</th>
          //     <th>Proffession</th>
          //     <th>Adresse</th>
          //     <th>Actions</th>
          //   </tr>
          // </thead>
          // <tbody>
          //   {data.map((item) => (
          //     <tr key={item.id}>
          //       <td>{item.id}</td>
          //       <td>{item.pauto}</td>
          //       <td>{item.ordrea}</td>
          //       <td>{item.pafp}</td>
          //       <td>{item.ordreafp}</td>
          //       <td>{item.production}</td>
          //       <td>{item.effet}</td>
          //       <td>{item.assure}</td>
          //       <td>{item.faritany}</td>
          //       <td>{item.lieu}</td>
          //       <td>{item.agence}</td>
          //       <td>{item.expiration}</td>
          //       <td>{item.date}</td>
          //       <td>{item.nom}</td>
          //       <td>{item.proffession}</td>
          //       <td>{item.adresse}</td>
          //       <td style={{ fontSize: '12px' }}>
          //         <div className="d-flex justify-content-between">
          //           <Link to={`/addClient/${item.id}/editclient`} className='btn btn-info' style={{ backgroundColor: '#41C9BF' }}>
          //             <FontAwesomeIcon icon={faEdit} />
          //           </Link>
          //           <button type='button' onClick={() => deleteClient(item.id)} className='btn btn-primary' style={{ backgroundColor: '#79BDFO' }}>
          //             <FontAwesomeIcon icon={faTrash} />
          //           </button>
          //         </div>
          //       </td>
          //     </tr>
          //   ))}
          // </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Client;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function Client() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function searchClient(key) {
    console.warn(key);

    let result = await fetch(`http://localhost:8000/api/searchClient/${key}`);
    result = await result.json();
    console.warn(result);
    setData(result);
  }

  async function deleteClient(id) {
    let result = await fetch(`http://localhost:8000/api/addClient/${id}/deleteclient`, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);
    getData();
    setLoading(false);
  }

  async function getData() {
    let result = await fetch('http://localhost:8000/api/addClient');
    result = await result.json();
    setData(result);
    setLoading(false);
  }

  
  return (
    <>
      <h2 className="text-center">Nombre de client: {data.length}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', width: '7cm', background: '#ADDCC8', padding: '5px' }}>
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
          <input
            type="text"
            onChange={(e) => searchClient(e.target.value)}
            className="form-control"
            style={{ border: 'none', outline: 'none', width: '100%' }}
            placeholder="Recherche"
          />
        </div>
      
      </div>
      <div className="text-end">
    <Link to="/createClient"  className='btn btn-info' style={{ backgroundColor: '#79BDFO', borderRadius: '5px', marginRight: '0.5cm' }} >
        Ajouter
    </Link>
</div>
     
      <div className="table-responsive-lg col-sm-12">
        {loading ? (
          <Loading />
        ) : (
          <div  className="table-responsive-sm">
            <div className="mx-auto" style={{ maxWidth: '97%',fontSize: '13px' }}>
          <table className="table table-bordered">
                      <thead style={{ backgroundColor:'#ADDCC8' }}>
            <tr >
              <th>Id</th>
              <th >N° Police Auto</th>
              <th>N° d'ordre auto</th>
              <th>N° Police AFP</th>
              <th>N° d'ordre AFP</th>
              <th>Production</th>
              <th>Date d'effet</th>
              <th>N° assure</th>
              <th>Faritany</th>
              <th>Lieu</th>
              <th>Agence de</th>
              <th>Expiration</th>
              <th>Date de rattachement</th>
              <th>Nom Complet</th>
              <th>Proffession</th>
              <th>Adresse</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:'white'}}>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.pauto}</td>
                <td>{item.ordrea}</td>
                <td>{item.pafp}</td>
                <td>{item.ordreafp}</td>
                <td>{item.production}</td>
                <td>{item.effet}</td>
                <td>{item.assure}</td>
                <td>{item.faritany}</td>
                <td>{item.lieu}</td>
                <td>{item.agence}</td>
                <td>{item.expiration}</td>
                <td>{item.date}</td>
                <td>{item.nom}</td>
                <td>{item.proffession}</td>
                <td>{item.adresse}</td>
                <td style={{ fontSize: '12px' }}>
                  <div className="d-flex justify-content-between">
                    <Link to={`/addClient/${item.id}/editclient`} className='btn btn-info' style={{ backgroundColor: '#41C9BF' }}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button type='button' onClick={() => deleteClient(item.id)} className='btn btn-primary' style={{ backgroundColor: '#79BDFO' }}>
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

export default Client;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import Loading from './Loading';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
// import { ScatterController, LineController, CategoryScale, LinearScale } from 'chart.js';

// Chart.register(ScatterController, LineController, CategoryScale, LinearScale);


// function Client() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function searchClient(key) {
//     console.warn(key);

//     let result = await fetch(`http://localhost:8000/api/searchClient/${key}`);
//     result = await result.json();
//     console.warn(result);
//     setData(result);
//   }

//   async function deleteClient(id) {
//     let result = await fetch(`http://localhost:8000/api/addClient/${id}/deleteclient`, {
//       method: 'DELETE'
//     });
//     result = await result.json();
//     console.warn(result);
//     getData();
//     setLoading(false);
//   }

//   async function getData() {
//     let result = await fetch('http://localhost:8000/api/addClient');
//     result = await result.json();
//     setData(result);
//     setLoading(false);
//   }

//   const getClientCountData = () => {
//     const labels = data.map(item => item.date);
//     const counts = data.map(item => item.clientCount);
  
//     return {
//       labels,
//       datasets: [
//         {
//           label: 'Nombre de clients', color:'red',
//           data: counts,
//           fill: false,
//           backgroundColor: 'white',
//           borderColor: 'white',
//           borderWidth: 2,
//           pointStyle: 'circle', // Set the point style to 'circle'
//           pointRadius: 3, // Adjust the point radius to make it smaller
//         },
//       ],
//     };
//   };
  
//   useEffect(() => {
//     Chart.register(ScatterController, LineController, CategoryScale, LinearScale);
//   }, []);
  

//   return (
//     <>
//       <h2 className="text-center">Nombre de client: {data.length}</h2>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', width: '7cm', background: '#ADDCC8', padding: '5px' }}>
//           <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
//           <input
//             type="text"
//             onChange={(e) => searchClient(e.target.value)}
//             className="form-control"
//             style={{ border: 'none', outline: 'none', width: '100%' }}
//             placeholder="Recherche"
//           />
//         </div>
      
//       </div>
//       <div className="text-end">
//         <Link to="/createClient" className='btn btn-info' style={{ backgroundColor: '#79BDFO', borderRadius: '5px' }}>
//           Ajouter
//         </Link>
//       </div>

//       <div className="table-responsive-lg col-sm-12">
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <Line data={getClientCountData()} />
//             <table className="table table-bordered">
//               <thead style={{ fontSize: '12px', backgroundColor: 'white' }}>
//                 <tr className="table-active">
//                   <th>Id</th>
//                   <th>N° Police Auto</th>
//                   <th>N° d'ordre auto</th>
                

//               <th>N° Police AFP</th>
//               <th>N° d'ordre AFP</th>
//               <th>Production</th>
//               <th>Date d'effet</th>
//               <th>N° assure</th>
//               <th>Faritany</th>
//               <th>Lieu</th>
//               <th>Agence de</th>
//               <th>Expiration</th>
//               <th>Date de rattachement</th>
//               <th>Nom Complet</th>
//               <th>Proffession</th>
//               <th>Adresse</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody style={{backgroundColor:'gray'}}>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.pauto}</td>
//                 <td>{item.ordrea}</td>
//                 <td>{item.pafp}</td>
//                 <td>{item.ordreafp}</td>
//                 <td>{item.production}</td>
//                 <td>{item.effet}</td>
//                 <td>{item.assure}</td>
//                 <td>{item.faritany}</td>
//                 <td>{item.lieu}</td>
//                 <td>{item.agence}</td>
//                 <td>{item.expiration}</td>
//                 <td>{item.date}</td>
//                 <td>{item.nom}</td>
//                 <td>{item.proffession}</td>
//                 <td>{item.adresse}</td>
//                 <td style={{ fontSize: '12px' }}>
//                   <div className="d-flex justify-content-between">
//                     <Link to={`/addClient/${item.id}/editclient`} className='btn btn-info' style={{ backgroundColor: '#41C9BF' }}>
//                       <FontAwesomeIcon icon={faEdit} />
//                     </Link>
//                     <button type='button' onClick={() => deleteClient(item.id)} className='btn btn-primary' style={{ backgroundColor: '#79BDFO' }}>
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           </table>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Client;




