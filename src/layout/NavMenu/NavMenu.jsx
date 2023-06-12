import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from "../../resume.pdf";

export default function NavMenu() {
    return(
        <Navbar className="sticky-top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#work">work</Nav.Link>
              <Nav.Link href="#skills">skills</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
              <Button href={resume} rel="noreferrer" target="_blank">Resumé</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
