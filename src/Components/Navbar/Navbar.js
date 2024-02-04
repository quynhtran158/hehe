import { Navbar, Nav, Container} from "react-bootstrap";
import { useState, useEffect} from "react"; 
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
      const onScroll = () => {
        if(window.scrollY > 50){
          setScrolled(true);
        }
        else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, []) 

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#booking">Booking</Nav.Link>
            <NavDropdown title="Map" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#map1">Disability</NavDropdown.Item>
              <NavDropdown.Item href="#map2">Children and Women</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Router>
    )
}

export default NavBar;