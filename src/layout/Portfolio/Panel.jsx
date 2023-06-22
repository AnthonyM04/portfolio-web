import { Col, Card, Button, Modal, Container, Row, Image } from "../../util/Bootstrap.jsx";
import { Link, Link45deg, XLg } from "react-bootstrap-icons";
import { useState } from "react";

export default function Panel ({ data:{id, name, about, website, image} }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <Col key={id} md={10} lg={6} xl={4}>
      <Card className="card" onClick={toggleShow}>
          <h5>{name}</h5>
          <a
             target="_blank"
             rel="noreferrer"><Card.Img
            src={`${process.env.PUBLIC_URL}/img/projects/${image}`} fluid/></a>
      </Card>

      <Modal show={show} onHide={toggleShow} size="lg" centered>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Image src={`${process.env.PUBLIC_URL}/img/projects/${image}`} fluid/>
              </Col>
              <Col xs={12} md={6}>
                <h5 className="modal-header">{name}</h5>
                <p>{about}</p>
                <Modal.Footer>
                <Button href={website} className="modal-button"><Link45deg/></Button>
                <Button data-dismiss="modal"><XLg/></Button>
                </Modal.Footer>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  );
}
