import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Donate from './components/pages/Donate';

function App() {
  return(
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/about' exact component= {About} />
        <Route path='/donate' exact component= {Donate} />
      </Switch>
    </Router>
    </>
  );
}

export default App;