import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/noticias">Notícias</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/atualizacoes">Atualizações</Link></li>
        <li><Link to="/usuario">Usuário</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
