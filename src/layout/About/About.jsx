import { Container, Row, Col, Image, Button } from "../../util/Bootstrap.jsx";

export default function About() {
  return (
    <Container fluid id="about" className="p-5 about each-element-container">
      <Row>
        <Col>
          <h2 className="text-center about-header headers">About</h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md={{ span: 5, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          xl={{ span: 4, offset: 1 }}
          className="profile-card"
        >
          <div className="circle" />
          <div className="circle" />
          <img
            src={`${process.env.PUBLIC_URL}/img/Anthony.png`}
            alt="Anthony Murphy"
            className="about-portrait"
          />
        </Col>

        <Col
          md={{ span: 6, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          xl={{ span: 7, offset: 2 }}
          className="about-text"
        >
          <br/>
          <p>p1</p>
          <p>p2</p>
          <p>p3</p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button
            href="https://www.linkedin.com/in/anthony-murphy04"
            target="_blank"
            rel="noreferrer"
          >Socials</Button>
        </Col>
      </Row>
    </Container>
  );
}
