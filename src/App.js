import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationSection from "./Secciones/NavigationSection";
import BannerSection from "./Secciones/BannerSection";
import { Container } from "react-bootstrap";
import "./src/styles/App.css";

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
