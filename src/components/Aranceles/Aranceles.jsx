import React from 'react'
import s from "./Aranceles.module.css"

export default function Reservas() {
  return (
    <div>
     <h1> Planes </h1>

     <div className={s.container}>

    <div className={s.columa}>
    <p className={s.p1}>Basico</p>
    <p className={s.p2}>⭐un deporte a elecciòn durante todo el mes </p>
    <p className={s.p2}> 💲 1.500</p>
    <button type="button">COMPRAR</button>
    </div>
    <div className={s.columa}>
    <p className={s.p1}>Premium</p>
    <p className={s.p2}>⭐dos deportes a eleccion por todo el mes </p>
    <p className={s.p2}>⭐casillero personal </p>
    <p className={s.p2}>💲 3.500</p>
    <button type="button">COMPRAR</button>

    </div>
    <div className={s.columa}>
    <p className={s.p1}>Anual</p>
    <p className={s.p2}>⭐dos deportes a eleccion por todo un año </p>
    <p className={s.p2}>⭐casillero personal </p>
    <p className={s.p2}>⭐Pileta libre </p>
    <p className={s.p2}>💲 10.000</p>
    <button type="button">COMPRAR</button>
    </div>

     </div>





    </div>
  )
}
