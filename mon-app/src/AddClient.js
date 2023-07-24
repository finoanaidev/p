import React from 'react'
import {useState} from 'react'
function AddClient() {
  const [nom,setNom]=useState("");
  const [prenom,setPrenom]=useState("");
  const [tel,setTel]=useState("");
  const [adresse,setAdresse]=useState("");
  async function addClient()
  {
    console.warn(nom,prenom,tel,adresse)
    const formData= new FormData();
    formData.append('nom',nom);
    formData.append('prenom',prenom);
    formData.append('tel',tel);
    formData.append('adresse',adresse);
    let result=await fetch("http://localhost:8000/api/addclient", {
       method: 'POST',
       body: formData,
       
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    alert("Donnée bien enregistré")
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <br />
      <input type="text" className="form-control"
      onChange={(e)=>setNom(e.target.value)} placeholder="Nom" /><br />
      <input type="text" className="form-control"
      onChange={(e)=>setPrenom(e.target.value)} placeholder="Prenom" /><br />
      <input type="text" className="form-control"
      onChange={(e)=>setTel(e.target.value)} placeholder="Telephone" /><br />
      <input type="text" className="form-control"
      onChange={(e)=>setAdresse(e.target.value)} placeholder="Adresse" /><br />
      <button onClick={addClient} className='btn btn-info'>Ajouter</button>
    </div>
  )
}

export default AddClient