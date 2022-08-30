import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function EstructurasDeControl() {
  let arreglo1 = ["Polo", "Juanito", "Mariel", "Daniela", "Dalton"];
  function saludarATodos() {
    let resultado = arreglo1.map(function (nombre) {
      if (nombre == "Mariel") {
        return <div> Hellow {nombre}</div>;
      } else {
        return <div>Hola {nombre}</div>;
      }
    });
    return resultado;

    let arreglo = ["Home", "Diseños", "Otros", "Contacto"];
    function saludarATodos() {
      return arreglo.map((nombre) => {
        return nombre == "Home" ? (
          <Nav.Link>Bienvenido {nombre}</Nav.Link>
        ) : (
          <Nav.Link>{nombre}</Nav.Link>
        );
      });
    }
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">{saludarATodos()}</Nav>
        </Container>
      </Navbar>
    );
  }
}
export default EstructurasDeControl;
