import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationSection from "./Secciones/NavigationSection";
import BannerSection from "./Secciones/BannerSection";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavigationSection></NavigationSection>
      <Container>
        <BannerSection></BannerSection>
      </Container>
    </>
  );
}
export default App;
