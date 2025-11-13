import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import VisaoGeral from './pages/VisaoGeral';
// Crie estes componentes básicos para as outras rotas
import Produtos from './pages/Produtos';
import Clientes from './pages/Clientes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<VisaoGeral />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
