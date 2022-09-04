import { Container, Nav, Navbar } from "react-bootstrap";
import Hamburguer from "../Componentes/Hamburguer";
import Logo from "../Componentes/Logo";
import SocialContainer from "../Componentes/SocialContainer";

function NavigationSection() {
  let arreglo = ["Home", "UX", "Graphic Design", "Web Development"];
  function primerPagina() {
    return arreglo.map((nombre) => {
      return <Nav.Link id="root">{nombre}</Nav.Link>;
    });
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Hamburguer></Hamburguer>{" "}
          </Navbar.Brand>
          <Navbar.Brand className="me-auto">
            <Logo></Logo>
          </Navbar.Brand>
          <Navbar.Brand className="me-auto">
            <SocialContainer></SocialContainer>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationSection;
