import { Col, Card, Button, Modal, Row, Image } from "../../util/Bootstrap.jsx";
import { Github, Link45deg, XLg } from "react-bootstrap-icons";
import { useState } from "react";

export default function Panel ({ data:{id, name, about, website, image, repo} }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const handleClose = () => setShow(false);

  return (
    <Col key={id} md={10} lg={6} xl={4}>
      <Card className="portfolio-card" onClick={toggleShow}>
          <a
             target="_blank"
             rel="noreferrer"><Card.Img
             src={`${process.env.PUBLIC_URL}/img/projects/${image}`}
             fluid/></a>
             <h5>{name}</h5>
      </Card>

      <Modal show={show} onHide={toggleShow} size="lg" centered>
        <Modal.Dialog className="p-2 my-1">
        <Modal.Body>
            <Row>
              <Col xs={12} md={6}>
                <Image src={`${process.env.PUBLIC_URL}/img/projects/${image}`} href={website} fluid/>
              </Col>
              <Col xs={12} md={6}>
                <h5 className="modal-header">{name}</h5>
                <p>{about}</p>
                <Modal.Footer>
                <Button href={website} className="modal-button"><Link45deg/></Button>
                <Button onClick={handleClose}><XLg/></Button>
                <Button href={repo}><Github/></Button>
                </Modal.Footer>
              </Col>
            </Row>
        </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </Col>
  );
}
