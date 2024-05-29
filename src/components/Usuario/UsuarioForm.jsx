import React, { useState } from 'react';
import api from '../../App';
import { useNavigate } from 'react-router';


const UsuarioForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/usuarios', { username, password })
      .then(() => navigate('/usuarios'))
      .catch(error => console.error('Error creating usuario:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="usuario-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsuarioForm;
