import React, { useState, useEffect } from 'react';
import api from '../../App';


const ModuloRolList = () => {
  const [moduloRoles, setModuloRoles] = useState([]);

  useEffect(() => {
    api.get('/moduloRoles')
      .then(response => setModuloRoles(response.data))
      .catch(error => console.error('Error fetching moduloRoles:', error));
  }, []);

  return (
    <div className="modulo-roles-container">
      <h1>Módulo Roles</h1>
      <ul className="modulo-roles-list">
        <li>Administrador</li>
        <li>Pasante</li>
        {moduloRoles.map(moduloRol => (
          <li key={moduloRol.id}>{moduloRol.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModuloRolList;
