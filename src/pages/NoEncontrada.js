import React from 'react';
import { Link } from 'react-router-dom';

const NoEncontrada = () => {
  return (
    <div className="not-found-layout">
      <section id="content" className="content">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, la página que buscas no existe.</p>
          <Link to="/" className="btn-volver">
            Volver al Inicio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NoEncontrada; 