import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function About() {
  const imageStyle = {
    width: "100%", // Ensures it scales with its container
    height: "300px", // Fixed height for consistency
    objectFit: "cover", // Maintains aspect ratio and crops nicely
    borderRadius: "1rem",
  };

  return (
    <Container className=" my-3 p-1 fade-in-on-load mw-100">
      <Card className="p-3 p-md-5 bg-dark text-warning border-light shadow-lg rounded-4">
        <h2 className="text-center mb-4">
          Preserving Tradition. Inspiring Generations.
        </h2>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p className="fs-5">
              <strong>Saptak</strong> is a cultural legacy in motion — a folk
              dance collective born out of love for Gujarat’s vibrant
              traditions. It serves as a bridge between generations, allowing
              the younger community to experience and celebrate the spirit of{" "}
              <strong>Rass</strong> and <strong>Garba</strong> in their most
              authentic form.
            </p>
            <p className="fs-5">
              Whether it's through high-energy performances or heartfelt
              community involvement, Saptak is committed to keeping the pulse of
              folk dance alive.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="\images\IMG-20250420-WA0022.jpg"
              alt="Saptak Dance Performance"
              style={imageStyle}
              className="shadow"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <p className="fs-5">
              The soul behind Saptak is <strong>Mr. Chetan Jethava</strong>, a
              visionary choreographer and master of Gujarati folk and classical
              Kathak dance. With an innate artistic flair, he has reimagined
              traditional dance through a modern lens — without ever losing its
              roots.
            </p>
            <p className="fs-5">
              Mr. Jethava has trained over <strong>60,000 dancers</strong>,
              choreographed for over <strong>1000 programs</strong>, and
              represented Gujarat’s heritage internationally — including in the
              Hollywood film <em>"The Memsaab"</em>.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="\images\IMG-20250420-WA0016.jpg"
              alt="Mr. Chetan Jethava"
              style={imageStyle}
              className="shadow"
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <p className="fs-5">
              From training academies to grand stage shows, Saptak isn’t just
              performing — it's building a cultural legacy. We strive to make
              every beat of the dhol and every swirl of a dupatta a celebration
              of identity, unity, and passion.
            </p>
            <p className="fs-5 fst-italic text-center">
              “Our mission is simple: Keep traditions alive. Make culture
              dance.”
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default About;
