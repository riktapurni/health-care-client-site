import React from 'react';
import { Container, Row } from 'react-bootstrap';
import d1 from '../../img/doctor/d1.webp'
import d2 from '../../img/doctor/d2.webp'
import d3 from '../../img/doctor/d3.webp'
import d4 from '../../img/doctor/d4.webp'
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        img: d1,
        name: 'Andrew Smith',
        specialist: 'eye specialist'
    },
    {
        img: d2,
        name: 'John Anderson',
        specialist: 'Dental surgon'
    },
    {
        img: d3,
        name: 'Zakaria Smith',
        specialist: 'Skin specialist'
    },
    {
        img: d4,
        name: 'Sakib Anderson',
        specialist: 'Physical Therapist'
    }
]
const Doctors = () => {
    
    return (
        <div id="doctors">
            <Container>
                <h2 className="my-5">Our Doctors</h2>
                <Row xs={1} md={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor
                    key ={doctor.name}
                    doctor = {doctor}
                    ></Doctor>
            )
                }
                
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;