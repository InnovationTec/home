import React, { Component } from "react";
import "../styles/Menu.css";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="menu-nav">
          <h1 className="menu_principal"></h1>
          <li>Contact</li>
          <li>services</li>
          <li>portafofio</li>
          <li>about Us</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;
