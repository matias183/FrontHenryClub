import React from 'react';
import { Link } from 'react-router-dom';
import logoHenry from '../../utils/fotos/logo.gif';
import { FaArrowCircleRight} from 'react-icons/fa';
import './headerAdmin.css';

export default function navbar() {
  return (
    <div>
      <div className="header">
        <Link to="/home"><img className="logo" src={logoHenry} alt="logo" /></Link>
        <h1 className="titulo">Club Henry</h1> <br /> {/* titulo */}
        <div className="dropdown">
          <Link to="/login"><p className="botonDeslizable"><FaArrowCircleRight /> </p> </Link> 
          <div className="dropdown-content">
            <Link to="/login"><span>Iniciar Sesión</span> </Link>
            <Link to="/registrate"> <span>Registrate</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
