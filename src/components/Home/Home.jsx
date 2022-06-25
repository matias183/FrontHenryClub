import React from 'react';
import S from './Home.module.css';
import Footer from '../footer/footer.jsx';
import NavBar from '../../navbar/navbar';
import Barra from '../../Barra/Barra';
import GaleriaImg from '../Galeria de imagenes/GaleriaImg';
import News from '../News/News';

export default function Home() {
  return (
    <div className={S.contenedorGeneral}>
      <NavBar /> {/* ACA VA LA NAVBAR */}
      <Barra />
      <div className={S.contenido}>
        <div className={S.contenidoCentral}>
          <News /> {/* ACA VA EL CONTENIDO GENERAL DE LA PAGINA */}
        </div>

        <div className={S.carouselImg}>
          <GaleriaImg />
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
