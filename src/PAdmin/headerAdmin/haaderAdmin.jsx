import React from 'react';
import { Link } from 'react-router-dom';
import logoHenry from '../../utils/fotos/logo.gif';
import { FaArrowCircleRight } from 'react-icons/fa';
import './headerAdmin.css';

export default function navbar() {
  const logOut = e => {
    // e.preventDefault();
    window.localStorage.removeItem('data');
    window.localStorage.removeItem('token');
    alert('Adios!');
  };
  return (
    <div>
      <div className="header">
        <Link to="/home">
          <img className="logo" src={logoHenry} alt="logo" />
        </Link>
        <h1 className="titulo">Club Henry</h1> <br /> {/* titulo */}
        {localStorage.getItem('token') ? (
          <div className="dropdown">
            <p className="botonDeslizable">
              {localStorage.getItem('data') ? (
                <div>{JSON.parse(localStorage.getItem('data')).name}</div>
              ) : (
                'No hay usuario logueado'
              )}
            </p>{' '}
            {/* boton de INICIO DE SESION O REGISTRO desplegable*/}
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link>
                    <p>Perfil</p>
                  </Link>
                </li>
                {localStorage.getItem('data') &&
                JSON.parse(localStorage.getItem('data')).role.name ===
                  'Admin' ? (
                  <li>
                    <Link to="/admin">
                      <p>Panel Admin</p>
                    </Link>
                  </li>
                ) : null}

                <li>
                  <Link to="/login">
                    <p onClick={logOut}>Cerrar Sesión</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="dropdown">
            <Link to="/login">
              <p className="botonDeslizable">
                <FaArrowCircleRight />{' '}
              </p>{' '}
              {/* boton de INICIO DE SESION O REGISTRO desplegable*/}
            </Link>

            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/login">
                    <span>Iniciar Sesión</span>
                  </Link>
                </li>
                <li>
                  <Link to="/registrate">
                    <span>Registrate</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
