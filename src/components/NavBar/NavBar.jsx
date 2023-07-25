// Archivos
import CartWidget from "./CartWidget.jsx";
// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//Estilos
import "../styles/navBar.css";
// Router
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="/img/letrasW.png"
            alt="logo-Memini"
            height="25" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/Joyeria">Joyeria</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Textil">Textil</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Accesorios">Accesorios</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#">Información</Nav.Link> */}
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