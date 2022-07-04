import React from 'react'
import s from "./Sportts2.module.css"
import futbol from "../utils/fotos/futbolminicard.jpg" 
import Natacion from "../utils/fotos/natacionminicard.jpg"
import Hockey from "../utils/fotos/hockeyminicard.avif"
import Footer from "../components/footer/footer"
import Header from "../PAdmin/headerAdmin/haaderAdmin"
import { NavLink } from 'react-router-dom'

export default function Sports2() {
  return (

        <div>
            <Header/>
            <div className={s.tituloencabezado}> 
        <div className={s.encabezado}>NUETRAS ACTIVIDADES</div>
          </div>
         <div className={s.container}>
    
        <div className={s.columa}>
            <img src={futbol} alt="" className={s.img}/>
        <p className={s.p1}>Futbol</p>
        <div className={s.p2}>La amistad se afianza jugando en equipo y el fútbol ofrece la
         mejor oportunidad para demostrarlo. Entrenamiento físico y partidos para desarrollar 
         las habilidades técnicas y los valores sociales </div>
        <div className={s.botoncontainer}>
             <button className={s.btn} type="button">VER MAS</button> 
        </div>
        </div>
        <div className={s.columa}>
        <img src={Natacion} alt="" className={s.img}/>
        <p className={s.p1}>Natacion</p>
        <p className={s.p2}>El perfeccionamiento de las técnicas de nado y el estímulo sistemático sobre la resistencia, la fuerza y la flexibilidad, permiten a los jóvenes alcanzar rendimientos saludables. </p>
        <div className={s.botoncontainer}>
             <button className={s.btn} type="button">VER MAS</button> 
        </div>
    
        </div>
        <div className={s.columa}>
        <img src={Hockey} alt="" className={s.img}/>
        <p className={s.p1}>Hockey</p>
        <p className={s.p2}>Combina entrenamiento físico y práctica de hockey en grupos pequeños, divididos por niveles. El objetivo es perfeccionar las habilidades, jugar partidos y aprender a competir y divertirse. </p>
        <div className={s.botoncontainer}>
             <button className={s.btn} type="button">VER MAS</button> 
        </div>
      
        </div>
    
         </div>
        <div className={s.inscibirse}>
        <div className={s.title2}>¿Cómo inscribirse? </div>
        <div className={s.opciones}>
        <div className={s.tres}>  
        <div className={s.uno}>SOS SOCIO</div>
        <div className={s.dos}>Te esperamos en el stand de informes de lunes a viernes entre las 8 y las 20hs,
         sábados de 8 a 18hs y domingo de 10 a 17:30hs. También podés inscribirte online haciendo clic    <NavLink to="/home">  acá</NavLink></div>
     
     
     
     
     
     
        </div>
        <div className={s.tres}>  
        <div className={s.uno}>NO SOS SOCIO</div>
        <div className={s.dos}>Te recordamos que para inscribirte en un programa deportivo
         es requisito asociarse. Encontrá toda la información para asociarte 
         <NavLink to="/register">  acá</NavLink>
         </div>
        </div>
        
        </div>  

        
        </div>
        <Footer />
        </div>
    
    
  )
}
