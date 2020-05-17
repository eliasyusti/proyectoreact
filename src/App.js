import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import Navigations from './components/Navigations'
import ListaFrutas from './components/ListaFrutas';
import CrearFruta from './components/CrearFruta';
import Registrar from './components/Registrar';
import Login from './components/Login';





function App() {
  return (
    <Router>
        <Navigations/>
        <Route path="/Login" exact component={Login} />
        <Route path="/Registrar" exact component={Registrar} />
        <Route path="/" exact component={ListaFrutas} />
        <Route path="/edit/:id" component={CrearFruta} />
        <Route path="/create" component={CrearFruta} ></Route>

    </Router>

    

    
  );
}

export default App;
