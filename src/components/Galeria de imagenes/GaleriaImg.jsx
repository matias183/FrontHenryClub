import React from 'react';
import S from './GaleriaImg.module.css';
import aux1 from '../../utils/fotos/aux1.jpg';
import aux2 from '../../utils/fotos/aux2.jpg';
import aux3 from '../../utils/fotos/aux3.jpg'

export default function GaleriaImg() {
  return (
    <div className={S.ContenedorGeneral}>
      <div className={S.galeria}>
        <h3> hola soy galeria</h3>
        <ul>
          <li>
            <img src={aux1} alt="foto1" />
          </li>
          <li>
            <img src={aux2} alt="foto2" />
          </li>
          <li>
            <img src={aux3} alt="foto3" />
          </li>
        </ul>
      </div>
    </div>
  );
}
