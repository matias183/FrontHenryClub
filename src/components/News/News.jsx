import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './News.css';
import Footer from '../footer/footer';

export default function Noticias() {
  const [error, setError] = useState('');

  const [localState, setLocalState] = useState({
    name: '',
  });

  function validarInputName(e) {
    if (localState.name > 1) {
      error.name = 'Los datos no son validos.';
    } else {
      setError('');
    }
    handleChange(e);
  }
  async function handleChange(e) {
    setLocalState({
      ...localState,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    if (localState.length > 0 && typeof localState.name === 'string') {
      // dispatch(postComentario(localState)); NECESITO LA ACTION DE POST COMENTARIOS.
      setLocalState({
        name: '',
        comentario: '',
      });
      e.preventDefault();

      alert('Comentario Enviado');
    } else {
      alert('Todos los campos deben llenares para la enviar su comentario.');
    }
  }


export default function noticias({title, subtitle, text, image, id}) {

  return (
    <div>
      <div>
        <Link to={'/home'}>
          <button>
            <span>Volver</span>
          </button>
        </Link>
      </div>
      <h1 className="titleNews">Noticias del club</h1>
      <div className="newsContainer">
        <div>

          <div className="news">
            <img
              src="https://imagenes.elpais.com/resizer/CahsaaNXHL9-FdAX72zScMZtTu8=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SU7EFDELFA7VVUEMTQNS26S4HQ.jpg"
              alt="img not found"
              className="imgNews"
            />
            <span>1 Setiembre, 2021 - Fútbol</span>
            <h2>Partido Amistoso</h2>
            <p className="textDescription">
              El día jueves se llevo a un partido amistoso en el club y muchos
              padres pudieron ver a sus hijos jugar por primera vez.
            </p>
            <Link to="/news">Leer Más...</Link>
          </div>
        </div>
        <div>
          <div className="news">
            <img
              src="https://www.geriatricarea.com/wp-content/uploads/2020/03/geriatricarea-Covid19-coronavirus.jpg"
              alt="img not found"
              className="imgNews"
            />
            <span>27 Enero, 2022 - Hockey</span>
            <h2>Las clase se cancelan</h2>
            <p className="textDescription">
              Debido a 5 casos de COVID-19 en las clases de Hockey se cancelan
              las clases durante 2 semanas. El dia 10 de febrero deberan
              presentarse con el hisopado negativo para volver a las
              actividades.
            </p>
            <Link to="/news">Leer Más...</Link>
          </div>
        </div>

          <div className='news'>
            <img src={image} alt='img not found' className='imgNews'/>
            <h2>{title}</h2>
            <span>{subtitle}</span>
            <Link to={'/news/' + id}>
              Leer Más...
            </Link>
          </div>
        </div>

      </div>

      <div className="seccionComentarios">
        <section>
          <h3>Comentarios:</h3>
          <div className="inputName">
            <label htmlFor="">Nombre</label>
            <input onChange={validarInputName} type="text" />
            <div className="error">
              <p>
                {error !== 'Los datos no son validos.' ? null : (
                  <p>El nombre no puede estar vacio.</p>
                )}
              </p>
            </div>
          </div>

          <div>
            <textarea
              name=""
              id=""
              cols="50"
              rows="5"
              placeholder="Escribe tu comentario..."
            ></textarea>
          </div>
          <div className="enviarComentario">
            <button onSubmit={handleSubmit} type="submit">
              <span>Enviar</span>
            </button>
          </div>
        </section>

        {/* NECESITO TENER ESTADO DE REDUX PARA MAPEAR COMENTARIOS Y QUE SE VEAN CUANDO SE SUBMITEEN, HACER UN LOCAL STATE*/}
        <section>
          <div className="seccionComentariosHechos">
            <h3>Comentarios:</h3>
            <div>
              <div className="comentariosHechos">
                {/* <p>{localState."algo".join('<br/> ')}</p> */}
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
