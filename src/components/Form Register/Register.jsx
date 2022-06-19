
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateMember } from "../../redux/Action";
import validate from "./Validations/validations"
import { Link } from 'react-router-dom'

export default function Register() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    dni: "",
    edad:"",
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
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      sprite: "",
      types: [],
    });

  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(validate(inputs));
    console.log(error);
    if (Object.keys(error).length > 0) {
      // alert("Revisa los campos")
      alert(`falta ${Object.keys(error)}`)
    } else if(nombre && apellido && correo && telefono && dni && edad && usuario && contraseña) {
      setLoading(true);
      dispatch(CreateMember())
      setLoading(false);
    } else {
      alert("Faltan datos")
    }
  };

  return (
    <div>
      <div>
        <h3>Bienvenido a la pagina</h3>
        <h2>De Registro!</h2>
        <form onSubmit={onSubmit} onReset={handleReset}>
          <div>
            {error.nombre && <p style={{color:"red"}}>{error.nombre}</p>}
            <label>Nombre{" "}</label>
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
            {error.apellido && <p style={{color:"red"}}>{error.apellido}</p>}
            <label>Apellido{" "}</label>
            <input
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
            {error.telefono && <p style={{color:"red"}}>{error.telefono}</p>}
            <label>Número de telefono{" "}</label>
            <input
              onChange={HandleChange}
              value={telefono}
              name="telefono"
              id="telefono"
              type="number"
              placeholder="555..."
              autoComplete="off"
            />
          </div>
          <div>
            {error.correo && <p style={{color:"red"}}>{error.correo}</p>}
            <label>Correo{" "}</label>
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
            {error.dni && <p style={{color:"red"}}>{error.dni}</p>}
            <label>DNI{" "}</label>
            <input
              onChange={HandleChange}
              value={dni}
              name="dni"
              id="dni"
              type="string"
              placeholder="88.88..."
              autoComplete="off"
            />
          </div>
          <div>
            {error.edad && <p style={{color:"red"}}>{error.edad}</p>}
            <label>Edad{" "}</label>
            <input
              onChange={HandleChange}
              value={edad}
              name="edad"
              id="edad"
              type="number"
              placeholder="555..."
              autoComplete="off"
            />
          </div>
          <div>
            {error.usuario && <p style={{color:"red"}}>{error.usuario}</p>}
            <label>Nombre de usuario{" "}</label>
            <input
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
            {error.contraseña && <p style={{color:"red"}}>{error.contraseña}</p>}
            <label>Contraseña{" "}</label>
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


