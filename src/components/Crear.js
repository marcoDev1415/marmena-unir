import React, { useState } from 'react';
import { guardarEnLocalStorage } from '../helpers/GuardarEnStorage';
import CategoriaSelect from './CategoriaSelect';

export default function Crear({setListadoState}) {

  const Titulo = "Añadir pelicula";

  const [ peliculaState, setPelicula ] = useState({
    titulo: '',
    descripcion: ''
  });
  const [categoria, setCategoria] = useState('');

  const { titulo, descripcion } = peliculaState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    let imagenFile = target.imagen.files[0];
    let categoriaSeleccionada = categoria;

    if (imagenFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let pelicula = {
          id: new Date().getTime(),
          titulo: titulo,
          descripcion: descripcion,
          imagen: reader.result, // base64 string
          categoria: categoriaSeleccionada
        };
        setPelicula(pelicula);
        setListadoState(elementos => [pelicula, ...elementos]);
        guardarEnLocalStorage(pelicula);
      };
      reader.readAsDataURL(imagenFile);
    } else {
      let pelicula = {
        id: new Date().getTime(),
        titulo: titulo,
        descripcion: descripcion,
        imagen: null,
        categoria: categoriaSeleccionada
      };
      setPelicula(pelicula);
      setListadoState(elementos => [pelicula, ...elementos]);
      guardarEnLocalStorage(pelicula);
    }
  };

  return (
    <div className="add">
            <h3 className="title">{Titulo}</h3>

            {/* formulario */}
            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                 name='titulo'
                 id="titulo" 
                 placeholder="Titulo" />
                <textarea id="descripcion" 
                          name='descripcion'
                          placeholder="Descripción"></textarea>
                <CategoriaSelect value={categoria} onChange={e => setCategoria(e.target.value)} />
                <br />
                <input type="file" name="imagen" id="imagen" accept="image/*" />
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
  )
}
