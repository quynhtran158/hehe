import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ContactUs() {
  return (
    <div className="contactForm px-5 py-5" id="contactus">
      <h1 className="mb-3">
        {" "}
        Fill up the form and we will get back to you within 24 hours.{" "}
      </h1>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="PhoneNumber" placeholder="Enter Phone Number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Leave your messsage here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send message
        </Button>
      </Form>
    </div>
  );
}

export default ContactUs;
