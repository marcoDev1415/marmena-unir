import React, { useState, useEffect } from 'react';
import VistaPublica from '../components/VistaPublica';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  // Cargar películas del localStorage al montar el componente
  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    setPeliculas(peliculasGuardadas);
  }, []);

  return (
    <div className="peliculas-layout">
      <section id="content" className="content">
        <VistaPublica peliculas={peliculas} />
      </section>
    </div>
  );
};

export default Peliculas; 