import React, { useState } from 'react';
import api from '../../App';
import { useNavigate } from 'react-router';


const ModuloRolForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/moduloRoles', { name })
      .then(() => navigate('/moduloRoles'))
      .catch(error => console.error('Error creating moduloRol:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModuloRolForm;
