import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full">
            <ul className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 text-gray-900 dark:text-white">
            <li className="border-l border-gray-300 dark:border-gray-700 pl-4"><Link to="/">Home</Link></li>
            <li className="border-l border-gray-300 dark:border-gray-700 pl-4"><Link to="/noticias">Notícias</Link></li>
            <li className="border-l border-gray-300 dark:border-gray-700 pl-4"><Link to="/eventos">Eventos</Link></li>
            <li className="border-l border-gray-300 dark:border-gray-700 pl-4"><Link to="/atualizacoes">Atualizações</Link></li>
            <li className="border-l border-gray-300 dark:border-gray-700 pl-4"><Link to="/usuario">Usuário</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
