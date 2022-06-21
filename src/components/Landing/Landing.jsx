import React from 'react';
import S from './Landing.module.css';
import logoHenry from '../../utils/fotos/henryclubLOGO.gif';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className={S.contenedorGeneral}>
      <div className={S.titulo}>
        <h1>Henry Club</h1>
      </div>
      <div className={S.logo}>
        {/* aca va el logo */}
        <img src={logoHenry} alt="" />
      </div>

      <div className={S.botones}>
        <div className={S.btnIngresar}>
          <Link to={'/home'}>
            <button>
              <span>Ingresar</span>
            </button>
          </Link>
        </div>

        <div className={S.btnRegistro}>
          <Link to={'/register'}>
            <button>
              <span>Registrate</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
