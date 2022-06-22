import React from 'react'
import { Link } from 'react-router-dom'
import './News.css'

export default function noticias({title, subtitle, text, image, id}) {
  return (
    <div>
      <p className='titleNews'>Noticias del club</p>
      <div className='newsContainer'>
        <div>
          <div className='news'>
            <img src={image} alt='img not found' className='imgNews'/>
            <h2>{title}</h2>
            <span>{subtitle}</span>
            <Link to={'/news/' + id}>
              Leer Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

