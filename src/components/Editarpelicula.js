import React, { useState, useEffect } from 'react';
import { guardarEnLocalStorage } from '../helpers/GuardarEnStorage';
import CategoriaSelect from './CategoriaSelect';
import Swal from 'sweetalert2';

export default function EditarPelicula({ pelicula, onCancelar, onGuardar }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagenActual, setImagenActual] = useState(null);
  const [nuevaImagen, setNuevaImagen] = useState(null);

  // Cargar los datos de la película al montar el componente
  useEffect(() => {
    if (pelicula) {
      setTitulo(pelicula.titulo || '');
      setDescripcion(pelicula.descripcion || '');
      setCategoria(pelicula.categoria || '');
      setImagenActual(pelicula.imagen || null);
    }
  }, [pelicula]);

  const manejarSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!titulo.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El título es obligatorio'
      });
      return;
    }

    if (!descripcion.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La descripción es obligatoria'
      });
      return;
    }

    if (!categoria) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes seleccionar una categoría'
      });
      return;
    }

    // Si hay una nueva imagen, procesarla
    if (nuevaImagen) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const peliculaActualizada = {
          ...pelicula,
          titulo: titulo.trim(),
          descripcion: descripcion.trim(),
          categoria: categoria,
          imagen: reader.result
        };
        actualizarPelicula(peliculaActualizada);
      };
      reader.readAsDataURL(nuevaImagen);
    } else {
      // Sin nueva imagen, mantener la actual
      const peliculaActualizada = {
        ...pelicula,
        titulo: titulo.trim(),
        descripcion: descripcion.trim(),
        categoria: categoria,
        imagen: imagenActual
      };
      actualizarPelicula(peliculaActualizada);
    }
  };

  const actualizarPelicula = (peliculaActualizada) => {
    // Obtener todas las películas del localStorage
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];
    
    // Encontrar y actualizar la película
    const peliculasActualizadas = peliculasGuardadas.map(p => 
      p.id === pelicula.id ? peliculaActualizada : p
    );

    // Guardar en localStorage
    localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));

    // Llamar a la función de guardar (actualizar el estado del padre)
    onGuardar(peliculaActualizada);

    // Mostrar mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Actualizada!',
      text: `La película "${peliculaActualizada.titulo}" ha sido actualizada.`,
      timer: 2000,
      showConfirmButton: false
    });

    // Cerrar el formulario
    onCancelar();
  };

  const manejarCambioImagen = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      setNuevaImagen(archivo);
    }
  };

  const eliminarImagen = () => {
    setImagenActual(null);
    setNuevaImagen(null);
    // Limpiar el input de archivo
    const inputArchivo = document.getElementById('imagen-edit');
    if (inputArchivo) inputArchivo.value = '';
  };

  return (
    <div className="edit-form">
      <h3 className="title">✏️ Editar película</h3>
      
      <form onSubmit={manejarSubmit}>
        <input 
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        
        <textarea 
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows="4"
          required
        />
        
        <CategoriaSelect 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)} 
        />
        <br />
        
        {/* Mostrar imagen actual */}
        {imagenActual && (
          <div className="imagen-actual">
            <p><strong>Imagen actual:</strong></p>
            <img 
              src={imagenActual} 
              alt="Imagen actual" 
              style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
            />
            <br />
            <button 
              type="button" 
              onClick={eliminarImagen}
              className="btn-eliminar-imagen"
            >
              🗑️ Eliminar imagen
            </button>
          </div>
        )}
        
        <input 
          type="file" 
          id="imagen-edit"
          accept="image/*"
          onChange={manejarCambioImagen}
        />
        <small>
          {imagenActual ? 'Selecciona una nueva imagen para reemplazar la actual' : 'Selecciona una imagen'}
        </small>
        
        <div className="form-buttons">
          <input type="submit" value="💾 Guardar cambios" className="btn-guardar" />
          <button 
            type="button" 
            onClick={onCancelar}
            className="btn-cancelar"
          >
            ❌ Cancelar
          </button>
        </div>
      </form>
    </div>
  );
} 