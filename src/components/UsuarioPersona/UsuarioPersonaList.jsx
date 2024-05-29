import React, { useState, useEffect } from 'react';
import api from '../../App';

const UsuarioPersonaList = () => {
  const [usuarioPersonas, setUsuarioPersonas] = useState([]);

  useEffect(() => {
    const fetchUsuarioPersonas = async () => {
      try {
        const response = await api.get('/usuarioPersonas');
        setUsuarioPersonas(response.data);
      } catch (error) {
        console.error('Error fetching usuarioPersonas:', error);
      }
    };

    fetchUsuarioPersonas();
  }, []);

  return (
    <div className="usuario-persona-list">
      <h1>Usuario Personas</h1>
      <table className="usuario-persona-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Nombre de Usuario</td>
            <td>Email</td>
            <td>Contraseña</td>
          </tr>
        </thead>
        <tbody>
          {usuarioPersonas.map(usuarioPersona => (
            <tr key={usuarioPersona.id}>
              <td>{usuarioPersona.id}</td>
              <td>{usuarioPersona.nombre}</td>
              <td>{usuarioPersona.apellido}</td>
              <td>{usuarioPersona.username}</td>
              <td>{usuarioPersona.email}</td>
              <td>{usuarioPersona.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioPersonaList;
