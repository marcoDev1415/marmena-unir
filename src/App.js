import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Categoria from './pages/Categoria';
import Peliculas from './pages/Peliculas';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import NoEncontrada from './pages/NoEncontrada';

function App() {
  return (
    <Router>
      <div className="layout">
        {/*Cabecera*/}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <Navbar />

        {/*Rutas principales*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/categoria/:categoria" element={<Categoria />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>

        {/*Pie de página*/}
        <footer className="footer">
          &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
