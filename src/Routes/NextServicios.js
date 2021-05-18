import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

class NextServicios extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextInformation_Container">
          <div className="NextServicios">
            <div className="arrowup">
              <Link to="/Portafolio">
                <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextServicios;
