
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {Loginmember} from "../../redux/Action";
import{Link} from 'react-router-dom'

export default function Login() {
  const dispatch= useDispatch()

  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState( { 
   correo: "",
   contraseña: ""
     });

  const { correo, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ 
      ...inputs,
       [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      setLoading(true);
     dispatch(Loginmember())
      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h3>Bienvenido a la Seccion</h3>
        <h2>De Inicio de Sesion</h2>

        <form onSubmit={onSubmit}>
     
            <div>
              <label>Correo</label>
              <input
                onChange={HandleChange}
                value={correo}
                name="correo"
                id="correo"
                type="email"
                placeholder="Correo..."
                autoComplete="off"
              />
            </div>
    

          <div>
            <div>
              <label> Contraseña</label>
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
          </div>
          <button type="submit">{loading ? "Cargando..." : "Iniciar Sesión"}</button>
          <br />
          <p>Aun no tienes cuenta? <Link to="/register" >Registrate!</Link></p>
        </form>
      </div>
    </div>
  );
}
