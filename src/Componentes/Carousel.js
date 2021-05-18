import React, { Component } from "react";

import { Link } from "react-router-dom";
import marketing from "../img/marketing.jpg";
import diseno from "../img/diseñog.jpg";
import desarrollo from "../img/desarrollo.jpg";
import header from "../img/header1.jpg";
import "../styles/Carousel.css";

class Carousel extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/Servicios">
          <div id="slider">
            <figure id="Carousel-container">
              <img src={header} className="App-logo" alt="logo" />
              <img src={marketing} className="App-logo" alt="logo" />
              <img src={diseno} className="App-logo" alt="logo" />
              <img src={desarrollo} className="App-logo" alt="logo" />
            </figure>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Carousel;
