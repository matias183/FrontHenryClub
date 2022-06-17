import React from 'react';
import S from '../Galeria de imagenes/GaleriaImg.module.css';

export default function GaleriaImg() {
  return (
    <div className={S.ContenedorGeneral}>
      <div className={S.galeria}>
        <ul>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
