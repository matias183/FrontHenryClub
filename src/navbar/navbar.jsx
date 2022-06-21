import React from 'react'
import Search from '../components/searchbar/SearchBar'
import Barra from "../Barra/Barra"
import{Link} from 'react-router-dom'
import './NavBar.css'

export default function navbar() {
  return (
    <div>
       <div className='header'>                                                        {/* container del header  */}
   <Link to= '/home'> <img className='logo' src="" alt="logo" /> </Link>               {/* logo */}
     <h1 className='titulo'>Club Henry</h1> <br/>                                      {/* titulo */}
   <div className='searchbar'><h2>                                                     {/* searchbar */}
    <Search />
    </h2>
    </div>
    <div className='dropdown'>
     <Link to="/login">
          <button className='botonDeslizable'>Login </button>              {/* boton de ingreso desplegable*/}
        </Link>  
        <div className='dropdown-content'>         
        <Link to ="/profile/:id"><span>Mi perfil</span></Link>             {/* aca tengo la duda si estan bien las rutas, si alguien las revisa joya */}
        <Link to ="/profile/:id"><span>Link 2</span></Link>                {/* aca tengo la duda si estan bien las rutas, si alguien las revisa joya */}
        </div>
</div>
     <br/>   
      </div>
      <Barra/>
   </div>
  )
}
