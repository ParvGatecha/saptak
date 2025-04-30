import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function SaptakFolkDanceGroup() {
  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "1rem",
  };

  return (
    <Container className="my-3 fade-in-on-load mw-100">
      <Card className="p-5 bg-dark text-warning border-light shadow-lg rounded-4">
        <h2 className="text-center mb-4">Saptak Folk Dance Group</h2>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p className="fs-5">
              The <strong>Saptak Folk Dance Group</strong> is a premier
              performance troupe that brings the essence of Gujarat’s
              traditional dance forms—<strong>Rass</strong> and{" "}
              <strong>Garba</strong>—to life on stage. Founded and choreographed
              by the celebrated <strong>Mr. Chetan Jethava</strong>, the group
              is known for its energetic performances and cultural authenticity.
            </p>
            <p className="fs-5">
              Our dancers are not just performers—they are cultural storytellers
              who express emotion, tradition, and pride through every beat and
              twirl.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="\images\IMG-20250420-WA0026.jpg"
              alt="Saptak Folk Dance Group performing"
              style={imageStyle}
              className="shadow"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <p className="fs-5">
              Saptak has performed in over <strong>1000 cultural events</strong>
              , including festivals, national stages, and international
              showcases. We’ve touched hearts across borders and inspired a new
              generation to reconnect with their roots.
            </p>
            <p className="fs-5">
              Every show is a carefully curated blend of vibrant costumes,
              traditional music, and synchronized movement, delivering a
              mesmerizing experience that reflects the soul of Gujarat.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="\images\IMG-20250420-WA0025.jpg"
              alt="Cultural dance performance"
              style={imageStyle}
              className="shadow"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="fs-5 text-center">
              Whether it's a festival, wedding, government program, or
              international stage—<strong>Saptak Folk Dance Group</strong>{" "}
              brings energy, elegance, and cultural pride to every performance.
            </p>
            <p className="fs-5 fst-italic text-center">
              “We don’t just perform — we bring heritage to life.”
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SaptakFolkDanceGroup;
