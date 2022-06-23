import React from 'react'
import { Route, NavLink} from 'react-router-dom';
import Socios from './pageprueba/Socios'
import Home from '../components/Home/Home';
import News from '../components/News/News.jsx';
import FormActiv from '../components/Form Create Activities/NewActivity'
import s from './Profile.module.css'


export default function PAdmin() {
  return (
    <> 
  <div className={s.header}>
    <h3>header</h3>
  </div>
  <div className={s.container}>
   <div className={s.barralateral}>
     <ul>
      <li>
        <NavLink to="/admin/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/admin/socios">Socios</NavLink>
      </li>
      <li> 
      <NavLink to="/admin/home">Home</NavLink>
      </li>
      <li> 
      <NavLink to="/admin/newactivity">Crea Actividad</NavLink>
      </li>
     </ul>
    </div>
    <div className={s.mostrar}>
     <Route path="/admin/socios" component={Socios} />
     <Route path="/admin/home" component={Home} />
     <Route path="/admin/news" component={News} />
     <Route path="/admin/newactivity" component={FormActiv} />
     
    
    </div>
    </div>
    </>
  )
}
