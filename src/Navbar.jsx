import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const style = ({ isActive }) => {
  return {
    padding: "0.6rem",
    fontSize: "13pt",
    color: isActive ? "white" : "grey",
    textDecoration: "none",
  };
};

export default function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="mb-2"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              <h1 className="text-center bi-bell" id="nav-brand">
                &nbsp;Rand<i className="bi-check-circle fs-4"></i>m Advice
              </h1>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <NavLink to="/" style={style}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="search" style={style}>
                  Search Advice
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="about" style={style}>
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="contact" style={style}>
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
