import React, { Component } from "react";
import Desarrollo from "../img/propuestaIT.png";
import Carousel from "../Componentes/Carousel";
import "../styles/Informacion.css";

class Informacion extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Informacion-container">
          <div className="border-color">
            <h3 className="serviciosonline"> Servicios Digitales</h3>
            <img
              className="imginformacion"
              src={Desarrollo}
              alt="Desarrolloweb"
            />

            <p className="textinformacion">
              Diseñamos tu página web profesional para hacer publicidad
              marketing destaca tu presencia en línea y ten un sitio siempre
              disponible con toda la informacion que necesitan tus clientes.
            </p>
          </div>
          <Carousel />

          <br />
          <p className="textinformacion">{`Tienes un producto pero no sabes como llegar a mas clientes en InnovationTECH tenemos las herramientas para crear anuncios publicitarios digitales descubre la nueva forma de hacer marketing digital y llegar a mas gente a travez de la redes sociales o con tu propio sitio web. `}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Informacion;
