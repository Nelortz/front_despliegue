import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';

const PersonaDetails = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);

  useEffect(() => {
    const fetchPersona = async () => {
      try {
        const response = await api.get(`/personas/${id}`);
        setPersona(response.data);
      } catch (error) {
        console.error('Error fetching persona:', error);
      }
    };

    fetchPersona();
  }, [id]);

  if (!persona) return <div>Loading...</div>;

  return (
    <div>
      <h1>{persona.nombre} {persona.apellido}</h1>
      <p><strong>Correo Electrónico:</strong> {persona.email}</p>
      {/* Add more details if necessary */}
    </div>
  );
};

export default PersonaDetails;
