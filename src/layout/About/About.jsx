import { Container, Row, Col, Image, Button } from "../../util/Bootstrap.jsx";

export default function About() {
  return (
    <Container fluid id="about" className="p-5 about">
      <Row>
        <Col>
          <h2 className="text-center headers">
            <span>About</span>
          </h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={6} lg={5} xl={3} className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
          <Image src={`${process.env.PUBLIC_URL}/img/Anthony.png`} alt="Anthony Murphy" className="border-style mb-4" fluid/>
        </Col>

        <Col lg={5} className="about-text">
          <br />
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
