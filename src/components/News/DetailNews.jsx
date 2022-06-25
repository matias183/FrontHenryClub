import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { detailNews } from '../../redux/Actions/Action';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

export default function NewsDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const noticia = useSelector(state => state.newsDetail);

  useEffect(() => {
    dispatch(detailNews(id));
  }, [dispatch, id]);

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

  return (
    <div>
      <Link to={'/home'}>
        <button>
          <span>Volver</span>
        </button>
      </Link>
      <div className="detalleNoticia">
        {
          <div>
            <h2> {noticia.title}</h2>
            <img
              src={
                noticia.image
                  ? noticia.image
                  : 'https://pbs.twimg.com/profile_images/631795502665756672/fZ5AQUNF_400x400.jpg'
              }
              alt="img not found"
            />
            <h4>{noticia.subtitle}</h4>
            <p> {noticia.text} </p>
          </div>
        }
      </div>
      <div className="seccionComentarios">
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
        <hr />
        <section className="sectionEscribirComentario">
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
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
