import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Support extends Component {
  render() {
    return (
      <div className="card-container py-5">
        <Row>
          {/* First Card */}
          <Col sm={4} md={3} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>WE SUPPORT</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Disabilities
                </Card.Subtitle>
                <Card.Text>
                Empowering Disabilities: "Unlocking Potential, Embracing Diversity - Together, We Build a World of Inclusion."

                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Card */}
          <Col sm={4} md={3} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>WE SUPPORT</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Children
                </Card.Subtitle>
                <Card.Text>
                Protecting Children: "Guardians of Innocence - Providing Safe Spaces for Every Child to Grow and Thrive."
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/* third card */}
          <Col sm={4} md={3} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>WE SUPPORT</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Women
                </Card.Subtitle>
                <Card.Text>
                Empowering Women: "Strength in Unity, Empowerment in Support - Together, We Rise Beyond Adversity."
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
