import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/home';
import Number from './components/number';
import Word from './components/word';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/:num"/>
        <Word path="/:word"/>
        <Word path="/:word/:color/:bgColor"/>
      </Router>
    </div>
  );
}

export default App;
