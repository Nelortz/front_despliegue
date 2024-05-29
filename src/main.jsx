import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './style.css';

// Import Persona components
import PersonaList from './components/Persona/PersonaList';
import PersonaForm from './components/Persona/PersonaForm';
import PersonaDetails from './components/Persona/PersonaDetails';

// Import Usuario components
import UsuarioList from './components/Usuario/UsuarioList';
import UsuarioForm from './components/Usuario/UsuarioForm';
import UsuarioDetails from './components/Usuario/UsuarioDetails';

// Import Rol components
import RolList from './components/Rol/RolList';
import RolForm from './components/Rol/RolForm';
import RolDetails from './components/Rol/RolDetails';

// Import Vista components
import VistaList from './components/Vista/VistaList';
import VistaForm from './components/Vista/VistaForm';
import VistaDetails from './components/Vista/VistaDetails';

// Import Modulo components
import ModuloList from './components/Modulo/ModuloList';
import ModuloForm from './components/Modulo/ModuloForm';
import ModuloDetails from './components/Modulo/ModuloDetails';

// Import ModuloRol components
import ModuloRolList from './components/ModuloRol/ModuloRolList';
import ModuloRolForm from './components/ModuloRol/ModuloRolForm';
import ModuloRolDetails from './components/ModuloRol/ModuloRolDetails';

// Import ModuloVista components
import ModuloVistaList from './components/ModuloVista/ModuloVistaList';
import ModuloVistaForm from './components/ModuloVista/ModuloVistaForm';
import ModuloVistaDetails from './components/ModuloVista/ModuloVistaDetails';

// Import UsuarioPersona components
import UsuarioPersonaList from './components/UsuarioPersona/UsuarioPersonaList';
import UsuarioPersonaForm from './components/UsuarioPersona/UsuarioPersonaForm';
import UsuarioPersonaDetails from './components/UsuarioPersona/UsuarioPersonaDetails';

// Import UsuarioRol components
import UsuarioRolList from './components/UsuarioRol/UsuarioRolList';
import UsuarioRolForm from './components/UsuarioRol/UsuarioRolForm';
import UsuarioRolDetails from './components/UsuarioRol/UsuarioRolDetails';
import Nav from './components/Nav/Nav';



const App = () => (
  <Router>
    <Nav/>
    <Routes>
      {/* Persona routes */}
      <Route path="/personas" element={<PersonaList />} />
      {/* <Route path="/personas/new" element={<PersonaForm />} /> */}
      <Route path="/personas/:id" element={<PersonaDetails />} />
      
      {/* Usuario routes */}
      <Route path="/usuarios" element={<UsuarioList />} />
      <Route path="/usuarios/new" element={<UsuarioForm />} />
      <Route path="/usuarios/:id" element={<UsuarioDetails />} />
      
      {/* Rol routes */}
      <Route path="/roles" element={<RolList />} />
      <Route path="/roles/new" element={<RolForm />} />
      <Route path="/roles/:id" element={<RolDetails />} />
      
      {/* Vista routes */}
      <Route path="/vistas" element={<VistaList />} />
      <Route path="/vistas/new" element={<VistaForm />} />
      <Route path="/vistas/:id" element={<VistaDetails />} />
      
      {/* Modulo routes */}
      <Route path="/modulos" element={<ModuloList />} />
      <Route path="/modulos/new" element={<ModuloForm />} />
      <Route path="/modulos/:id" element={<ModuloDetails />} />
      
      {/* ModuloRol routes */}
      <Route path="/moduloRoles" element={<ModuloRolList />} />
      <Route path="/moduloRoles/new" element={<ModuloRolForm />} />
      <Route path="/moduloRoles/:id" element={<ModuloRolDetails />} />
      
      {/* ModuloVista routes */}
      <Route path="/moduloVistas" element={<ModuloVistaList />} />
      <Route path="/moduloVistas/new" element={<ModuloVistaForm />} />
      <Route path="/moduloVistas/:id" element={<ModuloVistaDetails />} />
      
      {/* UsuarioPersona routes */}
      <Route path="/usuarioPersonas" element={<UsuarioPersonaList />} />
      <Route path="/usuarioPersonas/new" element={<UsuarioPersonaForm />} />
      <Route path="/usuarioPersonas/:id" element={<UsuarioPersonaDetails />} />
      
      {/* UsuarioRol routes */}
      <Route path="/usuarioRoles" element={<UsuarioRolList />} />
      <Route path="/usuarioRoles/new" element={<UsuarioRolForm />} />
      <Route path="/usuarioRoles/:id" element={<UsuarioRolDetails />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

