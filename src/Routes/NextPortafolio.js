import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

class NextPortafolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextPortafolio_Container">
          <div className="NextPortafolio">
            <div className="arrowup">
              <Link to="/Aboutus">
                <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextPortafolio;
