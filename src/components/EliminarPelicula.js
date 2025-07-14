import React from 'react';
import { eliminarPeliculaHelper } from '../helpers/EliminarPelicula';

const EliminarPelicula = ({ pelicula, listadoState, setListadoState }) => {
  
  const manejarEliminacion = async () => {
    const eliminada = await eliminarPeliculaHelper(pelicula, listadoState, setListadoState);
    
    if (eliminada) {
      console.log(`Película "${pelicula.titulo}" eliminada exitosamente`);
    } else {
      console.log('Eliminación cancelada por el usuario');
    }
  };

  return (
    <button className="delete" onClick={manejarEliminacion}>
      Eliminar
    </button>
  );
};

export default EliminarPelicula; 