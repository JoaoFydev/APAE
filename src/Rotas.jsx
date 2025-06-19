import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Noticias from './pages/Noticias/Noticias';
import Eventos from './pages/Eventos/Eventos';
import Atualizacoes from './pages/Atualizacoes/Atualizacoes';
import Usuario from './pages/Usuario/Usuario';

function Rotas() {
  return (
          
          <Routes>
          <Route exact path="/" element={<Home />} />
            <Route exact path="/noticias" element={<Noticias />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/atualizacoes" element={<Atualizacoes />} />
            <Route path="/usuario" element={<Usuario />} />
            </Routes>
          
  );
}

export default Rotas;