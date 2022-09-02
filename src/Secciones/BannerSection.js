import { Col, Row } from "react-bootstrap";
import BotonesBanner from "../Componentes/BotonesBanner";
import TituloBanner from "../Componentes/TituloBanner";

function BannerSection() {
  return (
    <Row>
      <Row>
        <TituloBanner></TituloBanner>
      </Row>
      <Col className="me-auto">
        <BotonesBanner></BotonesBanner>
      </Col>
      <Col className="me-auto">
        <BotonesBanner></BotonesBanner>
      </Col>
    </Row>
  );
}
export default BannerSection;
