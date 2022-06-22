import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import S from '../../components/Contact/Contact.module.css';

export default function contact() {
  return (
    <div className={S.contenedorGeneral}>
      <div className={S.titulo}>
        <h2>Club Henry</h2>
        <h4>Contactanos</h4>
      </div>
      <div className={S.infoDatos}>
        <ul>
          <li>Direccion Av. Cifuentes ***** Buenos Aires, Argentina</li>
          <li>Tel: 555-7600 (líneas rotativas)</li>
          <li> email: comunicaciones@clubhenry.org.ar</li>
        </ul>
      </div>
      <form action="" className={S.form}>
        <label htmlFor="">Nombre: </label>
        <input type="text" />

        <label htmlFor="">Apellido: </label>
        <input type="text" name="" id="" />

        <label htmlFor="">Email: </label>
        <input type="email" name="" id="" />

        <label htmlFor="">Teléfono de contacto: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        ></input>

        <label htmlFor="">Mensaje: </label>
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          placeholder="Escribe tu mensaje..."
        ></textarea>

        <div>
          <button type="submit">
            <span>Enviar</span>
          </button>
        </div>
      </form>
      <div className={S.botonVolver}>
        <Link to={'/home'}>
          <button>Regresar</button>
        </Link>
      </div>

      <Footer />
    </div>
    //ver posibilidad de poner form para enviar correo de contacto
  );
}
