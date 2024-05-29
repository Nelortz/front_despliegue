import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';


const ModuloRolDetails = () => {
  const { id } = useParams();
  const [moduloRol, setModuloRol] = useState(null);

  useEffect(() => {
    api.get(`/moduloRoles/${id}`)
      .then(response => setModuloRol(response.data))
      .catch(error => console.error('Error fetching moduloRol:', error));
  }, [id]);

  if (!moduloRol) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modulo-rol-details">
      <h1>ModuloRol Details</h1>
      <p><strong>Name:</strong> {moduloRol.name}</p>
      {/* Add other moduloRol details here */}
    </div>
  );
};

export default ModuloRolDetails;
