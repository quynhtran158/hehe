import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../C&W/CW.css";

class CW extends Component {
  render() {
    return (
      <div className="childrenMap">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1b9HZPFYh9EAR4k_xT7KEZLk9Wkd80nQ&ehbc=2E312F"
          width="1450"
          height="600"></iframe>
        <Form className="px-5 py-5">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 px-6 py-6" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="By check in the box, you agree to our Terms of Services and Privacy Settings."
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ fontSize: "20px" }}>
            Submit Your Evaluation
          </Button>
        </Form>
      </div>
    );
  }
}

export default CW;
