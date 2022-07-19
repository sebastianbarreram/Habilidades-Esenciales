import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Paginainicio from './components/Paginainicio';
import Footer from './components/Footer';
import Contactenos from './components/Contactenos'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Paginainicio} />
      <Route path='/contactenos' exact component={Contactenos} />
      <br/>
      <Footer/>
    </Router>
  );
}

export default App;
