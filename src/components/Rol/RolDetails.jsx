import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';


const RolDetails = () => {
  const { id } = useParams();
  const [rol, setRol] = useState(null);

  useEffect(() => {
    api.get(`/roles/${id}`)
      .then(response => setRol(response.data))
      .catch(error => console.error('Error fetching rol:', error));
  }, [id]);

  if (!rol) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rol-details">
      <h1>Rol Details</h1>
      <p><strong>Name:</strong> {rol.name}</p>
      <p><strong>Description:</strong> {rol.description}</p>
      {/* Add other rol details here */}
    </div>
  );
};

export default RolDetails;
