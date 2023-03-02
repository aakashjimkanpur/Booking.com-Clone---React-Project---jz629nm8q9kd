import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Mynavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/", { state: { id: 1, name: "Akash" } });
            }}
            href="/"
            className="link-primary"
          >
            <h4>Booking.com</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                onClick={() => {
                  navigate("/stays", { state: { id: 1, name: "Akash" } });
                }}
                style={{ fontSize: "20px" }}
              >
                Stays
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/flights", { state: { id: 1, name: "Akash" } });
                }}
                style={{ fontSize: "20px" }}
              >
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
