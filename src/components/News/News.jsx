import React from 'react'
import { Link } from 'react-router-dom'
import './News.css'

export default function noticias() {
  return (
    <div>
      <h1 className='titleNews'>Noticias del club</h1>
      <div className='newsContainer'>
        <div>
          <div className='news'>
            <img src='https://imagenes.elpais.com/resizer/CahsaaNXHL9-FdAX72zScMZtTu8=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SU7EFDELFA7VVUEMTQNS26S4HQ.jpg' alt='img not found' className='imgNews'/>
            <span>1 Setiembre, 2021 - Fútbol</span>
            <h2>Partido Amistoso</h2>
            <p className='textDescription'>
              El día jueves se llevo a un partido amistoso en el club y muchos padres pudieron ver a sus hijos jugar por primera vez.
            </p>
            <Link to='/news'>
              Leer Más...
            </Link>
          </div>
        </div>
        <div>
          <div className='news'>
              <img src='https://www.geriatricarea.com/wp-content/uploads/2020/03/geriatricarea-Covid19-coronavirus.jpg' alt='img not found' className='imgNews'/>
              <span>27 Enero, 2022 - Hockey</span>
              <h2>Las clase se cancelan</h2>
              <p className='textDescription'>
                Debido a 5 casos de COVID-19 en las clases de Hockey se cancelan las clases durante 2 semanas. El dia 
                10 de febrero deberan presentarse con el hisopado negativo para volver a las actividades.
              </p>
              <Link to='/news'>
                Leer Más...
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

