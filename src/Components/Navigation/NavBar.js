import { Container, Nav, Navbar  } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar-style" expand="lg">
      <Container>
        <Navbar.Brand className="nav-selection" href="#link">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-selection" href="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="nav-selection" href="/quienes-somos">
              Quienes somos
            </Nav.Link>
            <Nav.Link className="nav-selection" href="/proyectos">
              Nuestras obras
            </Nav.Link>
            <Nav.Link className="nav-selection" href="/presupuesto">
              Presupuesto
            </Nav.Link>
            <Nav.Link className="nav-selection" href="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <div class="animation start-home"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;