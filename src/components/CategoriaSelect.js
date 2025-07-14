import React from 'react';

const categorias = [
  'Acción',
  'Comedia',
  'Drama',
  'Terror',
  'Ciencia Ficción',
  'Romance',
  'Animación',
  'Documental'
];

const CategoriaSelect = ({ value, onChange }) => (
  <select name="categoria" value={value} onChange={onChange} required>
    <option value="">Selecciona una categoría</option>
    {categorias.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </select>
);

export default CategoriaSelect; 