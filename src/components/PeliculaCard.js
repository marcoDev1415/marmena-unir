import React, { useState, useEffect } from 'react';

const PeliculaCard = ({ pelicula }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null); // 'like', 'dislike', o null

  // Cargar votos del localStorage al montar
  useEffect(() => {
    const votosGuardados = JSON.parse(localStorage.getItem('votos')) || {};
    const votosPelicula = votosGuardados[pelicula.id] || { likes: 0, dislikes: 0 };
    
    setLikes(votosPelicula.likes);
    setDislikes(votosPelicula.dislikes);

    // Verificar si el usuario ya votó esta película
    const votoUsuario = localStorage.getItem(`voto_usuario_${pelicula.id}`);
    setUserVote(votoUsuario);
  }, [pelicula.id]);

  const manejarVoto = (tipoVoto) => {
    const votosActuales = JSON.parse(localStorage.getItem('votos')) || {};
    const votosPelicula = votosActuales[pelicula.id] || { likes: 0, dislikes: 0 };

    // Si el usuario ya votó lo mismo, no hacer nada
    if (userVote === tipoVoto) return;

    // Si el usuario ya votó diferente, restar el voto anterior
    if (userVote === 'like' && tipoVoto === 'dislike') {
      votosPelicula.likes = Math.max(0, votosPelicula.likes - 1);
    } else if (userVote === 'dislike' && tipoVoto === 'like') {
      votosPelicula.dislikes = Math.max(0, votosPelicula.dislikes - 1);
    }

    // Agregar el nuevo voto
    if (tipoVoto === 'like') {
      votosPelicula.likes += 1;
    } else {
      votosPelicula.dislikes += 1;
    }

    // Guardar en localStorage
    votosActuales[pelicula.id] = votosPelicula;
    localStorage.setItem('votos', JSON.stringify(votosActuales));
    localStorage.setItem(`voto_usuario_${pelicula.id}`, tipoVoto);

    // Actualizar estado local
    setLikes(votosPelicula.likes);
    setDislikes(votosPelicula.dislikes);
    setUserVote(tipoVoto);
  };

  return (
    <div className="pelicula-card">
      <div className="card-header">
        <h3 className="card-title">{pelicula.titulo}</h3>
        {pelicula.categoria && (
          <span className="card-categoria">{pelicula.categoria}</span>
        )}
      </div>
      
      {pelicula.imagen && (
        <div className="card-imagen">
          <img 
            src={pelicula.imagen} 
            alt={pelicula.titulo} 
            className="pelicula-img"
          />
        </div>
      )}
      
      <div className="card-content">
        <p className="card-descripcion">{pelicula.descripcion}</p>
      </div>
      
      <div className="card-actions">
        <button 
          className={`btn-like ${userVote === 'like' ? 'active' : ''}`}
          onClick={() => manejarVoto('like')}
        >
          👍 Me gusta ({likes})
        </button>
        <button 
          className={`btn-dislike ${userVote === 'dislike' ? 'active' : ''}`}
          onClick={() => manejarVoto('dislike')}
        >
          👎 No me gusta ({dislikes})
        </button>
      </div>
    </div>
  );
};

export default PeliculaCard; 