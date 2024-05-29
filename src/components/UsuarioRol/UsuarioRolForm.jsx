import React, { useState } from 'react';
import api from '../../App';
import {  useNavigate } from 'react-router-dom';


const UsuarioRolForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/usuarioRoles', { name })
      .then(() => navigate('/usuarioRoles'))
      .catch(error => console.error('Error creating usuarioRol:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="usuario-rol-form"> {/* Agrega la clase CSS al formulario */}
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsuarioRolForm;
