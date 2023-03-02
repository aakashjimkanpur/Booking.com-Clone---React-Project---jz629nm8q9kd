import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
const Mynavbar = () => {
  console.log("hello navBar");
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="link-primary">
            <h4>Booking.com</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="stays" style={{ fontSize: "20px" }}>
                Stays
              </Nav.Link>
              <Nav.Link href="#Flight" style={{ fontSize: "20px" }}>
                Flight
              </Nav.Link>
              <Nav.Link href="#User" style={{ fontSize: "20px" }}>
                <FaUser />
              </Nav.Link>
              <NavDropdown
                title="UserName"
                id="collasible-nav-dropdown"
                style={{ fontSize: "20px" }}
              >
                <NavDropdown.Item href="#action/3.1">
                  Login/Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default Mynavbar;
