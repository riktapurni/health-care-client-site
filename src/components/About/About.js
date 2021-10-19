import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import about from '../../img/about.jpg'
const About = () => {
    return (
        <div id="about">
             <Container className="my-5">
                 <h2 className="my-4">About Us</h2>
              <Row>
              <Col sm={1} md={7}>
                
 <p>For medicaments, see medication. For other uses, see Medicine (disambiguation).
Medicine
Marble statue of Asclephius on a pedestal, symbol of medicine in Western medicine
Statue of Asclepius, the Greek god of medicine, holding the symbolic Rod of Asclepius with its coiled serpent
Specialist	Medical specialty
Glossary	Glossary of medicine
Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health</p> 
<Button variant="primary">Load More</Button> 
</Col>
              <Col sm={4} md={5} >
                <Image src={about} fluid />
                
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default About;