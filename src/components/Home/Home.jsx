import React from 'react';
import S from './Home.module.css';

export default function Home() {
  return (
    <div className={S.contenedorGeneral}>
      {/* ACA VA LA NAVBAR */}

      <div className={S.contenido}>
        <div className={S.carouselImg}>
          {/* ACA VA EL CARUOSEL DE IMAGENES*/}
        </div>

        <div className={S.contenidoCentral}>
          {/* ACA VA EL CONTENIDO GENERAL DE LA PAGINA */}
        </div>

        <div className={S.iconoWsp}>{/* ACA VA EL ICONO DE WSP */}</div>

        <div className={S.footer}>{/* ACA VA EL FOOTER */}</div>
      </div>
    </div>
  );
}
