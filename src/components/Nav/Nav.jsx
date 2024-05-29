import React, { useState } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  

  return (
    <header>
        <h1>Sistema Gestión</h1>
        <nav>
            <ul>
                <li><NavLink to="/personas">Personas</NavLink></li>
                <li><NavLink to="/usuarios">Usuarios</NavLink></li>
                <li><NavLink to="/roles">Roles</NavLink></li>
                <li><NavLink to="/vistas">Vistas</NavLink></li>
                <li><NavLink to="/modulos">Módulos</NavLink></li>
                <li><NavLink to="/moduloroles">Módulo Roles</NavLink></li>
                <li><NavLink to="/modulovistas">Módulo Vistas</NavLink></li>
                <li><NavLink to="/usuariopersonas">Usuario Personas</NavLink></li>
                <li><NavLink to="/usuarioroles">Usuario Roles</NavLink></li>
            </ul>
        </nav>
    </header>
    
  );
};

export default Nav;
