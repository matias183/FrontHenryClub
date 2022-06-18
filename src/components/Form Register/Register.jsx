
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {CreateMember} from "../../redux/Action";
import{Link} from 'react-router-dom'

export default function Register() {
  const dispatch= useDispatch()
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });
  const [loading, setLoading] = useState(false);
  const { nombre, contraseña, correo } = inputs;

  const HandleChange = (e) => {
    setInputs({
       ...inputs, 
       [e.target.name]: e.target.value });
  };

  const onSubmit =  (e) => {
    e.preventDefault();
    if (nombre !== "" && contraseña !== "" && correo !== "") {
    setLoading(true);
    dispatch(CreateMember())
    setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h3>Bienvenido a la pagina</h3>
        <h2>De Registro!</h2>
        <form onSubmit={onSubmit}>    
            <div>
              <label>Nombre</label>
              <input
                onChange={HandleChange}
                value={nombre}
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Nombre..."
                autoComplete="off"
              />
            </div>
  
          <div>
              <label>Correo</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={correo}
                name="correo"
                id="correo"
                type="email"
                placeholder="Correo..."
                autoComplete="off"
              />
          </div>
          <div>
              <label>Contraseña</label>
              <input
                onChange={HandleChange}
                value={contraseña}
                name="contraseña"
                id="contraseña"
                type="password"
                placeholder="Contraseña..."
                autoComplete="off"
              />
            </div>
          <button type="submit"> {loading ? "Cargando..." : "Registrarme"}</button>
          <p>
            Ya tienes una cuenta?
            <Link to="/login">Inicia Sesión!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};


