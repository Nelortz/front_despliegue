import React, { useState } from 'react';
import api from '../../App';
import { useNavigate } from 'react-router';

const ModuloVistaForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/moduloVistas', { name })
      .then(() => navigate('/moduloVistas'))
      .catch(error => console.error('Error creating moduloVista:', error));
  };

  return (
    <div className="modulo-vista-form">
      <h2>Create ModuloVista</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ModuloVistaForm;
