import React from 'react';
import './App.css';

import logo from './images/cloudhead.png'

function App() {
  return (
    <>
      <header></header>
      <div className="container">
        
        <div id="logo">
          <img src={logo} alt="bostwiek logo" />
        </div>

        <h1>The future home of something quite nice...</h1>

      </div>
      <footer></footer>
    </>
  );
}

export default App;
