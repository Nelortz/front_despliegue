import React, { useState, useEffect } from 'react';
import api from '../../App';

const UsuarioRolList = () => {
  const [usuarioRoles, setUsuarioRoles] = useState([]);

  useEffect(() => {
    // Función para obtener la lista de usuarioRoles desde la API
    const fetchUsuarioRoles = async () => {
      try {
        const response = await api.get('/usuarioRoles');
        setUsuarioRoles(response.data);
      } catch (error) {
        console.error('Error fetching usuarioRoles:', error);
      }
    };

    fetchUsuarioRoles(); // Llamar a la función para obtener los usuarioRoles
  }, []);

  return (
    <div class="usuario-rol-list">
    <h1>UsuarioRoles</h1>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nombre de usuario</td>
          <td>Contraseña</td>
          <td>Rol</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>usuario1</td>
          <td>********</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>2</td>
          <td>usuario2</td>
          <td>********</td>
          <td>Pasante</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  );
};

export default UsuarioRolList;
