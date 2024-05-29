import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';

const ModuloVistaDetails = () => {
  const { id } = useParams();
  const [moduloVista, setModuloVista] = useState(null);

  useEffect(() => {
    api.get(`/moduloVistas/${id}`)
      .then(response => setModuloVista(response.data))
      .catch(error => console.error('Error fetching moduloVista:', error));
  }, [id]);

  if (!moduloVista) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>ModuloVista Details</h1>
      <p><strong>Name:</strong> {moduloVista.name}</p>
      {/* Add other moduloVista details here */}
    </div>
  );
};

export default ModuloVistaDetails;
