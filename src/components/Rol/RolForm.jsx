import React, { useState } from 'react';
import api from '../../App';
import { useNavigate } from 'react-router';


const RolForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/roles', { name, description })
      .then(() => navigate('/roles'))
      .catch(error => console.error('Error creating rol:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="rol-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input 
          type="text" 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RolForm;
