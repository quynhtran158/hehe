import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  //const [activeLink, setActiveLink] = useState("home");
  //const onUpdateActiveLink = (value) => {
  // setActiveLink(value);
  //};

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      id="navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="me">
              Home
            </Link>
            <Link to="/Booking" className="me">
              Booking
            </Link>
            <Link to="/Disability" className="me">
              Disabled Map
            </Link>
            <Link to="/CW" className="me">
              Women Map
            </Link>
            <Link to="/Contact" className="me">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
