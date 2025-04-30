import React, { useRef } from "react"; // Import useRef
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SaptakFolkDanceGroup from "./pages/SaptakFolkDanceGroup";
import SaptakInstitute from "./pages/SaptakInstitute";
import ChetanJethva from "./pages/ChetanJethva";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // For global styles and transitions

function App() {
  const location = useLocation();
  // Create a ref for the node that CSSTransition will manage
  // Note: This ref points to the Container. The Container itself doesn't
  // usually unmount/remount on route changes, but providing the ref
  // explicitly avoids the findDOMNode error. The key prop handles triggering the transition.
  const nodeRef = useRef(null);

  return (
    <div className="app-container bg-light text-dark">
      <Navbar />

      {/* Wrap Routes for Page Transitions */}
      <TransitionGroup component={null}>
        {" "}
        {/* component={null} prevents an extra div */}
        <CSSTransition
          // key={location.key} // location.key is sometimes null, pathname is safer
          key={location.pathname} // Use pathname as key for triggering transition
          nodeRef={nodeRef} // *** ADD THIS: Pass the ref to CSSTransition ***
          classNames="page-fade" // Prefix for CSS classes
          timeout={300} // Duration of the transition in ms
          // unmountOnExit // Optional: add if you want the component removed after exit anim
          // appear // Optional: add if you want the initial page load to animate too
        >
          {/*
            Apply the ref to the direct child (Container).
            CSSTransition will now apply classes to this node.
          */}
          <Container className="py-4 main-content" ref={nodeRef}>
            <Routes location={location}>
              {" "}
              {/* Pass location to Routes */}
              <Route path="/" element={<About />} />
              <Route
                path="/saptak-folk-dance-group"
                element={<SaptakFolkDanceGroup />}
              />
              <Route path="/saptak-institute" element={<SaptakInstitute />} />
              <Route path="/chetan-jethva" element={<ChetanJethva />} />
              {/* Add other routes here */}
            </Routes>
          </Container>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
