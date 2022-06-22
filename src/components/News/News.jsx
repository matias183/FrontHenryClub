import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

export default function Noticias({ title, subtitle, image, id }) {
  return (
    <div>
      <div>
        <Link to={'/home'}>
          <button>
            <span>Volver</span>
          </button>
        </Link>
      </div>
      <div>
        <h1 className="titleNews">Noticias del club</h1>
        <div className="newsContainer">
          <div className="news">
            <img src={image} alt="img not found" className="imgNews" />
            <h2>{title}</h2>
            <span>{subtitle}</span>
            <Link to={'/news/' + id}>Leer Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
