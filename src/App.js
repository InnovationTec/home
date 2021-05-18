import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./Componentes/Header";
import Carousel from "./Componentes/Carousel";
import Footer from "./Componentes/Footer";
import Informacion from "./layout/Informacion";
import Servicios from "./layout/Servicios";
import logo from "./img/Proto.png";
import Aboutus from "./Componentes/Aboutus";
import NextInformation from "./Routes/NextInformacion";
import NextServicios from "./Routes/NextServicios";
import NextPortafolio from "./Routes/NextPortafolio";
import NextAbout from "./Routes/NextAbout";

import "./styles/App.css";

//comenzando construcion del sitio innovation tech//

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav-container">
          <div className="btn-group">
            <Link to="/" className="Nav-bar-link">
              Home
            </Link>
          </div>

          <div className="btn-group">
            <Link to="/Informacion" className="Nav-bar-link">
              Informacion
            </Link>
          </div>

          <div className="btn-group">
            <Link to="/Servicios" className="Nav-bar-link">
              Servicios
            </Link>
          </div>
          <div className="btn-group">
            <Link to="/Portafolio" className="Nav-bar-link">
              Portafolio
            </Link>
          </div>
          <div className="btn-group">
            <Link to="/Aboutus" className="Nav-bar-link">
              Aboutus
            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/Informacion" exact>
            Informacion
            <Informacion />
            <NextInformation></NextInformation>
            <Footer />
          </Route>

          <Route path="/Servicios" exact>
            Servicios
            <Servicios />
            <NextServicios></NextServicios>
            <Footer />
          </Route>

          <Route path="/Portafolio" exact>
            <Header />
            Portafolio
            <NextPortafolio></NextPortafolio>
          </Route>

          <Route path="/Aboutus" exact>
            <Header />
            Aboutus
            <Aboutus />
            <NextAbout></NextAbout>
          </Route>

          <Route path="/" exact>
            Home
            <Header />
            <Carousel />
            <Link to="/Informacion">
              <img src={logo} className="App-logoIT" alt="logoIT" />
            </Link>
            <div className="sloganhome">
              DESCUBRE LA NUEVA FORMA DE HACER MARKETING
            </div>
            <div className="arrowup">
              <a href="/Informacion">
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
