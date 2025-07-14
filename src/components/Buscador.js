import React, { useState } from 'react';

export default function Buscador({ peliculas, onBuscar }) {
  const [busqueda, setBusqueda] = useState('');

  const manejarBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);
    
    if (valorBusqueda.trim() === '') {
      // Si no hay búsqueda, mostrar todas las películas
      onBuscar(peliculas);
    } else {
      // Filtrar películas que contengan la palabra en título o descripción
      const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.titulo.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
        pelicula.descripcion.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
        (pelicula.categoria && pelicula.categoria.toLowerCase().includes(valorBusqueda.toLowerCase()))
      );
      onBuscar(peliculasFiltradas);
    }
  };

  const limpiarBusqueda = () => {
    setBusqueda('');
    onBuscar(peliculas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          id="search_field" 
          placeholder="Buscar por título, descripción o categoría..."
          value={busqueda}
          onChange={manejarBusqueda}
        />
        <button type="button" onClick={limpiarBusqueda}>
          {busqueda ? 'Limpiar' : 'Buscar'}
        </button>
      </form>
    </div>
  );
}
