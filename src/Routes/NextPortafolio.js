import React, { Component } from "react";
import "../styles/App.css";

class NextPortafolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="NextPortafolio_Container">
          <div className="NextPortafolio">
            <div className="arrowup">
              <a href="/Aboutus">
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextPortafolio;
