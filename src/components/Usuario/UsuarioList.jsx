import React, { useState, useEffect } from 'react';
import api from '../../App';


const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get('/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error('Error fetching usuarios:', error));
  }, []);

  return (
    <div className="usuario-list">
      <h1>Usuarios</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre de Usuario</td>
            <td>Contraseña</td>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioList;
