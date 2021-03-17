import "./styles/App.css";
import logo from "./img/Proto.png";
import marketing from "./img/marketing.jpg";
import diseno from "./img/diseñog.jpg";
import desarrollo from "./img/desarrollo.jpg";
import header from "./img/header1.jpg";
import Encabezado1 from "./Componentes/MisComponentes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cabezera">
          <span className="cabezera1">Innovation </span>
          <span className="cabezera2">TECH </span>
        </div>

        <div id="slider">
          <figure>
            <img src={header} className="App-logo" alt="logo" />
            <img src={marketing} className="App-logo" alt="logo" />
            <img src={diseno} className="App-logo" alt="logo" />
            <img src={desarrollo} className="App-logo" alt="logo" />
          </figure>
        </div>
        <ul className="menu-nav">
          <li>Contact</li>
          <li>services</li>
          <li>portafofio</li>
          <li>abaout</li>
        </ul>

        <img src={logo} className="App-logoIT" alt="logoIT" />
        <p></p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          INNOVATION TECH
        </a>
        <Encabezado1 />
      </header>
      <footer>
        <div className="arrowup">
          <a href="#">
            {" "}
            <i className="fa fa-arrow-circle-up"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
