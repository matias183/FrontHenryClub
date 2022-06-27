import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNews, getNews } from '../../redux/Actions/Action';
import './SearchBar.css';
// import S from '../../components/Home/Home.module.css';
export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (name.length) {
        dispatch(filterNews(name));
      } else {
        alert('Debe escribir algo para buscar.');
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  function volverATodasLasNoticias(e) {
    e.preventDefault();
    try {
      dispatch(getNews());
    } catch (err) {
      throw new Error(err);
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="inputS"
            type="text"
            name="search"
            id="Search"
            placeholder="Buscar..."
            value={name}
            onChange={handleInputChange}
          />
          <button className="botones" type="submit" onClick={handleSubmit}>
            <span>Buscar</span>
          </button>
          <button type="button" onClick={volverATodasLasNoticias}>
            Recargar
          </button>
        </form>
        <br />
        {/* <div>
          {name.length ? (
            <div className="letrero">Estas buscando: {name}</div>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}
