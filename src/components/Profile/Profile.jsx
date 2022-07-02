import React from 'react'
import{Link, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import logoHenry from '../../utils/fotos/logo.gif'
import './Profile.css'
import {GetProfile } from '../../redux/Actions/Action.js'

export default function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(GetProfile, (id));
  }, [dispatch, id]);

  const myProfile = useSelector((state) => state.detail);

  return (
    <div className="">
      {myProfile ? (
        <div className="">
          <h1 className="nombre">{`${myProfile.name} ${myProfile.surname}`}</h1>
          <img className="logo" src={logoHenry} alt="logo"/>

            <h4 className=""> Email: {myProfile.email}</h4>
        
            <h4 className="">
               Numero de socio: {myProfile.membershipNumber}
            </h4>
        
            <h4 className="">
              DNI {myProfile.dni}
            </h4>

            <h4 className="">
               Es mayor de edad {myProfile.isOlder? "si" : "no"}
            </h4>
        
            <h4 className="">Contactos: {myProfile.phone} </h4>
            <Link to="/reserve">
         </Link>   
          <button>Darse de baja</button>
          <Link to="/home">
            <button className="button">Back</button>
          </Link>
        </div>
      ) : (
        console.log("nada")
      )}
    </div>
  );
}