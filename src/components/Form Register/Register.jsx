
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMember } from "../../redux/Actions/Action";
import validate from "./Validations/validations"
import { Link } from 'react-router-dom'
import style from './Register.module.css'

export default function Register() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    dni: "",
    edad: "",
    usuario: "",
    contraseña: "",
  });

  //Para renderizar mensajes de error
  const [error, setError] = useState({})

  const [loading, setLoading] = useState(false);
  const { nombre, apellido, correo, telefono, dni, edad, usuario, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {

    setInputs({
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      dni: "",
      edad: "",
      usuario: "",
      contraseña: "",
    });

  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(validate(inputs));
    if (Object.keys(error).length > 0) {
      alert(`falta ${Object.keys(error)}`)
    } else if (nombre && apellido && correo && telefono && dni && edad && usuario && contraseña) {
      alert("Succes")
      setLoading(true);
      dispatch(createMember())
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <h3>Logo</h3>
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={onSubmit} onReset={handleReset}>
          <div className={style.inputContainer}>
            <div className={style.column1}>


              <div>
                
                {error.nombre && <p className={style.error}>{error.nombre}</p>}
                <label className={style.tag}>Nombre</label>
                <input
                  className={style.input}
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
              
                {error.apellido && <p className={style.error}>{error.apellido}</p>}
                <label className={style.tag}>Apellido</label>
                <input
                  className={style.input}
                  onChange={HandleChange}
                  value={apellido}
                  name="apellido"
                  id="apellido"
                  type="text"
                  placeholder="Apellido..."
                  autoComplete="off"
                />
              </div>
              <div>
                
                {error.telefono && <p className={style.error}>{error.telefono}</p>}
                <label className={style.tag}>Número de telefono</label>
                <input
                  className={style.input}
                  onChange={HandleChange}
                  value={telefono}
                  name="telefono"
                  id="telefono"
                  type="string"
                  placeholder="555..."
                  autoComplete="off"
                />
              </div>
              <div>
               
                {error.correo && <p className={style.error}>{error.correo}</p>}
                <label className={style.tag}>Correo</label>
                <input
                  className={style.input}
                  onChange={HandleChange}
                  value={correo}
                  name="correo"
                  id="correo"
                  type="email"
                  placeholder="Correo..."
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={style.column2}>


              <div>
                
                {error.dni && <p className={style.error}>{error.dni}</p>}
                <label className={style.tag}>DNI</label>
                <input
                  className={style.input}
                  onChange={HandleChange}
                  value={dni}
                  name="dni"
                  id="dni"
                  type="string"
                  placeholder="8888..."
                  autoComplete="off"
                />
              </div>
              <div>
                {error.edad && <p className={style.error}>{error.edad}</p>}
                <label className={style.tag}>Edad</label>
                <input
                  className={style.input}
                  onChange={HandleChange}
                  value={edad}
                  name="edad"
                  id="edad"
                  type="number"
                  placeholder="edad"
                  autoComplete="off"
                />
              </div>
              <div>
                {error.usuario && <p className={style.error}>{error.usuario}</p>}
                <label className={style.tag}>Nombre de usuario</label>
                <input
                  className={style.input}
                  onChange={HandleChange}
                  value={usuario}
                  name="usuario"
                  id="usuario"
                  type="string"
                  placeholder="Usuario..."
                  autoComplete="off"
                />
              </div>
              <div>
                <p>Al menos 1 letra y 1 número</p>
                {error.contraseña && <p className={style.error}>{error.contraseña}</p>}
                <label className={style.tag}>Contraseña</label>
                <input
                  className={style.input}
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
          </div>
          <button className={style.button} type="submit"> {loading ? "Cargando..." : "Registrarme"}</button>
        </form>
        <p>
          Ya tienes una cuenta?
          <Link to="/login">Inicia Sesión!</Link>
        </p>
      </div>
    </div>
  );
};


