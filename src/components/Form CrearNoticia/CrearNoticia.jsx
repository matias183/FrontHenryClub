//
//
//
// ESCRIBIR EN CONSOLA "npm i"
//
//
//
import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { createNews } from '../../redux/Actions/Action';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

const schema = yup.object().shape({
  foto: yup
    .mixed()
    .required('Necesitas subir una foto.')
    .test('fileSize', 'El archivo es muy grande.', value => {
      console.log(value);
      return value && value[0].size <= 10000000;
    })
    .test('type', 'Solo se soporta archivos "JPG, JPEG ,PNG, SVG"', value => {
      return (
        (value && value[0].type === 'image/jpg') ||
        value[0].type === 'image/jpeg' ||
        value[0].type === 'image/png' ||
        value[0].type === 'image/png'
      );
    }),
});

export default function CrearAnuncio() {
  // estados:
  const dispatch = useDispatch();

  //CREAR UN USESELECTOR PARA EL ESTADO DE SPORTS
  // const noticias = useSelector(state => state.sports);

  const [error, setError] = useState('');

  const [input, setInput] = useState({
    id: '',
    title: '',
    subtitle: '',
    text: '',
    image: '',
    sportId: '',
    userId: '',
    news: [],
  });

  // useEffect(() => {
  //   dispatch(getNews());
  // }, []);

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

  async function handleSubit(e) {
    if (
      input.news.length > 0 &&
      input.title.length > 0 &&
      typeof input.title === 'string' &&
      input.subtitle.length > 0 &&
      typeof input.subtitle === 'string' &&
      input.text.length > 0 &&
      input.image
    ) {
      dispatch(createNews(input));
      setInput({
        id: '',
        title: '',
        subtitle: '',
        text: '',
        image: '',
        sportId: '',
        userId: '',
        news: [],
      });
      e.preventDefault();
      alert('Noticia Creada');
    } else {
      alert('Todos los campos deben llenarse para publicar su noticia.');
    }
  }

  // async function handleChange(e) {
  //   setInput({
  //     ...input,
  //     [e.target.title]: e.target.value,
  //   });
  // }

  return (
    <div>
      <Link to={'/home'}>
        <button>
          <span>Volver</span>
        </button>
      </Link>
      <h1>Crear Noticias</h1>
      <form onSubmit={handleSubit} id="form">
        <label htmlFor="">Seleccionar deporte:</label>
        <select name="" id="">
          {/* HACER UN MAPEO PARA EL DEPORTE A SELECCIONAR */}
          <option value="">Deporte</option>
          {sport?.map()}
        </select>

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
        <input type="file" name="foto" onChange={validarImagen} />
        {error.foto && <p>{error.foto.message}</p>}

        <button id="boton" onChange={getNews} value="Publicar" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}
