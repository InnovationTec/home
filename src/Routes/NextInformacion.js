import React, { Component } from "react";
import "../styles/App.css";

class NextInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextInformation_Container">
          <div className="NextInformation">
            <div className="arrowup">
              <a href="/Servicios">
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextInformation;
