import React, { useState, useEffect } from 'react';
import api from '../../App';

const VistaList = () => {
  const [vistas, setVistas] = useState([]);

  useEffect(() => {
    api.get('/vistas')
      .then(response => setVistas(response.data))
      .catch(error => console.error('Error fetching vistas:', error));
  }, []);

  return (
    <div>
      <h1>Vistas</h1>
      <ul>
        {vistas.map(vista => (
          <li key={vista.id}>{vista.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default VistaList;
