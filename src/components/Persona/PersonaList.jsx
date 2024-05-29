import React, { useState, useEffect } from 'react';
import api from '../../App';


const PersonaList = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await api.get('/personas');
        setPersonas(response.data);
      } catch (error) {
        console.error('Error fetching personas:', error);
      }
    };

    fetchPersonas();
  }, []);

  return (
    <div className='modulo-vista-container'>
      <h1>Personas</h1>
      <table>
        <tbody>
          <td>
            <th>ID</th>
          </td>
          <td>
            <th>Nombre</th>
          </td>
          <td>
            <th>Apellido</th>
          </td>
          <td>
            <th>Email</th>
          </td>
        </tbody>
      </table>
      <ul>
        {personas.map(persona => (
          <li key={persona.id}>
            <strong>Nombre:</strong> {persona.nombre} <br />
            <strong>Apellido:</strong> {persona.apellido} <br />
            <strong>Correo Electrónico:</strong> {persona.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonaList;
