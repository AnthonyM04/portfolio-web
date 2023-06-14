import { Col, Container, Row } from "../../util/Bootstrap.jsx";

export default function ThreeThings() {

  return (
  <section>
    <Container className="my-5">
    <Row>
        <Col><h3 className="card-title text-center">Three Things!</h3></Col>
      </Row>

      <Row>

        <Col>
        <div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
        <svg className="qf-img" src="/img/3things/diverse.svg" alt="photoshop" />

            <p class="three-things-title">Diverse Skillset</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Diverse Skillse</h2>
            
            <p>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                </ul>
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <svg className="qf-img" src="/img/3things/light.svg" alt="light bulb" />
            <p class="title">Problem Solver</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Problem Solver</h2>
            <p>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col><div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <svg className="qf-img" src="/img/3things" alt="🫂 2 people hugging" />
            <p class="title">Cooperative</p>
        </div>
        <div class="flip-card-back">
            <p class="title">Cooperative</p>
            <p>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </p>
        </div>
    </div>
</div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

