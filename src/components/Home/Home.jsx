import React, { useEffect } from 'react';
import { getNews } from '../../redux/Actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import S from './Home.module.css';
import Footer from '../footer/footer.jsx';
import NavBar from '../../navbar/navbar';
import Barra from '../../Barra/Barra';
import GaleriaImg from '../Galeria de imagenes/GaleriaImg';
import News from '../News/News';
import { Link } from 'react-router-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  const news = useSelector(state => state.news);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={S.contenedorGeneral}>
      <NavBar /> {/* ACA VA LA NAVBAR */}
      <div className={S.carouselImg}>
        <GaleriaImg />
      </div>
      {/* <Barra /> */}
      <div className={S.contenido}>
        <div className={S.deportes}>
          <div className={S.deporte}>
            <div className={S.futbol}>
              <h3>Fútbol</h3>
              <p>Nuestro objetivo es desarrollar al fútbol como un deporte y una cultura.</p>
              <p>Conoce más sobre nuestras categorías y planes</p>
              <Link to='/futbol'>
                <button>
                  Ver actividades
                </button>
              </Link>
            </div>
            <div>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/1200px-Football_iu_1996.jpg' alt='img not found' className={S.imagen}/>
            </div>
          </div>
          <div className={S.deporte}>
            <div className={S.hockey}>
              <h3>Hockey</h3>
              <p>Las clases son impartidas por instructores certificados con entrenamiento personal y asesoramiento nutricional como componentes clave para su viaje de acondicionamiento físico. ¡Estamos comprometidos a ayudarlo a obtener la mejor experiencia de acondicionamiento físico! </p>
              <p>Conoce más sobre nuestras categorías y planes</p>
              <Link to='/hockey'>
                <button>
                  Ver actividades
                </button>
              </Link>
            </div>
            <div>
              <img src='https://www.casi.org.ar/wp-content/uploads/2021/12/Escuelita-hockey-5.jpg' alt='img not found' className={S.imagen}/>
            </div>
          </div>
          <div className={S.deporte}>
            <div className={S.natacion}>
              <h3>Natación</h3>
              <p>Te ayudaré a alcanzar tus objetivos de acondicionamiento físico y sentirte lo mejor posible. ¡Nuestro objetivo es ayudarte a dar lo mejor de ti!</p>
              <p>Conoce más sobre nuestras categorías y planes</p>
              <Link to='/natacion'>
                <button>
                  Ver actividades
                </button>
              </Link>
            </div>
            <div>
              <img src='https://www.aquara.com.mx/wp-content/uploads/2015/04/Natacion.jpg' alt='img not found' className={S.imagen}/>
            </div>
          </div>
        </div>
        <h1 className={S.titleNews}>Últimas noticias del club</h1>
        <div className={S.contenidoCentral}>
          {news?.slice(0, 4).map(e => {
            return (
              <News
                key={e.id}
                id={e.id}
                image={e.image}
                title={e.title}
                subtitle={e.subtitle}
              />
            );
          })}

          {/* ACA VA EL CONTENIDO GENERAL DE LA PAGINA */}
        </div>

        <div className={S.iconoWsp}>{/* ACA VA EL ICONO DE WSP */}</div>
      </div>
      <div className={S.footer}>
        <Footer />
        {/* ACA VA EL FOOTER */}
      </div>
    </div>
  );
}
