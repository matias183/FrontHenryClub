import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'
export default function contact() {
  return (
    <div>
     <div>Club Henry</div>
     <ul>
 <li>Direccion Av. Cifuentes ***** Buenos Aires, Argentina</li>
 <li>Tel: 555-7600 (líneas rotativas)</li>
 <li> email: comunicaciones@clubhenry.org.ar</li>
     </ul>
     
    <div>
      <Link to={'/home'}>
      <button>Regresar</button>
      </Link>
    </div>

     <Footer />
    </div>
    //ver posibilidad de poner form para enviar correo de contacto
  )
}
