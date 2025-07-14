import React from 'react';

const Blog = () => {
  return (
    <div className="blog-layout">
      <section id="content" className="content">
        <h1>Blog de Películas</h1>
        <div className="blog-content">
          <article>
            <h2>Las mejores películas del año</h2>
            <p>Aquí encontrarás reseñas y análisis de las películas más destacadas...</p>
          </article>
          <article>
            <h2>Tendencias en el cine actual</h2>
            <p>Exploramos las nuevas tendencias y géneros emergentes en el mundo del cine...</p>
          </article>
          <article>
            <h2>Clásicos que no puedes perderte</h2>
            <p>Una selección de películas clásicas que todo cinéfilo debe ver...</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Blog; 