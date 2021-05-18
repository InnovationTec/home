import React, { Component } from "react";
import Marketing from "../img/marketing.jpg";
import "../styles/App.css";

class Cards3 extends Component {
  render() {
    return (
      <div className="card mt-5 rounded-0 cardbody ">
        <img src={Marketing} alt="foto" />
        <div className="card-body mt-5 ">
          <h1 className="card-title text-danger">Prueba de cartas</h1>
          <p className="card-text desarrollowebcard">
            {" "}
            Lorem ipsut texto de prueba
          </p>
          <a href="#!" className="btn btn-outline-danger">
            COSTOS
          </a>
        </div>
      </div>
    );
  }
}

export default Cards3;
