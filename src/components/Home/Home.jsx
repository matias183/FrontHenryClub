import React, { useEffect, useState } from 'react';
import { getNews, postNewLetters, googleLogin } from '../../redux/Actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import S from './Home.module.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Modal from '../Calendario/Modal';
import NavBar from '../../navbar/navbar';
import GaleriaImg from '../Galeria de imagenes/GaleriaImg';
import News from '../News/News';
import flyerUno from '../../utils/fotos/flyer1.png';
import flyerDos from '../../utils/fotos/flyer2.png';
import flyerTres from '../../utils/fotos/flayerTres.png';
import PuffLoader from 'react-spinners/PuffLoader';

// import Barra from '../../Barra/Barra';
// import GaleriaDeFotos from '../SeccionFotos/Fotos';
// import futbol from '../../utils/fotos/futbol.jpg';
// import tenis from '../../utils/fotos/tenis.jpg';
// import basket from '../../utils/fotos/basket.jpg';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  const [loading, setLoading] = useState(false);
  
  const {user, isAuthenticated} = useAuth0()

  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState('')

  // console.log(user)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const news = useSelector(state => state.news);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(()=>{
    console.log(isAuthenticated)
    isAuthenticated && !localStorage.getItem('token') && dispatch(googleLogin(user))
  },[isAuthenticated])


  function NewLetters() {
    setModal(!modal);
  }

  const HandleChange = e => {
    setEmail({
      ...email,
      [e.target.name] : e.target.value
    })
  }

  const HandleSubmit = () => {
    dispatch(postNewLetters(email))
    setEmail('')
    setModal(false)
  }

  return (
    <div>
      {loading ? (
        <PuffLoader
          className={S.loader}
          display={'flex'}
          justify-content={'center'}
          margin={'auto'}
          align-items={'center'}
          size={200}
          background={'transparent'}
          color={'#e78345'}
          loading={loading}
        />
      ) : (
        <div>
          <NavBar />

          <div>
            <GaleriaImg />
          </div>
          <div className={S.quienesSomos}>
            <h2>¿Quienes Somos?</h2>
            <p>
              Somos conscientes de la importancia de promover la competencia
              deportiva en línea con los principios del fair play. Sabemos,
              también, lo que significa participar en nuestros días en deportes
              cuyos símbolos provienen no ya solo de la práctica amateur, sino
              también- del profesionalismo de alta competición. Todo se
              encuentra teñido en nuestros días por la tradición amateur y, a la
              vez, por las demandas de la alta competencia profesional. No
              podemos sustraernos de esas dos tensiones, en buena medida
              contrapuestas, que nos obligan a encontrar siempre nuevos puntos
              de equilibrio, para honrar nuestra firme convicción de que el
              deporte, más allá de las crecientes exigencias físicas y técnicas,
              debe constituir un decidido aporte a la recreación y a la
              formación de personas que, desde su infancia, incorporen a su plan
              de vida la disciplina, la sociabilidad, la amistad con compañeros
              y adversarios, el deseo de superación y la capacidad para competir
              lealmente.
            </p>
          </div>
          <div className={S.contenedorGeneral}>
            <div className={S.carouselImg}>{/* <GaleriaImg /> */}</div>
            {/* <Barra /> */}
            <div className={S.contenido}>
              <section id="deportes">
                <h2 className={S.titleActividades}>Actividades</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                  <path
                    fill="#e78345"
                    fill-opacity="1"
                    d="M0,0L480,96L960,64L1440,96L1440,320L960,320L480,320L0,320Z"
                  ></path>
                </svg>
                <div className={S.deportes}>
                  <div className={S.deporte}>
                    <div className={S.futbol}>
                      {/* <h3>Fútbol</h3>
              <p>
                Nuestro objetivo es desarrollar al fútbol como un deporte y
                una cultura.
              </p>
              <p>Conoce más sobre nuestras categorías y planes</p>
              <Link to="/futbol">
                <button>Ver actividades</button>
              </Link>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/1200px-Football_iu_1996.jpg"
                alt="img not found"
                className={S.imagen}
              /> */}
                      <img src={flyerUno} alt="" />
                      <Link to="/futbol">
                        <button>Ver actividades</button>
                      </Link>
                    </div>
                  </div>
                  <div className={S.deporte}>
                    <div className={S.hockey}>
                      {/* <h3>Hockey</h3>
              <p>
                Las clases son impartidas por instructores certificados con
                entrenamiento personal y asesoramiento nutricional como
                componentes clave para su viaje de acondicionamiento físico.
                ¡Estamos comprometidos a ayudarlo a obtener la mejor
                experiencia de acondicionamiento físico!{' '}
              </p>
              <p>Conoce más sobre nuestras categorías y planes</p>
              <Link to="/hockey">
                <button>Ver actividades</button>
              </Link>
            </div>
            <div>
              <img
                src="https://www.casi.org.ar/wp-content/uploads/2021/12/Escuelita-hockey-5.jpg"
                alt="img not found"
                className={S.imagen}
              /> */}
                      <img src={flyerTres} alt="" />
                      <Link to="/hockey">
                        <button>Ver actividades</button>
                      </Link>
                    </div>
                  </div>
                  <div className={S.deporte}>
                    <div className={S.natacion}>
                      {/* <h3>Natación</h3>
              <p>
                Te ayudaré a alcanzar tus objetivos de acondicionamiento
                físico y sentirte lo mejor posible. ¡Nuestro objetivo es
                ayudarte a dar lo mejor de ti!
              </p>
              <p>Conoce más sobre nuestras categorías y planes</p>
              <Link to="/natacion">
                <button>Ver actividades</button>
              </Link>
            </div>
            <div>
              <img
                src="https://www.aquara.com.mx/wp-content/uploads/2015/04/Natacion.jpg"
                alt="img not found"
                className={S.imagen}
              /> */}
                      <img src={flyerDos} alt="" />
                      <Link to="/natacion">
                        <button>Ver actividades</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 330">
                  <path
                    fill="#e78345"
                    fill-opacity="1"
                    d="M0,0L480,96L960,64L1440,96L1440,0L960,0L480,0L0,0Z"
                  ></path>
                </svg>
              </section>
              <section id="noticias">
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
              </section>
              <section>
              <button className={S.botonNL} onClick={NewLetters}>Suscritibe para que te lleguen nuestras novedades</button>
            <Modal estado={modal} cambiarEstado={setModal}>
              <form>
                <input 
                  name='email'
                  type='text'
                  value={email.email}
                  placeholder='Ingresa tu email'
                  onChange={HandleChange}
                />
                <button onClick={HandleSubmit}>Ok</button>
              </form>
            </Modal>
              </section>
              <div className={S.iconoWsp}>{/* ACA VA EL ICONO DE WSP */}</div>
            </div>
            <div className={S.footer}>
              <Footer />
              {/* ACA VA EL FOOTER */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
