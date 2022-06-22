import React from 'react'
import { Route, NavLink} from 'react-router-dom';
import Socios from './pageprueba/Socios'
import Home from '../components/Home/Home';
import News from '../components/News/News.jsx';
import FormActiv from '../components/Form Create Activities/NewActivity'
import s from './Profile.module.css'


export default function profile() {
  return (
    <> 
  <div className={s.header}>
    <h3>header</h3>
  </div>
  <div className={s.container}>
   <div className={s.barralateral}>
     <ul>
      <li>
        <NavLink to="/profile/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/profile/socios">Socios</NavLink>
      </li>
      <li> 
      <NavLink to="/profile/home">Home</NavLink>
      </li>
      <li> 
      <NavLink to="/profile/newactivity">Crea Actividad</NavLink>
      </li>
     </ul>
    </div>
    <div className={s.mostrar}>
     <Route path="/profile/socios" component={Socios} />
     <Route path="/profile/home" component={Home} />
     <Route path="/profile/news" component={News} />
     <Route path="/profile/newactivity" component={FormActiv} />
     
    
    </div>
    </div>
    </>
  )
}
