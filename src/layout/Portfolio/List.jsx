import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import Panel from "./Panel.jsx";
import data from "../../data/projects.json";

export default function Portfolio() {
  return (
    <section id="works">
      <Container className="my-5 each-element-container">
        <Row>
          <Col className="text-center">
            <h4 className="headers">Works</h4>
            <div>
            <span className="sub-header">Where creativity and code collide.</span>
            </div>
          </Col>
        </Row>
        <Row className="px-xs-0 px-md-3 px-lg-4 px-xl-5 g-5 justify-content-center">
          {data
            .map((element) => {
              return element ? (
                <Panel key={element.id} data={element} />
              ) : (
                <p>Loading</p>
              );
            })
            .sort()
            .reverse()}
        </Row>
      </Container>
    </section>
  );
}
