import Graphicdesig from "./Componentes/Graphicdesign.js";
import Home from "./Componentes/Home";
import UX from "./Componentes/UX.js";
import WebDevelopment from "./Componentes/WebDevelopment.js";
import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let arreglo = ["Home", "UX", "Graphic Design", "Web Development"];
  function primerPagina() {
    return arreglo.map((nombre) => {
      return <Nav.Link>{nombre}</Nav.Link>;
    });
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MariielDesign</Navbar.Brand>
        <Nav className="me-auto">{primerPagina()}</Nav>
      </Container>
    </Navbar>
  );
}
export default App;
