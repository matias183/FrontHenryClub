import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/Actions/Action';
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
    if (!name) {
      return alert('Colocar un busqueda');
    } else {
      dispatch(search(name));
      setName('');
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
          <button className="botones">
            <span>Buscar</span>
          </button>
        </form>
        <br />
        <div>
          {name.length ? (
            <div className="letrero">Estas buscando: {name}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
