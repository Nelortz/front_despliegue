import React, { useState } from 'react';
import api from '../../App';
import { useNavigate } from 'react-router';


const VistaForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/vistas', { name })
      .then(() => navigate('/vistas'))
      .catch(error => console.error('Error creating vista:', error));
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

export default VistaForm;
