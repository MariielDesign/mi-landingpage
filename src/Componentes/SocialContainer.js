import SocialIcon from "./SocialIcon";
import { Navbar } from "react-bootstrap";

function SocialContainer() {
  return (
    <>
      <Navbar.Brand className="me-auto">
        <SocialIcon></SocialIcon>
      </Navbar.Brand>
      <Navbar.Brand className="me-auto">
        <SocialIcon></SocialIcon>
      </Navbar.Brand>
      <Navbar.Brand className="me-auto">
        <SocialIcon></SocialIcon>
      </Navbar.Brand>
    </>
  );
}
export default SocialContainer;
