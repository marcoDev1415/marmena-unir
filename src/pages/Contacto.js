import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor completa todos los campos',
        icon: 'error'
      });
      return;
    }

    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarnos. Te responderemos pronto.',
      icon: 'success'
    });

    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-layout">
      <section id="content" className="content">
        <h1>Contacto</h1>
        <div className="contacto-content">
          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-enviar">
              Enviar Mensaje
            </button>
          </form>
          
          <div className="info-contacto">
            <h3>Información de Contacto</h3>
            <p><strong>Email:</strong> info@mispeliculas.com</p>
            <p><strong>Teléfono:</strong> +34 123 456 789</p>
            <p><strong>Dirección:</strong> Calle del Cine, 123, Madrid, España</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto; 