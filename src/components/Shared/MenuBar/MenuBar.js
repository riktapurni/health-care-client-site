import React from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo.webp'
//import { HashLink } from 'react-router-hash-link';
const MenuBar = () => {
  const {user, logOut} = useAuth();
    return (
        <>
           <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home"><div>
              <img src={logo} alt="" />
              </div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Navbar.Text className="mx-2 ">
                             <span className="text-danger fw-bolder"> {user?.displayName}</span>
                        </Navbar.Text>
              {user?.email ?
                <Button onClick={logOut} variant="primary">Log Out</Button>
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
        </>
    );
};

export default MenuBar;