import React from 'react'
import { Route, NavLink} from 'react-router-dom';
import Home from '../PAdmin/Home2/Home2';
import News from '../PAdmin/News2/News2';
import Header from "../navbar/navbar"
import s from './User.module.css'


export default function User() {
  return (
    <> 
  <div className={s.header}>
<Header/>
  </div>
  <div className={s.container}>
   <div className={s.barralateral}>
     <ul>
      <li>
      <NavLink to="/user/news">News</NavLink>
 
      </li>
      <li> 
      <NavLink to="/user/home">Home</NavLink>
      </li>
      <li> 
      <NavLink to="/user/home">Your Calendar</NavLink>
      </li>
      <li> 
      <NavLink to="/user/home">modify your data</NavLink>
      </li>

     </ul>
    </div>
    <div className={s.mostrar}>
     <Route path="/user/home" component={Home} />
     <Route path="/user/news" component={News} />
     
    
    </div>
    </div>
    </>
  )
}
