import React from 'react';
import Rotas from './Rotas';
import Navbar from './components/common/Navbar';
import { BrowserRouter} from 'react-router-dom';

export default function App () {
  return (
    <BrowserRouter>
    <Navbar/>
    <Rotas/>
    </BrowserRouter>
  )
};