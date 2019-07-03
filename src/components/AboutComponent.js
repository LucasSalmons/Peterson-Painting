import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';

import { baseUrl } from '../shared/baseUrl';

const RenderStaff = ({ staff }) => {
    return (
        <Card>
            <CardImg src={baseUrl + staff.image} alt={staff.name} />
            <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                <CardSubtitle>{staff.title}</CardSubtitle>
                <CardText>{staff.description}</CardText>
            </CardBody>
        </Card>
    );
}

const StaffList = (props) => {
    const staff = props.staff.staff.map((staff, key) => {
        return (
            <div key={key} className="col-12 col-sm-4 mt-5">
                <RenderStaff staff={staff} />
            </div>
        );
    });
    if (props.staff.isLoading) {
        return (
            <p>test</p>
        );
    }
    else if (props.staff.errMess) {
        return (
            <h4>{props.staff.errMess}</h4>
        );
    }
    else
        return staff
}

const About = (props) => {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h1>About</h1>
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <h2>History</h2>
                    <p>Licensed and bonded in 2017, Peterson Painting operates out of Joshua Tree California and serves the high and low deserts.</p>
                    <p>Lead by owner and founder Tim Peterson with more than 20 years of experience painting projects of all shapes and sizes. Tim has always said: <strong>If you're going to do a job, do it right.</strong></p>
                    <p><em>License number: 1049661 </em></p>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardImg src="/" alt='Idea' />
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Our People</h2>
                </div>
                <StaffList staff={props.staff} />
            </div>
        </div>
    )
}

export default About;