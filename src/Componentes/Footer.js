import React, { Component } from "react";
import "../styles/Footer.css";

class footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="footer-container">
            <i className="fas fas-facebook">
              <a href="https://www.facebook.com/hectord788">Facebook</a>
            </i>
            <i className="fas fas-twitter">
              <a href="https://twitter.com/HectordeHoyos4">Twitter</a>
            </i>
            <i className="fas fas-instagram">
              <a href="https://www.instagram.com/hectord788/">Instagram</a>
            </i>
            <i className="fas fas-youtube">
              <a href="https://www.youtube.com/channel/UCi5OK7qKDvhMUAQwBXnciKw">
                Youtube
              </a>
            </i>
          </div>
        </div>
        <div className="derechos">
          <li className="derechos-text">
            INNOVATIONTECH&copy; 2021 <br></br>TODOS LOS DERECHOS RESERVADOS
          </li>
        </div>
      </React.Fragment>
    );
  }
}

export default footer;
