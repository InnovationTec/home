import React, { Component } from "react";

class Encabezado1 extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["salsa de tomate", "queso", "jamon"],
      calorias: 400,
    };
    return (
      <React.Fragment>
        <h1>{`Receta:` + receta.ingredientes}</h1>
        <div>{"Calorias:" + receta.calorias}</div>
      </React.Fragment>
    );
  }
}

export default Encabezado1;
