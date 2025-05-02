import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap"; // Added Row, Col, Image

function ChetanJethva() {
  // Define the image style object (same as in SaptakFolkDanceGroup)
  const imageStyle = {
    width: "100%",
    height: "auto", // Adjust height if needed, or let it scale
    maxHeight: "450px", // Set a max height to prevent image becoming too tall
    objectFit: "cover", // Or 'contain' depending on the image aspect ratio
    borderRadius: "1rem", // Use the same border radius
  };

  return (
    // Use the same outer container styling
    <Container className="my-3 p-1 fade-in-on-load mw-100 mw-100">
      {/* Apply the same card styling */}
      <Card className="p-3 p-md-5 bg-dark text-warning border-light shadow-lg rounded-4">
        {/* Center the title */}
        <h2 className="text-center mb-4">Mr. Chetan Jethva</h2>

        {/* Use Row and Col for layout */}
        <Row className="align-items-center">
          {/* Column for the Image */}
          <Col
            md={5}
            className="mb-4 mb-md-0 text-center"
            data-aos="fade-right"
          >
            {" "}
            {/* Adjusted column size, added centering */}
            <Image
              src="/images/ChetanJethva.jpg" // <-- Replace with your actual image path
              alt="Mr. Chetan Jethva"
              style={imageStyle}
              className="shadow img-fluid" // Added img-fluid for better responsiveness
            />
          </Col>

          {/* Column for the Text */}
          <Col md={7}>
            {/* Apply fs-5 for consistent text size */}
            {/* Consider breaking the text into smaller paragraphs for readability */}
            <p className="fs-5">
              Accepting the traditional art of <strong>Rass</strong> and{" "}
              <strong>Garba</strong> as his base, Mr. Chetan Jethava has striven
              hard to embellish it with his own inborn talents. In accordance
              with the demand of time, he gave it a fresh professional touch
              that could keep the new generation stuck to it.
            </p>
            <p className="fs-5">
              Being a born artist, he draws no boundary in his talent of
              dancing. And so he has gone a long way to giving birth to some
              very special styles of dance beautifully reflecting his culture.
              He has developed his own method and theory of catering training
              for the very deep and difficult-to-perform styles of Rass & Garba.
            </p>
            <p className="fs-5">
              He has gone through about <strong>1000 programs</strong> and
              spread this art in the shape of more than{" "}
              <strong>60,000 dancers</strong>. He is a young, creative dancer
              with mastery of Gujarati folk dance as well as the classical dance{" "}
              <strong>'Kaththak'</strong>. He has also widened horizons for
              Gujarati artists by placing his choreography in the Hollywood
              movie <i>'The Memsaab'</i>.
            </p>
            <p className="fs-5">
              Chetan Jethava, who has dedicated his whole life to the divine
              dance Rass & Garba, is a versatile dancer and enjoys a very strong
              impact on the field of trainers and guides. He has rocked the hot
              seat of the number one TV show{" "}
              <strong>KAUN BANEGA CROREPATI</strong> with the legendary filmstar
              Amitabh Bachchan.
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ChetanJethva;
