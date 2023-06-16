import { Container, Row, Col, Button } from "../../util/Bootstrap.jsx";

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
          <p>I grew up in New Hampshire, graduated high school and quickly moved to Florida to start my career. Ever since I was young, I loved computer games and I loved how the internet felt like the Wild West! I would often watch behind the scenes on how my favorite games were made and I would inspect the code on some of my favorite websites and try to understand the logic.</p>
          <p>In my last year of high school, I took a Python class and something clicked for that that hadn't in any other class that I've ever taken before. When I came to Florida, I started looking around for Coding Programs and then I found out about Boca Code! Taking their 10 week program was the hardest thing but also the best thing that has happened in my life.</p>
          <p>Now, I'm looking for a career as a fullstack developer, and I'm excited to see what happens next!</p>
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