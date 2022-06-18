import React from 'react'
import Search from '../components/searchbar/SearchBar'
import Barra from "./Barra/Barra"
import{Link} from 'react-router-dom'

export default function navbar() {
  return (
    <div>
    <img src="" alt="logo" />
     <h3>   Club Henry </h3> 
     <Link to="/login">
          <button>Login </button>
        </Link>   
     <br/>   
      <Search/>
      <Barra/>
   </div>
  )
}
