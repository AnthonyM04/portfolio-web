import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import data from "../../data/3things.json";
import Panel from "./Panel.jsx";

export default function ThreeThings() {
  return (
    <section id="3things">
      <Container className="each-element-container">
        <Row>
          <Col>
            <h3 className="card-title text-center headers">Three Things!</h3>
            <p className="sub-header text-center">
              // ps.. make sure to hover your cursor over the cards
            </p>
          </Col>
        </Row>
      </Container>
      <Row className="justify-content-center three-things-card">
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
    </section>
  );
}
