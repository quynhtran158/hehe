import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Support extends Component {
  render() {
    return (
      <div className="support-container px-5 py-5">
        <h1 className="py-1">We Support</h1>
        <p>
          If you need help, please contact us at:
          <br />
          Email:
        </p>
        <Row>
          {/* First Card */}
          <Col sm={6} md={4} lg={3}>
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

          {/* Second Card */}
          <Col sm={6} md={4} lg={3}>
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
    );
  }
}

export default Support;
