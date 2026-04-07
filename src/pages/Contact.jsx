import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useRef } from "react";
import feedbackImg from "../assets/feedback.avif";

export default function Contact() {

  const nameRef = useRef();
  const emailRef = useRef();
  const typeRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const type = typeRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !type || !message) {
      alert("Please fill out all fields!");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert(`Thanks, ${name}! Your message has been sent.`);

    nameRef.current.value = "";
    emailRef.current.value = "";
    typeRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <>
      <h1>Contact Us</h1>

      <Row className="align-items-start">
        
        {/* LEFT: Form */}
        <Col xs={12} md={6} lg={5}>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="nameInput">Name</Form.Label>
              <Form.Control
                id="nameInput"
                ref={nameRef}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="emailInput">Email</Form.Label>
              <Form.Control
                id="emailInput"
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="typeInput">Message Type</Form.Label>
              <Form.Select id="typeInput" ref={typeRef}>
                <option value="">Select a type...</option>
                <option value="Question">Question</option>
                <option value="Feedback">Feedback</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="messageInput">Message</Form.Label>
              <Form.Control
                id="messageInput"
                as="textarea"
                rows={4}
                ref={messageRef}
                placeholder="Type your message here..."
              />
            </Form.Group>

            <Button type="submit">Send Message</Button>
          </Form>
        </Col>

        <Col xs={12} md={6} lg={5} style={{ marginTop: "100px", marginLeft: "80px"}}>
          <Image
            src={feedbackImg}
            alt="Feedback"
            fluid
            rounded
          />
        </Col>

      </Row>
    </>
  );
}