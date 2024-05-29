import React, { useState, useEffect } from 'react';
import api from '../../App';


const RolList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    api.get('/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error('Error fetching roles:', error));
  }, []);

  return (
    <div className="rol-list">
      <h1>Roles</h1>
      <table>
        <thead>
          <tr>
            <td>Tipo de Rol</td>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrador</td>
            <td>Cuenta con todos los permisos disponibles</td>
          </tr>
          <tr>
            <td>Pasante</td>
            <td>Cuenta con permisos necesarios para cumplir sus funciones</td>
          </tr>
          {roles.map(rol => (
            <tr key={rol.id}>
              <td>{rol.name}</td>
              <td>{rol.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolList;
