import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="my-5 p-3" id="services">
            <h2 className="mb-5">Our Services</h2>
            <Container>
                 <Row xs={1} md={3} className="g-4">
            {
                // services.map(service => <Service
                // key = {service.id}
                // service = {service}
                // >

                // </Service>)
                services.map(service => (<Col key={service?.id}>
      <Card>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>
            {service.description}
          </Card.Text>
        <Link to= {`/services/${service.id}`}> <Button variant="primary">Booking for {service.name.toLowerCase()}</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col>))
            }
            </Row>
            </Container>
        </div>
    );
};

export default Services;