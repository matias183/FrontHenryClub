import React from 'react'
import{Link} from 'react-router-dom'

export default function profile() {
  return (
    <div>
         <Link to="/reserve">
          <button>Hace una reserva </button>
        </Link>   
    </div>
  )
}
