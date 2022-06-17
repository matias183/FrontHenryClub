import React from 'react';
import S from '../Landing/Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className={S.contenedorGeneral}>
      <div className={S.titulo}>
        <h1>Titulo</h1>
      </div>
      <div className={S.logo}>
        {/* aca va el logo */}
        <img src="" alt="" />
      </div>

      <div className={S.btnRegistro}>
        <Link to={'/registro'}>
          <button>Registrate</button>
        </Link>
      </div>

      <Link to={'/home'}>
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
