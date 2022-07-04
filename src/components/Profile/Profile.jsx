import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import logoHenry from '../../utils/fotos/logo.gif';
import NavBar from '../../navbar/navbar';
import './Profile.css';
import { GetProfile } from '../../redux/Actions/Action.js';

export default function Profile() {
  // const dispatch = useDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   dispatch(GetProfile, (id));
  // }, [dispatch, id]);

  // const myProfile = useSelector((state) => state.detail);

  const comprar = async () => {
    await fetch('https://mp-testeo.herokuapp.com/payment')
      .then(e => e.json())
      .then(e => window.open(e.url, '_blank'));
  };
  return (
    <div className="contenedorGeneral">
      <NavBar />

      <h1 className="tituloPerfil">Mi Perfil</h1>
      <hr />
      <div className="contenido">
        <div className="fotoDePefil">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CExBGqgGYIYYcu8ZqtcRr4dVJJCbpcbUoA&usqp=CAU"
            alt="foto de perfil"
          />
        </div>
        <div className="datosDeUsuario">
          <div className="datosUsuario">
            <h1>DATOS DE USUARIO:</h1>
            <h2>Nombre: </h2>
            <h4>Pepito</h4>
            <h2>Apellido: </h2>
            <h4>Pepon</h4>
            <h2>Nombre De Usuario: </h2>
            <h4>Bobito</h4>
            <h2>Dirección: </h2>
            <h4>La casa de Beti 254</h4>
            <h2>Teléfono: </h2>
            <h4>45457852</h4>
            <h2>E-mail: </h2>
            <h4>pepito@henry.com</h4>
            <h2>Dni: </h2>
            <h4>36584872</h4>
          </div>

          <div className="datosTutor">
            <h1>DATOS DEL TUTOR:</h1>
            <h2>Nombre: </h2>
            <h4>Papa de pepito</h4>
            <h2>Teléfono: </h2>
            <h4>45782130</h4>
            <h2>E-mail: </h2>
            <h4>papadepepito@henry.com</h4>
          </div>

          <div className="inscripciones">
            <h1>Inscripciones:</h1>
            <h2>Deporte:</h2>
            <ul>
              <li>Fútbol</li>
              <li>Tenis</li>
              <li>Hockey</li>
            </ul>

            <div className="aPagar">
              <h2 className="aranceles">Aranceles: </h2>
              <h4 className="precio">total a pagar: $900</h4>
              <Link>
                <button onClick={comprar}>Pagar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
