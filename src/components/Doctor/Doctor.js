import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {name, img, specialist} = doctor;
    return (
        <div>
          <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {specialist}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>   
        </div>
    );
};

export default Doctor;