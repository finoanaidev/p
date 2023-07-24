import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
function Assurance() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    getData();
  }, []);

  async function searchAssurance(key)
    {
         console.warn(key);

         let result= await fetch(`http://localhost:8000/api/searchAssurance/${key}`);
        result=await result.json();
        console.warn(result)
        setData(result)
    }

  async function deleteAssurance(id) {
    let result = await fetch(`http://localhost:8000/api/addAssurance/${id}/deleteassurance`, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);
    getData();
  }

  async function getData() {
    let result = await fetch('http://localhost:8000/api/addAssurance');
    result = await result.json();
    setData(result);
  }

  return (
    <>
      <h2 className="text-center">Liste des clients</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', width: '7cm', background: '#ADDCC8', padding: '5px' }}>
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
          <input
            type="text"
            onChange={(e)=>searchAssurance(e.target.value)}
            className="form-control"
            style={{ border: 'none', outline: 'none', width: '100%' }}
            placeholder="Recherche"
          />
        </div>
      </div>
      <br />
      <div className="col-sm-8 offset-sm-2">
      <table class="table table-bordered">
          <thead style={{ fontSize: '12px' }}>
            <tr className="table-active">
              <th>Id</th>
              <th>Effet</th>
              <th>Expirele</th>
              <th>ObjetAssure</th>
              <th>Frationnement</th>
              <th>Police</th>
              <th>Matricule</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
               <tr key={item.id}>
                             <td>{item.id}</td>
                               <td>{item.effet}</td>
                               <td>{item.expirele}</td>
                               <td>{item.objetassure}</td>
                               <td>{item.fractionnement}</td>
                               <td>{item.police}</td>
                               <td>{item.matricule}</td>
                               <td>
                                   <Link to={`/addAssurance/${item.id}/editassurance`} className='btn btn-info' style={{ backgroundColor: '#41C9BF' }}>
                                   <FontAwesomeIcon icon={faEdit} />
                                   </Link>
                               
                                   <button type='button' onClick={() =>deleteAssurance(item.id)} className='btn btn-primary' style={{ backgroundColor: '#79BDFO' }}>
                                   <FontAwesomeIcon icon={faTrash} />
                                   </button>
                               </td>
                               
                           </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Assurance;




// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import {Link} from 'react-router-dom';
// import Loading from './Loading'
// function Assurance() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
 
//   useEffect(() => {
//     getData();
//   }, []);

//   async function searchAssurance(key)
//     {
//          console.warn(key);

//          let result= await fetch(`http://localhost:8000/api/searchAssurance/${key}`);
//         result=await result.json();
//         console.warn(result)
//         setData(result)
//     }

//   async function deleteAssurance(id) {
//     let result = await fetch(`http://localhost:8000/api/addAssurance/${id}/deleteassurance`, {
//       method: 'DELETE'
//     });
//     result = await result.json();
//     console.warn(result);
//     getData();
//   }

//   async function getData() {
//     let result = await fetch('http://localhost:8000/api/addAssurance');
//     result = await result.json();
//     setData(result);
//     setLoading(true);
//   }
//   console.log(loading);
//   return (
//     <>
//       <h2 className="text-center">Liste des clients</h2>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', width: '7cm', background: '#ADDCC8', padding: '5px' }}>
//           <FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />
//           <input
//             type="text"
//             onChange={(e)=>searchAssurance(e.target.value)}
//             className="form-control"
//             style={{ border: 'none', outline: 'none', width: '100%' }}
//             placeholder="Recherche"
//           />
//         </div>
//       </div>
//       <br />
//       <div className="col-sm-8 offset-sm-2">
//       <table class="table table-bordered">
//           <thead style={{ fontSize: '12px' }}>
//             <tr className="table-active">
//               <th>Id</th>
//               <th>Effet</th>
//               <th>Expirele</th>
//               <th>ObjetAssure</th>
//               <th>Frationnement</th>
//               <th>Police</th>
//               <th>Matricule</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? data.map(data =>{
//               return <tr key={data.id}>
//               <td>{data.id}</td>
//                 <td>{data.effet}</td>
//                 <td>{data.expirele}</td>
//                 <td>{data.objetassure}</td>
//                 <td>{data.fractionnement}</td>
//                 <td>{data.police}</td>
//                 <td>{data.matricule}</td>
//                 <td>
//                     <Link to={`/addAssurance/${data.id}/editassurance`} className='btn btn-info' style={{ backgroundColor: '#41C9BF' }}>
//                     <FontAwesomeIcon icon={faEdit} />
//                     </Link>
                
//                     <button type='button' onClick={() =>deleteAssurance(data.id)} className='btn btn-primary' style={{ backgroundColor: '#79BDFO' }}>
//                     <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                 </td>
                
//             </tr>
//             }):<Loading />}
          
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Assurance;





