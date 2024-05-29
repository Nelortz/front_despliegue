import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';


const UsuarioPersonaDetails = () => {
  const { id } = useParams();
  const [usuarioPersona, setUsuarioPersona] = useState(null);

  useEffect(() => {
    api.get(`/usuarioPersonas/${id}`)
      .then(response => setUsuarioPersona(response.data))
      .catch(error => console.error('Error fetching usuarioPersona:', error));
  }, [id]);

  if (!usuarioPersona) {
    return <div>Loading...</div>;
  }

  return (
    <div className="usuario-persona-details">
      <h1>UsuarioPersona Details</h1>
      <p><strong>ID:</strong> {usuarioPersona.id}</p>
      <p><strong>Nombre:</strong> {usuarioPersona.name}</p>
      <p><strong>Apellido:</strong> {usuarioPersona.surname}</p>
      <p><strong>Nombre de Usuario:</strong> {usuarioPersona.username}</p>
      <p><strong>Email:</strong> {usuarioPersona.email}</p>
      <p><strong>Contraseña:</strong> {usuarioPersona.password}</p>
    </div>
  );
};

export default UsuarioPersonaDetails;
