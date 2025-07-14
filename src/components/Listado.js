import React, { useState } from 'react';
import Swal from 'sweetalert2';
import EliminarPelicula from './EliminarPelicula';
import EditarPelicula from './Editarpelicula';

export const Listado = ({ listadoState, setListadoState }) => {
  const [peliculaEditando, setPeliculaEditando] = useState(null);

  // Mostrar alerta si no hay películas (con un pequeño delay)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (listadoState.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Sin películas',
          text: 'No hay películas guardadas en el sistema.'
        });
      }
    }, 100); // Espera 100ms para que se carguen las películas del localStorage

    return () => clearTimeout(timer);
  }, [listadoState]);

  // Función para iniciar la edición de una película
  const iniciarEdicion = (pelicula) => {
    console.log('Iniciando edición de:', pelicula.titulo);
    setPeliculaEditando(pelicula);
  };

  // Función para cancelar la edición
  const cancelarEdicion = () => {
    setPeliculaEditando(null);
  };

  // Función para guardar los cambios de la película editada
  const guardarEdicion = (peliculaActualizada) => {
    // Actualizar el estado del listado
    const listadoActualizado = listadoState.map(p => 
      p.id === peliculaActualizada.id ? peliculaActualizada : p
    );
    setListadoState(listadoActualizado);
    
    // Cerrar el formulario de edición
    setPeliculaEditando(null);
  };

  // Si hay una película en edición, mostrar solo el formulario
  if (peliculaEditando) {
    return (
      <EditarPelicula 
        pelicula={peliculaEditando}
        onCancelar={cancelarEdicion}
        onGuardar={guardarEdicion}
      />
    );
  }

  return (
    <>
      {listadoState.map(pelicula => (
        <article className="peli-item" key={pelicula.id}>
          <h3 className="title">Titulo:{pelicula.titulo}</h3>
          {pelicula.categoria && (
            <p className="categoria"><strong>Categoría:</strong> {pelicula.categoria}</p>
          )}
          <p className="descripcion"><strong>Descripcion:</strong>{pelicula.descripcion}</p>
          {pelicula.imagen && (
            <img 
              src={pelicula.imagen} 
              alt={pelicula.titulo} 
              width="320" 
              height="480" 
            />
          )}
          
          <div className="botones">
            <button 
              className="edit" 
              onClick={() => {
                console.log('Botón editar clickeado para:', pelicula.titulo);
                iniciarEdicion(pelicula);
              }}
            >
              ✏️ Editar
            </button>
            <EliminarPelicula 
              pelicula={pelicula}
              listadoState={listadoState}
              setListadoState={setListadoState}
            />
          </div>
        </article>
      ))}
    </>
  );
};
