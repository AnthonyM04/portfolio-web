import { Navbar, Container, Nav, Button } from "../../util/Bootstrap.jsx";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import resume from "../../resume.pdf";

export default function NavMenu() {
    return(
        <Navbar className="navmenu" expand="lg">
        <Container className="navmenu-text">
          <Navbar.Brand as={Link} to="/"><img src={'./img/icons/Favicon.png'}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="#about">about</Nav.Link>
              <Nav.Link as={HashLink} to="#work">work</Nav.Link>
              <Nav.Link as={HashLink} to="#skills">skills</Nav.Link>
              <Nav.Link as={HashLink} to="#contact">contact</Nav.Link>
              <Button href={resume} rel="noreferrer" target="_blank">Resumé</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
