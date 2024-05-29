import React, { useState } from 'react';
import api from '../../App';
import { useNavigate } from 'react-router';

const PersonaForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/personas', { nombre, apellido, email })
      .then(() => navigate('/personas'))
      .catch(error => console.error('Error creating persona:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          value={nombre} 
          onChange={handleNombreChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input 
          type="text" 
          id="apellido" 
          value={apellido} 
          onChange={handleApellidoChange} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonaForm;
