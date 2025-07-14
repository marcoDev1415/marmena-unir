import React from 'react';
import { Link } from 'react-router-dom';

const categorias = [
  'Acción',
  'Comedia',
  'Drama',
  'Terror',
  'Ciencia Ficción',
  'Romance',
  'Animación',
  'Documental'
];

const Navbar = () => (
  <nav className="nav">
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li>
        <span>Categorías</span>
        <ul className="submenu">
          {categorias.map(cat => (
            <li key={cat}>
              <Link to={`/categoria/${encodeURIComponent(cat)}`}>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li><Link to="/peliculas">Películas</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
  </nav>
);

export default Navbar; 