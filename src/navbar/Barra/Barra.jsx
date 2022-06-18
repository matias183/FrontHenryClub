import React from 'react'
import { useSelector } from 'react-redux'
import{Link} from 'react-router-dom'



export default function Barra() {

    const Activities = useSelector((state)=> state.activities);

  return (
    <div>

<select defaultValue="default">
  <option value="default" disabled="disabled">Galery</option>
  <option value="foto">fotos</option>
  <option value="video">videos</option>
</select>


<select defaultValue="default">
  <option value="default" disabled="disabled">Actividades</option>
  {Activities.map(e => {
  return( <option value={e.name} key={e.name}>{e.name}</option>)})
  }
</select>



<select defaultValue="default" onChange="window.location.href=this.value">  
<option value="default" disabled="disabled">Club</option>
<option value="historia">Historia</option>
<option value="planes" >Planes</option>
<option value="Comunidad">Comunidad</option>
<option value="nosotros">Nosotros</option> 
</select>

<Link to="/contact-us">Contactanos </Link>
    </div>
  )
}
