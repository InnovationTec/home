import React, { Component } from "react";
import Desarrollo from "../img/desarrollo.jpg";
import "../styles/App.css";

class Cards extends Component {
  render() {
    return (
      <div className="card mt-5 rounded-0 cardbody">
        <img src={Desarrollo} alt="foto" />
        <div className="card-body mt-5 ">
          <h4 className="card-title text-danger ">
            Arquitectura y Desarrollo Web
          </h4>

          <p className="card-text desarrollowebcard">
            <li> Diseño de Interfaz Web</li>
            <li>Maquetado y Arquitectura Web</li>
            <li> Animaciones Multimedia</li>
            <li> Edicion de Video </li>
            <li> Banner Animados (2 a 4 fotos)</li>
            <li>Enlaces a tus Redes Sociales</li>
          </p>
          <a href="#!" className="btn btn-outline-danger">
            $800
          </a>
        </div>
      </div>
    );
  }
}

export default Cards;
