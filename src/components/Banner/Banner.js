import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import doctor from '../../img/doctor.png';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <Container className="py-5">
                <Row className="align-items-center">
                <Col xs={12} md={5}>
                <div className="text-start">
                    <h1><span className="text-primary fw-bolder">Health care</span>
                <br />
                For Whole Family
                </h1>
                <p className="banner-text mt-3">
                    In healthcare sector, service excellence is the facility of 
                    <br />
                     the hospital as
                    healthcare service provider to consistently.
                </p>
                <Button variant="primary">Check Our Services</Button>
                </div>
                </Col>
                <Col xs={12} md={7}>
                <img src={doctor} alt="" className="img-fluid"/>
                </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;