import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function SaptakInstitute() {
  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "1rem",
  };

  return (
    <Container className="my-3 fade-in-on-load mw-100">
      <Card className="p-3 p-md-5 bg-dark text-warning border-light shadow-lg rounded-4">
        <h2 className="text-center mb-4">Saptak Institute of Folk Dance</h2>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p className="fs-5">
              <strong>Saptak Institute</strong> is the educational heart of our
              movement—a place where tradition meets discipline, and passion
              becomes performance. Founded by{" "}
              <strong>Mr. Chetan Jethava</strong>, the institute has become a
              hub for aspiring dancers to master the intricate styles of
              Gujarati folk and classical dance.
            </p>
            <p className="fs-5">
              We provide structured training in <strong>Rass, Garba</strong>,
              and <strong>Kathak</strong>, incorporating both technique and
              expression. From beginner to professional, every dancer is
              nurtured with personal attention and cultural context.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="\images\IMG-20250420-WA0007.jpg"
              alt="Saptak Institute Training Session"
              style={imageStyle}
              className="shadow"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <p className="fs-5">
              What makes Saptak unique is Mr. Jethava’s **original teaching
              method**—a powerful blend of rhythm theory, movement mechanics,
              and cultural storytelling. His philosophy is to build not just
              dancers, but cultural ambassadors.
            </p>
            <p className="fs-5">
              The institute has trained over <strong>60,000 dancers</strong>,
              many of whom now perform across the world, teach others, or
              contribute creatively to Indian dance communities.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="\images\IMG-20250420-WA0015.jpg"
              alt="Chetan Jethava Teaching"
              style={imageStyle}
              className="shadow"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="fs-5 text-center">
              Whether you're preparing for Navratri, cultural events, or aiming
              to master folk dance professionally — the{" "}
              <strong>Saptak Institute</strong> is where your journey begins.
            </p>
            <p className="fs-5 fst-italic text-center">
              “We don't just train dancers. We raise torchbearers of tradition.”
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SaptakInstitute;
