import React, { Component } from "react";
import "../styles/App.css";

class NextServicios extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextInformation_Container">
          <div className="NextServicios">
            <div className="arrowup">
              <a href="/Portafolio">
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextServicios;
