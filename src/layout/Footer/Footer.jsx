import { Github } from "react-bootstrap-icons";
import { Container, Row, Col } from "../../util/Bootstrap.jsx";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // <footer>
    //   <Container id="footer" className="p-5" >
    //     <Row>
    //       <Col>
    //       <p className="text-center text-secondary">
    //         <a href={'http://github.com/AnthonyM04/portfolio-web'}
    //           className="button-effect"
    //           >
    //             <Github size={50}/>
    //         </a>
    //         <small> {currentYear}</small></p>
    //       </Col>

    //     </Row>
    //   </Container>
    // </footer>

    <footer>
      <Container id="footer">
        <Row>
          {/* <Col className="footer-icons">
            <Github size={50}/>
          </Col>
          <Col className="footer-icons">
            <Github size={50}/>
          </Col> */}
          <Col className="footer-icons">
            <a href={'http://github.com/AnthonyM04/portfolio-web'}>
            <Github size={50}/>
            </a>
          </Col>
          {/* <Col className="footer-icons">
            <Github size={50}/>
          </Col>
          <Col className="footer-icons">
            <Github size={50}/>
          </Col> */}
        </Row>
      </Container>
      <small> {currentYear}</small>
     </footer>
  );
}
