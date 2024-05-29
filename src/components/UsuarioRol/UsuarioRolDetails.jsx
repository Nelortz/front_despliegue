import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../App';

const UsuarioRolDetails = () => {
  const { id } = useParams();
  const [usuarioRol, setUsuarioRol] = useState(null);

  useEffect(() => {
    // Realizar la solicitud para obtener los detalles del usuarioRol con el ID proporcionado
    const fetchUsuarioRolDetails = async () => {
      try {
        const response = await api.get(`/usuarioRoles/${id}`);
        setUsuarioRol(response.data);
      } catch (error) {
        console.error('Error fetching usuarioRol:', error);
      }
    };

    fetchUsuarioRolDetails(); // Llamar a la función para obtener los detalles del usuarioRol
  }, [id]);

  if (!usuarioRol) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los detalles del usuarioRol
  }

  return (
    <div>
      <h1>UsuarioRol Details</h1>
      <p><strong>Name:</strong> {usuarioRol.name}</p>
      {/* Agregar aquí otros detalles del usuarioRol si es necesario */}
    </div>
  );
};

export default UsuarioRolDetails;
