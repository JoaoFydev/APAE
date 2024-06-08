import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full">
            <ul className="flex justify-center space-x-4 py-4 text-gray-900 dark:text-white">
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
