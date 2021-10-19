import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';


const Contact = () => {
    return (
        <div id='contact'>
           <Container>
               <h2 className="text-center my-5 ">Keep in Touch</h2>
                  <Row className="mt-4">
    <Col sm={8}>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
    </Col>
    <Col sm={4}>
      <p className="text-success">Address</p>
      <p>26/A,lack View</p>
      <p>Uk</p>
    </Col>
  </Row>     
</Container>


        </div>
    );
};

export default Contact;