import { Container, Row, Col, Image, Button } from "../../util/Bootstrap.jsx";

export default function About() {
  return (
    <Container fluid id="about" className="p-5 about">
      <Row>
        <Col>
          <h2 className="text-center about-header">
              About
          </h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={6} lg={5} xl={3} className="profile-card">
            <div className="circle"/>
            <div className="circle"/>
              <img src={`${process.env.PUBLIC_URL}/img/Anthony.png`} alt="Anthony Murphy" className="about-portrait"/>
        </Col>

        <Col lg={5} className="about-text">
          <p>p1</p>
          <p>p2</p>
          <p>p3</p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <a
            href="https://www.linkedin.com/in/anthony-murphy04"
            target="_blank"
            rel="noreferrer"
          >
            <Button text={"Connect on Linkedin"} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
