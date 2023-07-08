// Archivos
import CartWidget from './CartWidget';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/img/letrasW.png" 
                alt="logo-Memini"
                height="25" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Inicio</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown" className="dropdown-menu-dark">
                <NavDropdown.Item href="#action/3.1">Joyeria</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Textil
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Información</Nav.Link>
            </Nav>
            <Nav>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}


export default NavBar;