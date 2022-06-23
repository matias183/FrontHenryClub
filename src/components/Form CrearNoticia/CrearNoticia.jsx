import React from 'react';
import { Link } from 'react-router-dom';

export default function CrearAnuncio() {
  return (
    <div>
      <Link to={'/home'}>
        <button>
          <span>Volver</span>
        </button>
      </Link>
      <h1>Crear Noticia</h1>
      <form>
        <label htmlFor="">Titulo de Noticia: </label>
        <input type="text" />

        <label htmlFor="">Subtitulo de Noticia: </label>
        <input type="text" />

        <label htmlFor="">Descripción de Noticia: </label>
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          placeholder="Escribe la noticia"
        ></textarea>

        <label htmlFor="">Imagen de la Noticia: </label>
        <input type="file" />

        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}
