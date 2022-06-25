import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNews } from '../../redux/Actions/Action';
import './News.css';

export default function Noticias({ title, subtitle, image }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const noticia = useSelector(state => state.news);

  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);

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
          <div className="news" key={title}>
            <img
              src={
                image
                  ? image
                  : 'https://pbs.twimg.com/profile_images/631795502665756672/fZ5AQUNF_400x400.jpg'
              }
              alt="img not found"
              className="imgNews"
            />
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <Link to={`/news/ ${id}`}>Leer Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
