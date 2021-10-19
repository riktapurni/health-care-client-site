import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import {  useParams } from "react-router-dom";

const Service = () => {
  
  const { id } = useParams();
  console.log(id)
  const [serviceDetails, setServiceDetails] = useState([]);
  const [service, setService] = useState({});


  useEffect(() => {
    fetch('/serviceDetails.json')
    
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
const foundService = serviceDetails.find(service => service?.id === id)
// console.log(foundService)
setService(foundService)
  },[serviceDetails]);

 

  return (
    <div>
      {id}
      <Container>
          <Row xs={1} md={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={service?.picture} />
            <Card.Body>
              <Card.Title>{service?.name}</Card.Title>
              <Card.Text>
                {service?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Service;
