import React from 'react'
import {useState} from 'react'
import {Table} from 'react-bootstrap'
function SearchClient() {
    const [data,setData]=useState([])
    async function search(key)
    {
         console.warn(key);

         let result= await fetch(`http://localhost:8000/api/search/${key}`);
        result=await result.json();
        console.warn(result)
        setData(result)
    }
  return (
    <div>
        <h2>Search Client</h2>
        <br />
        <input type="text" onChange={(e)=>search(e.target.value)} className='form-control' placeholder='Recherche Client' />
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default SearchClient