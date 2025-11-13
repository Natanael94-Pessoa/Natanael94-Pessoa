import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const activeLinkStyle = {
    backgroundColor: '#0369a1', // Um azul mais escuro para o item ativo
    color: 'white',
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col fixed">
      <div className="p-4 border-b border-gray-700 text-2xl font-bold">
        Meu Dashboard
      </div>
      <nav className="flex-grow">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="block p-4 hover:bg-gray-700 transition-colors duration-200"
            >
              Visão Geral
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produtos"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="block p-4 hover:bg-gray-700 transition-colors duration-200"
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clientes"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="block p-4 hover:bg-gray-700 transition-colors duration-200"
            >
              Clientes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
