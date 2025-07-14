import React from 'react';
import PeliculaCard from './PeliculaCard';

const VistaPublica = ({ peliculas }) => {
  return (
    <div className="vista-publica">
      <div className="vista-header">
        <h1>🎬 Catálogo de Películas</h1>
        <p>Descubre y vota por tus películas favoritas</p>
      </div>
      
      {peliculas.length === 0 ? (
        <div className="sin-peliculas">
          <h3>😔 No hay películas disponibles</h3>
          <p>Vuelve pronto para ver nuevas películas</p>
        </div>
      ) : (
        <div className="peliculas-grid">
          {peliculas.map(pelicula => (
            <PeliculaCard 
              key={pelicula.id} 
              pelicula={pelicula} 
            />
          ))}
        </div>
      )}
      
      <div className="vista-footer">
        <p>Total de películas: {peliculas.length}</p>
      </div>
    </div>
  );
};

export default VistaPublica; 