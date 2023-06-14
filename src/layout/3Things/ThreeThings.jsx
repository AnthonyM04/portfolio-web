import { Col, Container, Row } from "../../util/Bootstrap.jsx";

export default function ThreeThings() {
  return (
    <section>
      <Container className="my-5 each-element-container">
        <Row>
          <Col>
            <h3 className="card-title text-center headers">Three Things!</h3>
            <p className="card-sub-title text-center">// ps.. make sure to hover your cursor over the cards</p>
          </Col>
        </Row>
        

        <Row>
          <Col>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="qf-img"
                    src="/img/3things/designed.svg"
                    alt="photoshop"
                  />

                  <p className="title">Diverse Skillset</p>
                </div>
                <div className="flip-card-back">
                  <h4 className="title">Diverse Skillset</h4>
                  <p className="flip-card-text">
                  With my background in software engineering and graphic design, I offer a unique skill set that combines technical expertise with artistic creativity. This allows me to approach UX/UI design from a holistic perspective, considering both the technical feasibility and visual appeal of the interfaces I create.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="qf-img"
                    src="/img/3things/shocker.svg"
                    alt="light bulb"
                  />
                  <p className="title">Problem Solver</p>
                </div>
                <div className="flip-card-back">
                  <h4 className="title">Problem Solver</h4>
                  <p className="flip-card-text">
                    As a brand new 18 year old software engineerer, I feel like I could offer a unique / fresh perspective to problems.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="qf-img"
                    src="/img/3things/huggies.svg"
                    alt="🫂 2 people hugging"
                  />
                  <p className="title">Cooperative</p>
                </div>
                <div className="flip-card-back">
                  <h4 className="title">Cooperative</h4>
                  <p className="flip-card-text">
                    As a software developer, I am a great team player because I understand the importance of collaboration in achieving our common goals. I actively participate in team discussions, listen to other team members' opinions, and provide constructive feedback to help improve our team's performance!
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
