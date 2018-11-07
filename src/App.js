import React, { Component } from 'react';

import './App.css';
import './Nav/nav.css'
import './neverSettle/neverSettle.css'
import './flex/flex.css'
import './slider/slider.css'
import './wcsau/wcsau.css'
import './gallary/gallary.css'
import './instagram/instagram.css'
import './footer/footer.css'
import './sec/sec.css'


import Nav from './Nav/nav.jsx'
import Footer from './footer/footer.jsx'
import Router from './routes'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav/>
        <Router></Router>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
