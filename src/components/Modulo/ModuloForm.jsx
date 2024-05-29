import React, { useState, useEffect } from 'react';
import api from '../../App';
import { Link } from 'react-router-dom';


const ModuloList = () => {
  const [modulos, setModulos] = useState([]);

  // Función para obtener y establecer los módulos desde el servidor
  const fetchModulos = async () => {
    try {
      const response = await api.get('/modulos');
      setModulos(response.data);
    } catch (error) {
      console.error('Error fetching modulos:', error);
    }
  };

  // Llamar a fetchModulos una vez que el componente esté montado
  useEffect(() => {
    fetchModulos();
  }, []);

  return (
    <div>
      <h2>Módulos</h2>
      <Link to="/modulos/new">Crear Modulo</Link>
      <ul>
        {modulos.map(modulo => (
          <li key={modulo.id}>
            {modulo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuloList;
