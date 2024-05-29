import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../App";


const ModuloList = () => {
  const [modulos, setModulos] = useState([]);

  // Función para obtener la lista de módulos desde la API
  const fetchModulos = async () => {
    try {
      const response = await api.get("/modulos");
      setModulos(response.data);
    } catch (error) {
      console.error("Error fetching modulos:", error);
    }
  };

  // Se ejecuta al cargar el componente para obtener los módulos
  useEffect(() => {
    fetchModulos();
  }, []);

  return (
    <div>
      <h2>Módulos</h2>

      <form id="moduloForm">
        <div>
          <label for="moduleName">Nombre del Módulo:</label>
          <input
            type="text"
            id="moduleName"
            name="moduleName"
            placeholder="Ingrese el nombre del módulo"
            required
          />
        </div>
        <button type="submit">Crear Módulo</button>
      </form>
      {/* Lista de módulos */}
      <ul>
        {/* Mapea cada módulo y crea un elemento <li> para mostrar su nombre */}
        {modulos.map((modulo) => (
          <li key={modulo.id}>{modulo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModuloList;
