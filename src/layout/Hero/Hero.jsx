import { Container, Row, Col, Image, Button } from "../../util/Bootstrap.jsx";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export default function Hero() {
  const[introImage, setIntroImage] = useState(0);

  const introArray = [
    "SB.png",
    "MR ROBOT.png",
    "ENRON.png",
    "boyish.png",
    "Unown.png",
    "Eva.png",
    "Cyber.png",
    "Favicon.png"
  ];

  if (introImage >= introArray.length) 
    setIntroImage(0);

  return (
    <main>
      <Container fluid className="">
        <Row className="d-flex align-items-center bg-intro p-4">
          <Col
            md={{ span: 5, offset: 0 }} 
            lg={{ span: 5, offset: 0 }} 
            xl={{ span: 3, offset: 1 }} 
            className="logo-trick">
            <div className="easter-egg">
            <Image src={`${process.env.PUBLIC_URL}/img/icons/${introArray[introImage]}`}
              alt="Anthony Murphy"
              fluid
              onClick={() => setIntroImage(introImage+1)} />
              </div>
          </Col>

          <Col 
            md={{ span: 6, offset: 1 }} 
            lg={{ span: 6, offset: 1 }} 
            xl={{ span: 6, offset: 2 }}
            className="bg-intro-text">
              <h1>Hello, my name is Anthony Murphy!</h1>
              <p>I'm a software Engineer based in South Florida! I'm a fullstack developer but I especially love frontend work! When I'm not coding, I'm looking into the latest of fashion and playing video games.</p>
              <HashLink
                  to="/#portfolio">
                  <Button
                      text='See Portfolio'>
                        my works
                  </Button>
                </HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
