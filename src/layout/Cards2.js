import React, { Component } from "react";
import Diseño from "../img/diseñog.jpg";
import "../styles/App.css";

class Cards2 extends Component {
  render() {
    return (
      <div className="card mt-5 rounded-0  cardbody">
        <img src={Diseño} alt="foto" />
        <div className="card-body mt-5 ">
          <h1 className="card-title text-danger">SERVICIOS</h1>
          <p className="card-text desarrollowebcard">
            <li>Diseño de Logotipos.</li>
            <li> Diseño de Identidad Corporativa.</li>
            <li> Diseño Gráfico para Eventos</li>
            <li> Diseño de Folletos</li>
            <li>Flyers.</li>
            <li>Menu Digital</li>
          </p>
          <a href="#!" className="btn btn-outline-danger">
            COSTOS
          </a>
        </div>
      </div>
    );
  }
}

export default Cards2;
