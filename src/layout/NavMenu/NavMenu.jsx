import { Navbar, Container, Nav, Button } from "../../util/Bootstrap.jsx";
import { HashLink } from "react-router-hash-link";
import resume from "../../resume.pdf";

export default function NavMenu() {
    return(
        <Navbar variant="dark" className="navmenu" expand="lg" sticky="top">
        <Container className="navmenu-text" fluid>
          <Navbar.Brand as={HashLink} to="#top"><img src={'./img/icons/Favicon.png'}></img>®</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={HashLink} to="#about">about</Nav.Link>
              <Nav.Link as={HashLink} to="#works">work</Nav.Link>
              <Nav.Link as={HashLink} to="#skills">skills</Nav.Link>
              <Nav.Link as={HashLink} to="#contact">contact</Nav.Link>
              <Button href={resume} rel="noreferrer" target="_blank">Resumé</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
