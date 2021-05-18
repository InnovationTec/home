import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

class NextInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextInformation_Container">
          <div className="NextInformation">
            <div className="arrowup">
              <Link to="/Servicios">
                <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextInformation;
