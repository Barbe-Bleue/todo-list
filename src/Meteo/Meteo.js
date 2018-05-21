import React, { Component } from 'react';
import './Meteo.css';

class Meteo extends Component {
  render() {
    return(
      <div>
        <div id="welcome">
          <h1>Elecblue</h1>
          <img src="./cloud.png" class="logo"/>
        </div>
        <div id="search">
          <input type="text" id="city" placeholder="Paris, Nice..."/>
          <input type="image" src="./sun.png" id="go" value="GO"/>
        </div>
        <div id="res">
          <p id="meteo"> </p>
        </div>
      </div>
    );
  }
}

export default Meteo;
