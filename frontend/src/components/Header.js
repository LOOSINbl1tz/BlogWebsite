import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication status from Redux store

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          BlogPost
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated ? null : (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
            {isAuthenticated ? null : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {isAuthenticated ? (
              <Nav.Link as={Link} to="/blogpost">
                Post
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
