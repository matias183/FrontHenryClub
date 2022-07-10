import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import logoHenry from '../../utils/fotos/logo.gif';
import NavBar from '../../navbar/navbar';
import Footer from '../footer/footer.jsx';
import './profile.css';
import { clearMemberDetail, detailMember } from '../../redux/Actions/Action.js';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector(state => state.memberDetail);

  const id = JSON.parse(localStorage.getItem('data')).id;

  useEffect(() => {
    dispatch(detailMember(id));

    return () => {
      dispatch(clearMemberDetail());
    };
  }, []);

  // const myProfile = useSelector((state) => state.detail);

  const comprar = async () => {
    await fetch('https://mp-testeo.herokuapp.com/payment')
      .then(e => e.json())
      .then(e => window.open(e.url, '_blank'));
  };
  return (
    <div className="contenedorGeneral">
      <NavBar />

      {!!Object.keys(details).length && console.log(details)}
      <h1 className="tituloPerfil">¡ Hola {details.username} !</h1>

      <div className="contenido">
        <div className="fotoDePefil">
          <img
            src={
              details.photo
                ? details.photo
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CExBGqgGYIYYcu8ZqtcRr4dVJJCbpcbUoA&usqp=CAU'
            }
            alt="foto de perfil"
          />
          <div className="botonesPerfil">
            <button>Cambiar foto de perfil</button>
            <button>Editar perfil</button>
            <button>Eliminar perfil</button>
          </div>
        </div>
        <div className="datosDeUsuario">
          <div className="datosUsuario">
            <h1>DATOS DE USUARIO:</h1>
            <h2>Nombre: </h2>
            <h4>{details.name}</h4>
            <h2>Apellido: </h2>
            <h4>{details.surname}</h4>
            <h2>Nombre De Usuario: </h2>
            <h4>{details.username}</h4>
            <h2>Dirección: </h2>
            <h4>{details.address}</h4>
            <h2>Teléfono: </h2>
            <h4>{details.phone}</h4>
            <h2>E-mail: </h2>
            <h4>{details.email}</h4>
            <h2>Dni: </h2>
            <h4>{details.dni}</h4>
          </div>

          {JSON.parse(localStorage.getItem('data')).isOlder === false ? (
            <div className="datosTutor">
              <h1>DATOS DEL TUTOR:</h1>
              <h2>Nombre: </h2>
              <h4>{details.tutorName}</h4>
              <h2>Teléfono: </h2>
              <h4>{details.tutorPhone}</h4>
              <h2>E-mail: </h2>
              <h4>{details.tutorEmail}</h4>
            </div>
          ) : (
            <div></div>
          )}
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
      <Footer />
    </div>
  );
}
