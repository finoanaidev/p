import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function UpdateClient() {
  const { id } = useParams();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tel, setTel] = useState('');
  const [adresse, setAdresse] = useState('');

  useEffect(() => {
    async function fetchData() {
      let result = await fetch(`http://localhost:8000/api/client/${id}`, {
        method: 'GET'
      });

      result = await result.json();
      setNom(result.nom);
      setPrenom(result.prenom);
      setTel(result.tel);
      setAdresse(result.adresse);
      alert("Donnée bien modifiée");
    }

    fetchData();
  }, [id]);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      nom,
      prenom,
      tel,
      adresse
    };

    await fetch(`http://localhost:8000/api/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    // Gérer la réponse après la mise à jour

    // ...
  };

  return (
    <div>
      <h2>Modifier Client</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} /> <br />
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} /> <br />
        <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} /> <br />
        <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} /> <br />
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default UpdateClient;
