
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Reserve from './components/Form Reserve/Reserve.jsx'
import Login from './components/FormLogin/Login.jsx'
import GaleriaImg from './components/Galeria de imagenes/GaleriaImg.jsx'
import Profile from './Profile/Profile.jsx'
import Register from './components/Form Register/Register';
import News from './components/News/News.jsx';
import { IconName } from "react-icons/fa";
import Contact from './components/Contact/contact.jsx';



function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/reserve" component={Reserve} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/galery" component={GaleriaImg} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/news" component={News} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="*" component={Landing} />
      
      </Switch>
    </div>
  );
}

export default App;
