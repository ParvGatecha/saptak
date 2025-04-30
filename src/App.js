import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// Change the import or just use the 'fluid' prop
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SaptakFolkDanceGroup from "./pages/SaptakFolkDanceGroup";
import SaptakInstitute from "./pages/SaptakInstitute";
import ChetanJethva from "./pages/ChetanJethva";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

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
          <Container fluid className="main-content" ref={nodeRef}>
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
