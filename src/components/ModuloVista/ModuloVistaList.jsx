import React, { useState, useEffect } from 'react';
import api from '../../App';


const ModuloVistaList = () => {
  const [moduloVistas, setModuloVistas] = useState([]);

  useEffect(() => {
    api.get('/moduloVistas')
      .then(response => setModuloVistas(response.data))
      .catch(error => console.error('Error fetching moduloVistas:', error));
  }, []);

  return (
    <div className="modulo-vista-container">
      <h1>Módulo Vistas</h1>
      <ul className="modulo-vista-list">
        <li>Persona</li>
        <li>Usuarios</li>
        <li>Roles</li>
        <li>Vistas</li>
        <li>Módulos</li>
        <li>Módulo Roles</li>
        <li>Módulos Vistas</li>
        <li>Usuario Personas</li>
        <li>Usuario Roles</li>
        {moduloVistas.map(moduloVista => (
          <li key={moduloVista.id}>{moduloVista.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModuloVistaList;
