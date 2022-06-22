import React from 'react';
import Search from '../components/searchbar/SearchBar';
import Barra from '../Barra/Barra';
import { Link } from 'react-router-dom';
import logoHenry from '../utils/fotos/logo.gif';
import { FaArrowCircleRight, FaUserAlt } from 'react-icons/fa';
import './NavBar.css';

export default function navbar() {
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
        <div className="dropdown">
          <Link to="/login">
            <p className="botonDeslizable">
              <FaArrowCircleRight />{' '}
            </p>{' '}
            {/* boton de INICIO DE SESION O REGISTRO desplegable*/}
          </Link>
          <div className="dropdownDos">
            {/* ENTRAR A PERFIL DE USUARIO */}
            <Link to="/login">
              <p className="botonDeslizableDos">
                <FaUserAlt />{' '}
              </p>{' '}
            </Link>
          </div>
          <div className="dropdown-content">
            <Link to="/profile/:id">
              <span>Iniciar Sesión</span>
            </Link>{' '}
            {/* aca tengo la duda si estan bien las rutas, si alguien las revisa joya */}
            <Link to="/profile/:id">
              <span>Registrate</span>
            </Link>{' '}
            {/* aca tengo la duda si estan bien las rutas, si alguien las revisa joya */}
          </div>
        </div>
        <br />
      </div>
      <Barra />
    </div>
  );
}
