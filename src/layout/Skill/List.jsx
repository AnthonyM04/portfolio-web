import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import skillDev from "../../data/skill-dev.json";
import skillCreative from "../../data/skill-creative.json";
import skillPm from "../../data/skill-pm.json";
import Panel from "./Panel.jsx";


export default function Skill() {

  return (
    <section className="each-element-container">
      <Container fluid id="skills" className="p-5">        
        <Row>
          <Col className="text-center">
            <h5 className="headers">Skills</h5>
              <span className="sub-header">Software, programming languages and more that I have experience with:</span>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={3} className="text-center">
            <h2 className="skills-category">Creative</h2>
            {skillCreative.map(
              (element) =>  
                   <Panel 
                  key={element.id} 
                  name={element.name}/>
            )}
          </Col>

          <Col md={5} className="text-center">
            <h2 className="skills-category">Dev</h2>
            {skillDev.map(
              (element) => (
                <Panel                   
                  key={element.id} 
                  name={element.name} />
              )
            )}
          </Col>

          <Col md={3} className="text-center">
            <h2 className="skills-category">PM</h2>
            {skillPm.map(
              (element) => (
                <Panel 
                  key={element.id} 
                  name={element.name} />
              )
            )}
          </Col>          
        </Row>
      </Container>
    </section>
  );
}
