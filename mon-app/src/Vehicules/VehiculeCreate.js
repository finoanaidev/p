
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
function VehiculeCreate() {
    const navigate = useNavigate();
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
    async function addVehicule() {
        console.warn(moteur, marque, serie, carrosserie, puissance, source, date, poids, usage, place)
        const formData = new FormData();
        formData.append('moteur', moteur);
        formData.append('marque', marque);
        formData.append('serie', serie);
        formData.append('carrosserie', carrosserie);
        formData.append('puissance', puissance);
        formData.append('source', source);
        formData.append('date', date);
        formData.append('poids', poids);
        formData.append('usage', usage);
        formData.append('place', place);
        let result = await fetch("http://localhost:8000/api/addVehicule", {
            method: 'POST',
            body: formData,

        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        window.location.reload();
        navigate('/addClient');
    }
    return (
      
        <div className="container mt-5" style={{color:'black'}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Renseignement concernant le vehicule à assurer</h2>
                            
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label>N° Immatriculation ou N° moteur</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setMoteur(e.target.value)}
                                                placeholder="Numero"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Marque et type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setMarque(e.target.value)}
                                                placeholder="Marque"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>N° de serie</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setSerie(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Carrosserie</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setCarrosserie(e.target.value)}
                                                placeholder="Carrosserie"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label>Puissance fiscale</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setPuissance(e.target.value)}
                                                placeholder="Puissance"
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label>Sourece d'ennergie</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setSource(e.target.value)}
                                            />
                                        </div> */}
                                        <div className="mb-3">
  <label>Sourece d'énergie</label>
  <select
    className="form-control"
    onChange={(e) => setSource(e.target.value)}
  >
     <option value="" style={{color:'red'}}>
      <FontAwesomeIcon icon={faAngleDown} /> 
    </option>
    <option value="gasoil">Gasoil</option>
    <option value="essence">Essence</option>
  </select>
</div>


                                        <div className="mb-3">
                                            <label>Date de premiere mise en circulation</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                        </div>
                                        
                                        </div>

                                        <div className="col-md-4">
                                        <div className="mb-3">
                                            <label>Usage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setUsage(e.target.value)}
                                                placeholder="Usage"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Nombre de place</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setPlace(e.target.value)}
                                                placeholder="Nom"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label>Poids total en charge</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setPoids(e.target.value)}
                                            />
                                        </div>
<br />
<div className="mb-3">
        <Link
          to="/addClient" // Change the route here
          onClick={addVehicule}
          style={{
            backgroundColor: '#41C9BF',
            borderRadius: '5px',
            color: 'black',
            padding: '11px',
            textDecoration: 'none',
          }}
        >
          Enregistrer
        </Link>
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

export default VehiculeCreate

