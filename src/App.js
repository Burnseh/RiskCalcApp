import React, { Component } from 'react';
import './css/index.css';
import './css/landing.css';
import './css/input.css';
import './css/winner.css';
import Landing from './components/Landing';

class App extends Component {

   render() {
      return (
         <div>
            <Landing />
         </div>
      );
   }
}

export default App;