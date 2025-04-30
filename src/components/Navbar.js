import React, { useState, useEffect, useRef } from "react"; // Import useEffect, useRef
import { Link, NavLink } from "react-router-dom";
import {
  Offcanvas,
  Button,
  Container,
  Navbar as BSNavbar,
  Nav,
  Image,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Navbar.css"; // Ensure CSS for transitions is here or in App.css

function Navbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // State to control visibility
  const lastScrollY = useRef(0); // Ref to store last scroll position
  const navbarHeight = useRef(0); // Ref to store navbar height for calculations

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const getNavLinkClass = ({ isActive }) => {
    let baseClass = "nav-link text-dark";
    if (isActive) {
      baseClass += " fw-bold active";
    }
    return baseClass;
  };

  // Effect to handle scroll event listener
  useEffect(() => {
    const navbarEl = document.querySelector(".custom-navbar");
    if (navbarEl) {
      navbarHeight.current = navbarEl.offsetHeight;
      // Update main content padding dynamically (optional but smoother)
      const mainContent = document.querySelector(".main-content");
      if (mainContent) {
        mainContent.style.paddingTop = `${navbarHeight.current}px`;
      }
    }

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      // Don't hide if near the top or scrolling up past the navbar height threshold
      if (
        currentScrollY <= navbarHeight.current ||
        currentScrollY < lastScrollY.current
      ) {
        setShowNavbar(true);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > navbarHeight.current + 10
      ) {
        // Add a small buffer (10px)
        // Hide only if scrolling down significantly past the navbar
        setShowNavbar(false);
        // Close Offcanvas if open when hiding navbar
        handleCloseOffcanvas();
      }
      // Remember scroll position for next comparison
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {/* Add dynamic class 'navbar-hidden' based on state */}
      <BSNavbar
        bg="light"
        variant="light"
        className={`shadow custom-navbar ${!showNavbar ? "navbar-hidden" : ""}`} // Add dynamic class
        sticky="top"
        expand={false}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Button
            variant="outline-dark"
            onClick={handleShowOffcanvas}
            aria-label="Toggle navigation menu"
            className="menu-toggler"
          >
            ☰
          </Button>

          <BSNavbar.Brand as={Link} to="/" className="navbar-logo-link mx-auto">
            <img
              src={logo}
              alt="Saptak Dance Studio Logo"
              className="navbar-logo"
            />
          </BSNavbar.Brand>

          {/* Placeholder might be needed if logo isn't centered perfectly */}
          <div style={{ width: "50px", visibility: "hidden" }}>
            {" "}
            {/* Adjust width based on toggler size */}
            {/* Placeholder to help center logo when only toggler is visible */}
          </div>
        </Container>
      </BSNavbar>

      {/* Offcanvas */}
      <Offcanvas
        // Use controlled state 'showOffcanvas'
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="start"
        className="bg-light text-dark"
      >
        {/* ... Offcanvas content remains the same ... */}
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center mb-4">
            <Image
              src={logo}
              alt="Saptak Dance Studio Logo"
              className="offcanvas-logo"
              fluid
            />
          </div>
          <Nav className="flex-column">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={handleCloseOffcanvas}
              className={getNavLinkClass}
              end
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/saptak-folk-dance-group"
              onClick={handleCloseOffcanvas}
              className={getNavLinkClass}
            >
              Folk Dance Group
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/saptak-institute"
              onClick={handleCloseOffcanvas}
              className={getNavLinkClass}
            >
              Institute
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/chetan-jethva"
              onClick={handleCloseOffcanvas}
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
