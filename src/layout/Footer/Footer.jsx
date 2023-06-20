import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import { Github } from "react-bootstrap-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="portfolio" className="p-5" >
        <Row>
          <Col>
          <p className="text-center text-secondary">
            <a href={'http://github.com/AnthonyM04/portfolio-web'}
              target="_blank"
              rel="noreferrer"
              className="button-effect">
            <Github size="40" color="grey" />
            <br /><small>Code in GitHub</small>
            </a>
            <small> {currentYear} Original AI Art</small></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
