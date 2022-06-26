import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, detailNews, getComments } from '../../redux/Actions/Action';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

export default function NewsDetail() {
 
  const { id } = useParams();
 
  const dispatch = useDispatch();
 
  const noticia = useSelector(state => state.newsDetail);

  const comentario = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(detailNews(id));
    dispatch(getComments())
  }, []);

  const [error, setError] = useState('');

  const [localState, setLocalState] = useState({
    name: '',
    comment: '',
  });

  function handleChange(e) {
    setLocalState({
      ...localState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof localState.name === 'string' && localState.comment.trim() !== "") {
      dispatch(createComment(id,localState))
      setLocalState({
        name: '',
        comment: '',
      });
      alert('Comentario Enviado');
      dispatch(getComments())
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
                {comentario?.map((comment,i) => (
                  <div key={i}>
                  <h3>{comment.name}</h3>
                  <h4>{comment.comment}</h4>
                  </div>
                ))}
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="sectionEscribirComentario">
          <div className="inputName">

            <label htmlFor="">Nombre</label>
            <input name="name" value={localState.name} onChange={handleChange} type="text" />
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
              id=""
              name="comment"
              cols="50"
              value={localState.comment}
              onChange={handleChange}
              rows="5"
              placeholder="Escribe tu comentario..."
              ></textarea>
          </div>
          <div className="enviarComentario">
            <button onClick={handleSubmit} type="button">
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
