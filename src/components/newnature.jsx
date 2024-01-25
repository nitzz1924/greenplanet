import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const headingStyle = {
  color: "white",
  fontSize: "50px",
  fontWeight: "light",
  textAlign: "center",
  lineHeight: "60px",
};
const Newnature = () => {
  return (
    <>
    <Container fluid id="whatsnewinnature">
      <Row className="py-5 mx-5">
        <Col className="text-white" style={headingStyle}>
          What’s New in Nature
        </Col>
        <p style={{ color: "white" }}>
          Recent updates, immersive stories and relevant explainer articles from
          around The Nature Conservancy.
        </p>
      </Row>
    </Container>
    <Container fluid className="bg-white">
      <div className="d-grid justify-content-center h-100">
        <Row id="floatingdivs">
          <Col lg={6}>
            <Card style={{ width: "18rem" }} className="bg-white">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>

    </>
  );
};

export default Newnature;
