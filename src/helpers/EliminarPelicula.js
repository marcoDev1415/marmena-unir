import Swal from 'sweetalert2';

export const eliminarPeliculaHelper = (pelicula, listadoState, setListadoState) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar la película "${pelicula.titulo}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar del estado
        const nuevasPeliculas = listadoState.filter(p => p.id !== pelicula.id);
        setListadoState(nuevasPeliculas);
        
        // Eliminar del localStorage
        localStorage.setItem('peliculas', JSON.stringify(nuevasPeliculas));
        
        // Mostrar mensaje de éxito
        Swal.fire({
          title: '¡Eliminada!',
          text: `La película "${pelicula.titulo}" ha sido eliminada.`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        
        resolve(true); // Película eliminada
      } else {
        resolve(false); // Cancelado
      }
    });
  });
};

// Helper para eliminar múltiples películas
export const eliminarMultiplesPeliculas = (peliculasAEliminar, listadoState, setListadoState) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar ${peliculasAEliminar.length} películas?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar todas',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Obtener IDs de las películas a eliminar
        const idsAEliminar = peliculasAEliminar.map(p => p.id);
        
        // Filtrar películas que no están en la lista de eliminación
        const nuevasPeliculas = listadoState.filter(p => !idsAEliminar.includes(p.id));
        setListadoState(nuevasPeliculas);
        
        // Actualizar localStorage
        localStorage.setItem('peliculas', JSON.stringify(nuevasPeliculas));
        
        // Mostrar mensaje de éxito
        Swal.fire({
          title: '¡Eliminadas!',
          text: `${peliculasAEliminar.length} películas han sido eliminadas.`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}; 