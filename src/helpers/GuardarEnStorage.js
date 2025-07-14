import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const guardarEnLocalStorage = (pelicula) => {
    let peliculas = localStorage.getItem('peliculas');
    if (peliculas) {
      peliculas = JSON.parse(peliculas);
    } else {
      peliculas = [];
    }
    peliculas.push(pelicula);
    localStorage.setItem('peliculas', JSON.stringify(peliculas));

    // Mostrar alerta
    MySwal.fire({
      title: <p>Has creado la película: <b>{pelicula.titulo}</b></p>,
      icon: 'success'
    });
  }