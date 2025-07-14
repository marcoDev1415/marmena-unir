import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Listado } from '../components/Listado';

const Categoria = () => {
  const { categoria } = useParams();
  const [peliculas, setPeliculas] = useState([]);
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  // Cargar películas del localStorage al montar el componente
  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    setPeliculas(peliculasGuardadas);
  }, []);

  // Filtrar películas por categoría cuando cambia la categoría o las películas
  useEffect(() => {
    if (categoria && peliculas.length > 0) {
      const peliculasPorCategoria = peliculas.filter(
        pelicula => pelicula.categoria === decodeURIComponent(categoria)
      );
      setPeliculasFiltradas(peliculasPorCategoria);
    }
  }, [categoria, peliculas]);

  return (
    <div className="categoria-layout">
      <section id="content" className="content">
        <h2>Películas de la categoría: {decodeURIComponent(categoria)}</h2>
        <Listado listadoState={peliculasFiltradas} setListadoState={setPeliculas} />
      </section>
    </div>
  );
};

export default Categoria; 