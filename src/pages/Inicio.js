import React, { useState, useEffect } from 'react';
import { Listado } from '../components/Listado';
import Buscador from '../components/Buscador';
import Crear from '../components/Crear';

const Inicio = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  // Cargar películas del localStorage al montar el componente
  useEffect(() => {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    setPeliculas(peliculasGuardadas);
    setPeliculasFiltradas(peliculasGuardadas);
  }, []);

  // Actualizar películas filtradas cuando cambian las películas
  useEffect(() => {
    setPeliculasFiltradas(peliculas);
  }, [peliculas]);

  // Función para manejar la búsqueda
  const manejarBusqueda = (resultados) => {
    setPeliculasFiltradas(resultados);
  };

  return (
    <div className="inicio-layout">
      {/*Contenido principal*/}
      <section id="content" className="content">
        <Listado listadoState={peliculasFiltradas} setListadoState={setPeliculas} />
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <Buscador 
          peliculas={peliculas}
          onBuscar={manejarBusqueda}
        />
        <Crear setListadoState={setPeliculas} />
      </aside>
    </div>
  );
};

export default Inicio; 