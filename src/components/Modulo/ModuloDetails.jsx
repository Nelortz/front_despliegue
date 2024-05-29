import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';

const ModuloDetails = () => {
  const { id } = useParams();
  const [modulo, setModulo] = useState(null);

  useEffect(() => {
    const fetchModulo = async () => {
      try {
        const response = await api.get(`/modulos/${id}`);
        setModulo(response.data);
      } catch (error) {
        console.error('Error fetching modulo:', error);
      }
    };

    fetchModulo();
  }, [id]);

  if (!modulo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Modulo Details</h1>
      <p><strong>Name:</strong> {modulo.name}</p>
      {/* Add other modulo details here */}
    </div>
  );
};

export default ModuloDetails;

