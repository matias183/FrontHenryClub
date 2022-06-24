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
      <h1>Crear Noticias</h1>
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
import React, { useEffect, useState } from 'react';
import { CreateNews } from '../../redux/Actions/Action';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function CrearAnuncio() {
  // estados:
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const [input, setInput] = useState({
    title: '',
    subtitle: '',
    text: '',
    image: '',
  });

  useEffect(() => {
    dispatch();
  });

  // validaciones:
  function validarNombre(e) {
    if (/\d/.test(e.target.value)) {
      //fijarse RegEx
      setError('Datos Nombre Invalidos.');
    } else {
      setError('');
    }
    handleChange(e);
  }

  function validarSubtitulo(e) {
    if (!/\d/.test(e.target.value)) {
      //fijarse RegEx
      setError('Datos Subtitulos Invalidos.');
    } else {
      setError('');
    }
    handleChange(e);
  }

  function validarTextNoticia(e) {
    if (/\d/.test(evt.target.value) && evt.target.value > 20) {
      setError('Texto invalido.');
    } else {
      setError('');
    }
    handleChange(e);
  }

  //FIJARSE COMO VALIDAR EL INPUT FILE
  // function validarImagen(e) {
  //   if (/\d/.test(evt.target.value) && evt.target.value > 20) {
  //     // fijarse RegEx que es igual a los demas PERO PARA IMAGENES DEL INPUT "FILE"
  //     setError('Formato de imagen invalido.');
  //   } else {
  //     setError('');
  //   }
  //   handleChange(e);
  // }

  return (
    <div>
      <Link to={'/home'}>
        <button>
          <span>Volver</span>
        </button>
      </Link>
      <h1>Crear Noticias</h1>
      <form>
        <label htmlFor="">Titulo de Noticia: </label>
        <input type="text" onChange={validarNombre} />

        <label htmlFor="">Subtitulo de Noticia: </label>
        <input type="text" onChange={validarSubtitulo} />

        <label htmlFor="">Descripción de Noticia: </label>
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          placeholder="Escribe la noticia"
          onChange={validarTextNoticia}
        ></textarea>

        <label htmlFor="">Imagen de la Noticia: </label>
        {/* HACER ONCHANGE PARA INPUT FILE */}
        <input type="file" />

        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}
