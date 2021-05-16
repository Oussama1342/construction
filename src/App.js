import logo from './logo.svg';
import './App.css';

import Header from './Component/Header'
import About from './Component/About'
import Footer from './Component/Footer'
import Team from './Component/Team'
import Portfolio from './Component/Portfolio'
import Service from './Component/Service'
import Contact from './Component/Contact'
import Acceuil from './Component/Acceuil'
import {   BrowserRouter as Router
,HashRouter, Route, Switch } from 'react-router-dom';  

function App() {
  return (
   <Router>
     <Switch>
  <Route path="/" component={Acceuil} />
    <Route path="/about" component={About} />
    <Route path="/team" component={Team} />

     </Switch>

      </Router>
  );
}

export default App;
