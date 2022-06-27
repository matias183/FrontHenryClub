import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from '../navbar/navbar';
import Socios from './pageprueba/Socios';
import Home from './Home2/Home2';
import News from './News2/News2';
import FormActiv from '../components/Form Create Activities/NewActivity';
import Createnews from '../components/Form CrearNoticia/CrearNoticia'
import Request from './Request/Request'
import EditNews from './EditNews/EditNews'
// import PanelTrabajo from './PanelTrabajo/PaneldeTrabajo'
import s from './Profile.module.css'


export default function PAdmin() {
  return (
    <> 
  <div className={s.header}>
  <Header/>
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
      <li> 
      <NavLink to="/admin/editnews">EditNews</NavLink>
      </li>
      <li> 
      <NavLink to="/admin/createnews">Crea Noticia</NavLink>
      </li>
      <li> 
      <NavLink to="/admin/request">look at requests</NavLink>
      </li>
      {/* <li> 
      <NavLink to="/admin/teamwork">Panel de Trabajo</NavLink>
      </li> */}
     </ul>
    </div>
    <div className={s.mostrar}>
     <Route path="/admin/socios" component={Socios} />
     <Route path="/admin/home" component={Home} />
     <Route path="/admin/news" component={News} />
     <Route path="/admin/newactivity" component={FormActiv} />
     <Route path="/admin/createnews" component={Createnews} />
     <Route path="/admin/request" component={Request} />
     <Route path="/admin/editnews" component={EditNews} />
     {/* <Route path="/admin/teamwork" component={PanelTrabajo} /> */}
    
    </div>
    </div>
    </>
  );
}
