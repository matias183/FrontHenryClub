/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Aranceles from './components/Aranceles/Aranceles.jsx'
import Login from './components/FormLogin/Login.jsx'
import GaleriaImg from './components/Galeria de imagenes/GaleriaImg.jsx'
import Admin from './PAdmin/PAdmin.jsx'
import User from './User/User.jsx'
import Register from './components/Form Register/Register';
import News from './components/News/News.jsx';
import DetailNews from './components/News/DetailNews';
import Contact from './components/Contact/contact.jsx';
import Activity from './components/Form Create Activities/NewActivity.jsx';
import MyCalendar from './components/Calendario/Calendario';
import Productos from './Productos/Productos.jsx'
import Futbol from './Sports/Futbol.jsx';
import Hockey from './Sports/Hockey.jsx';
import Natacion from './Sports/Natacion.jsx'
import  Sports  from './Sports2/Sports2.jsx';



function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/aranceles" component={Aranceles} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/galery" component={GaleriaImg} />
      <Route path="/admin" component={Admin} />
      <Route path="/user/:id" component={User} />
      <Route exact path="/news" component={News} />
      <Route exact path='/news/:id' component={DetailNews} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/newactivity" component={Activity} />
      <Route exact path="/calendario" component={MyCalendar} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/sport" component={Sports} />
      <Route exact path="/natacion" component={Natacion} />
      <Route exact path="/futbol" component={Futbol} />
      <Route exact path="/hockey" component={Hockey} />
      <Route exact path="*" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
