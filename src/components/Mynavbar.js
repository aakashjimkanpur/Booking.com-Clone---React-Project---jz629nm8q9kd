import React, { useState, createContext, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext";

const Mynavbar = () => {
  const navigate = useNavigate();
  const usercontext = React.useContext(UserContext);
  function logout() {
    const valueToStore = {
      name: "",
      email: "",
      password: "",
      isLogin: false,
    };
    window.localStorage.setItem("LoginUser", JSON.stringify(valueToStore));
    toast.success("Log out Successfully");
    navigate("/");
  }
  useEffect(() => {
    try {
      let user = window.localStorage.getItem("LoginUser");
      user = JSON.parse(user);
      if (!user || !user.isLogin) {
        usercontext.setname.setUserName("Login");
      } else usercontext.setname.setUserName(user.name.toUpperCase());
    } catch (error) {
      console.log(error);
    }
  });
  console.log("User Context= ", usercontext.name.userName);
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
              <Nav.Link style={{ fontSize: "20px" }}>
                <FaUser />
              </Nav.Link>
              <NavDropdown
                onClick={() => {
                  if (usercontext.name.userName === "Login") navigate("/login");
                }}
                title={usercontext.name.userName}
                id="collasible-nav-dropdown"
                style={{ fontSize: "20px" }}
              >
                <NavDropdown.Item
                  onClick={() => {
                    if (usercontext.name.userName === "Login")
                      navigate("/login");
                    else {
                      const valueToStore = {
                        name: "",
                        email: "",
                        password: "",
                        isLogin: false,
                      };
                      window.localStorage.setItem(
                        "LoginUser",
                        JSON.stringify(valueToStore)
                      );
                      toast.success("Log out Successfully");
                      navigate("/");
                    }
                  }}
                >
                  {usercontext.name.userName === "Login" ? "Login" : "Logout"}
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
