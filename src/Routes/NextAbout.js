import React, { Component } from "react";
import "../styles/App.css";

class NextAbout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextInformation_Container">
          <div className="NextAbout">
            <div className="arrowup">
              <a href="/">
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextAbout;