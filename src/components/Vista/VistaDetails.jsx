import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';

const VistaDetails = () => {
  const { id } = useParams();
  const [vista, setVista] = useState(null);

  useEffect(() => {
    api.get(`/vistas/${id}`)
      .then(response => setVista(response.data))
      .catch(error => console.error('Error fetching vista:', error));
  }, [id]);

  if (!vista) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Vista Details</h1>
      <p><strong>Name:</strong> {vista.name}</p>
      {/* Add other vista details here */}
    </div>
  );
};

export default VistaDetails;
