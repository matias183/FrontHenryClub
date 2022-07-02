import React from 'react';
import Search from '../components/searchbar/SearchBar';
// import Barra from '../Barra/Barra';
import { Link } from 'react-router-dom';
import logoHenry from '../utils/fotos/logo.gif';
import { FaArrowCircleRight, FaUserAlt } from 'react-icons/fa';
import './NavBar.css';
import { useState } from 'preact/hooks';
import { loginMember } from '../redux/Actions/Action';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const logOut = e => {
    // e.preventDefault();
    window.localStorage.removeItem('data');
    window.localStorage.removeItem('token');
    alert('Adios!');
  };

  return (
    <div>
      <div className="header">
        {' '}
        {/* container del header  */}
        <Link to="/home">
          {' '}
          <img className="logo" src={logoHenry} alt="logo" />{' '}
        </Link>{' '}
        {/* logo */}
        <h1 className="titulo">Club Henry</h1> <br /> {/* titulo */}
        <div className="searchbar">
          <h2>
            {' '}
            {/* searchbar */}
            <Search />
          </h2>
        </div>
        {/* <div>{usuario ? usuario.username : 'nadie'}</div> */}
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

              <li>
                <Link to="/login">
                  <button onClick={logOut}>Cerrar Sesión</button>
                </Link>
              </li>
            </ul>
            {/* <Link to="/login">
              <span>Iniciar Sesión</span>
            </Link>{' '} */}
            {/* aca tengo la duda si estan bien las rutas, si alguien las revisa joya */}
            {/* <Link to="/registrate">
              <span>Registrate</span>
            </Link>{' '} */}
            {/* aca tengo la duda si estan bien las rutas, si alguien las revisa joya */}
          </div>
        </div>
        <br />
        {/* <div className="botonAdmin">
          <Link to={'/admin'}>
            <button>
              <span>Admin</span>
            </button>
          </Link>
        </div> */}
      </div>
      {/* <Barra /> */}
    </div>
  );
}
