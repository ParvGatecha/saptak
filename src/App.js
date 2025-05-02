import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// Change the import or just use the 'fluid' prop
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SaptakFolkDanceGroup from "./pages/SaptakFolkDanceGroup";
import SaptakInstitute from "./pages/SaptakInstitute";
import ChetanJethva from "./pages/ChetanJethva";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms - animation duration
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="app-container bg-light text-dark">
      <Navbar />

      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          classNames="page-fade"
          timeout={300}
        >
          {/* *** CHANGE HERE: Use Container fluid *** */}
          <Container fluid className="main-content p-0" ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<About />} />
              <Route
                path="/saptak-folk-dance-group"
                element={<SaptakFolkDanceGroup />}
              />
              <Route path="/saptak-institute" element={<SaptakInstitute />} />
              <Route path="/chetan-jethva" element={<ChetanJethva />} />
            </Routes>
          </Container>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
