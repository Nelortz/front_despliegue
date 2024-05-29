import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';


const UsuarioDetails = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    api.get(`/usuarios/${id}`)
      .then(response => setUsuario(response.data))
      .catch(error => console.error('Error fetching usuario:', error));
  }, [id]);

  if (!usuario) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="usuario-details">
      <h1>Usuario Details</h1>
      <p><strong>ID:</strong> {usuario.id}</p>
      <p><strong>Username:</strong> {usuario.username}</p>
      <p><strong>Password:</strong> {usuario.password}</p>
      {/* Add other usuario details here */}
    </div>
  );
};

export default UsuarioDetails;
