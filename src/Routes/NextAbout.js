import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

class NextAbout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextInformation_Container">
          <div className="NextAbout">
            <div className="arrowup">
              <Link to="/">
                <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextAbout;
