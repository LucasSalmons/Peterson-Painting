import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';

function RenderStaff({ staff }) {
    return (
        <Card>
            <CardImg src={staff.image} alt={staff.name} />
            <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                <CardSubtitle>{staff.title}</CardSubtitle>
                <CardText>{staff.description}</CardText>
            </CardBody>
        </Card>
    )
}

function About(props) {

    const staff = props.staff.map((staff) => {
        return (
            <div className="col-12 col-sm-4 mt-5">
                <RenderStaff staff={staff} />
            </div>
        );
    })

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h1>About</h1>
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <h2>History</h2>
                    <p>Licensed and bonded in 2017, Peterson Painting operates out of Joshua Tree California and serves the high and low deserts.</p>
                    <p>Lead by owner and founder Tim Peterson with more than 20 years of experience painting projects of all shapes and sizes. Tim has always said: <strong>If you're goning to do a job, you better do it right</strong></p>
                    <p><em>License number: 1049661 </em></p>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardImg src="/assets/images/logo-peterson-painting.jpeg" alt='logo' />
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Our People</h2>
                </div>
                {staff}
            </div>
        </div>
    )
}

export default About;