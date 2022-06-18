import React from 'react';
import S from './Home.module.css';
import Footer from '../footer/footer';
import NavBar from '../../navbar/navbar';
import GaleriaImg from '../Galeria de imagenes/GaleriaImg'
import News from '../News/News';



export default function Home() {

  
  return (
    <div className={S.contenedorGeneral}>
     <NavBar/> {/* ACA VA LA NAVBAR */}

      <div className={S.contenido}>
        
    <div className={S.contenidoCentral}>
        <News/> {/* ACA VA EL CONTENIDO GENERAL DE LA PAGINA */}
        </div>


        <div className={S.carouselImg}>
         <GaleriaImg/> {/* ACA VA EL CARUOSEL DE IMAGENES*/}
        </div>

    
        <div className={S.iconoWsp}>{/* ACA VA EL ICONO DE WSP */}</div>    
      </div>
    <div className={S.footer}>
        <Footer/>{/* ACA VA EL FOOTER */}
        </div>

    </div>
  );
}
