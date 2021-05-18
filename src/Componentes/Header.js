import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="Header_Container">
          <div className="header">
            <span className="text1">Innovation </span>
            <span className="text2">TECH </span>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
