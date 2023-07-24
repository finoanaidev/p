// import './style.css'
// import React, { useState, useEffect } from 'react'
// import { Table } from 'react-bootstrap'
// function ClientList() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getData();

//   }, [])
//   async function deleteOperation(id) {
//     let result = await fetch("http://localhost:8000/api/delete/" + id, {
//       method: 'DELETE'
//     });
//     result = await result.json();
//     console.warn(result)
//     getData();
//   }
//   async function getData() {
//     let result = await fetch("http://localhost:8000/api/list");
//     result = await result.json();
//     setData(result)
//   }
//   return (
//     <>
//       <h2 className='text-center'>Liste de  client</h2>
//       <div className="col-sm-8 offset-sm-2">
//         <Table>
//           <tr>
//             <td>Id</td>
//             <td>Nom</td>
//             <td>Prenom</td>
//             <td>Telephone</td>
//             <td>Adresse</td>
//             <td>Actions</td>
//           </tr>
//           {
//             data.map((item) =>
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.nom}</td>
//                 <td>{item.prenom}</td>
//                 <td>{item.tel}</td>
//                 <td>{item.adresse}</td>
//                 <td><span onClick={() => deleteOperation(item.id)} className='btn btn-danger'>Delete</span></td>
//               </tr>
//             )
//           }
//         </Table>
//       </div>
//     </>
//   )
// }

// export default ClientList
import './style.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function ClientList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);
    getData();
  }

  async function getData() {
    let result = await fetch('http://localhost:8000/api/list');
    result = await result.json();
    setData(result);
  }

  return (
    <>
      <h2 className="text-center">Liste des clients</h2>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Telephone</th>
              <th>Adresse</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.tel}</td>
                <td>{item.adresse}</td>
                <td>
                  <span
                    onClick={() => deleteOperation(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <Link to={`/update/${item.id}`}>
                  <span className="btn btn-success">
                    Update
                  </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ClientList;

