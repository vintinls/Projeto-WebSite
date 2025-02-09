// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/Sobre';
import Avaliacoes from './pages/Avaliacoes';
import TendaLouge from './pages/TendaLounge';
import CabanasDuplas from './pages/CabanasDuplas';
import Bangalo from './pages/Bangalo';
import Pijamas from './pages/Pijamas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/TendaLouge" element={<TendaLouge />} />
        <Route path="/CabanasDuplas" element={<CabanasDuplas />} />
        <Route path="/Bangalo" element={<Bangalo />} />
        <Route path="/Pijamas" element={<Pijamas />} />
      </Routes>
    </Router>
  );
}

export default App;
