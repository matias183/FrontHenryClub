import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

export default function Noticias({title, subtitle, image, id}) {
  return (
    <div>
      <div>
        <Link to={'/home'}>
          <button>
            <span>Volver</span>
          </button>
        </Link>
      </div>
      <div>
        <h1 className="titleNews">Noticias del club</h1>
        <div className="newsContainer">
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