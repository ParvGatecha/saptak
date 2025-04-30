import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Offcanvas,
  Button,
  Container,
  Navbar as BSNavbar, // Renamed to avoid conflict
  Nav,
  Image, // Import Image for easier handling in Offcanvas if needed
} from "react-bootstrap";
import logo from "../assets/logo.png"; // Import the logo again
import "./Navbar.css"; // We'll add styles here for height and logo size

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getNavLinkClass = ({ isActive }) => {
    let baseClass = "nav-link text-dark";
    if (isActive) {
      baseClass += " fw-bold active";
    }
    return baseClass;
  };

  return (
    <>
      {/* Navbar with custom class for styling */}
      <BSNavbar
        bg="light"
        variant="light"
        className="shadow custom-navbar" // Added custom-navbar class
        sticky="top"
        expand={false} // Keep collapsed
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          {/* Hamburger Button */}
          <Button
            variant="outline-dark"
            onClick={handleShow}
            aria-label="Toggle navigation menu"
            className="menu-toggler" // Add class if specific styling needed
          >
            ☰
          </Button>

          {/* Logo in Navbar - Centered (or adjust alignment) */}
          {/* Wrap in a div if needed for finer positioning control */}
          <BSNavbar.Brand as={Link} to="/" className="navbar-logo-link mx-auto">
            <img
              src={logo}
              alt="Saptak Dance Studio Logo"
              className="navbar-logo" // Class for styling the navbar logo
            />
          </BSNavbar.Brand>

          {/* Optional: Placeholder to balance the flex container if logo isn't centered */}
          {/* <div style={{ width: 'calc(size-of-toggler-button)' }}></div> */}
        </Container>
      </BSNavbar>

      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="bg-light text-dark"
      >
        <Offcanvas.Header closeButton>
          {/* Optional Title */}
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Logo in Offcanvas */}
          <div className="text-center mb-4">
            {" "}
            {/* Center logo and add margin bottom */}
            <Image
              src={logo}
              alt="Saptak Dance Studio Logo"
              className="offcanvas-logo" // Class for styling the offcanvas logo
              fluid // Make it responsive within the offcanvas
            />
          </div>

          {/* Navigation Links */}
          <Nav className="flex-column">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={handleClose}
              className={getNavLinkClass}
              end
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/saptak-folk-dance-group"
              onClick={handleClose}
              className={getNavLinkClass}
            >
              Folk Dance Group
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/saptak-institute"
              onClick={handleClose}
              className={getNavLinkClass}
            >
              Institute
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/chetan-jethva"
              onClick={handleClose}
              className={getNavLinkClass}
            >
              Chetan Jethva
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
