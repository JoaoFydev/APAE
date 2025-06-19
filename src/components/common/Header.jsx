import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Meu Site</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/about" className="text-white">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
