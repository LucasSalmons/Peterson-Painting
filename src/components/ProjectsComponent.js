import React, { Component } from 'react';
import { Card, CardImg, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderExterior({ exterior }) {
    return (
        <Card>
            <CardImg src={exterior.image} alt={exterior.type} />
        </Card>
    )
}

function RenderInterior({ interior }) {
    return (
        <Card>
            <CardImg src={interior.image} alt={interior.type} />
        </Card>
    )
}

function RenderAux({ aux }) {
    return (
        <Card>
            <CardImg src={aux.image} alt={aux.type} />
        </Card>
    )
}

function Projects(props) {

    const exteriorArr = props.jobs.filter((job) => job.type === 'exterior');
    const exterior = exteriorArr.map((exterior) => {
        return (
            <div className="col-12 col-sm-4 mt-5">
                <RenderExterior exterior={exterior} />
            </div>
        );
    })
    const interiorArr = props.jobs.filter((job) => job.type === 'interior');
    const interior = interiorArr.map((interior) => {
        return (
            <div className="col-12 col-sm-4 mt-5">
                <RenderInterior interior={interior} />
            </div>
        );
    })
    const auxArr = props.jobs.filter((job) => job.type === 'aux');
    const aux = auxArr.map((aux) => {
        return (
            <div className="col-12 col-sm-4 mt-5">
                <RenderAux aux={aux} />
            </div>
        );
    })

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h1>Projects</h1>
                </div>
                <div className="col-12 col-md-6">
                    <p>At Peterson Painting we cover a wide variety of projects.</p>
                </div>
                <div className="col-12 col-md-6">
                    <p>Have we worked a project for you?</p>
                    <p>Tell us how we did.</p>
                    <Ratingform/>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Exterior</h2>
                    </div>
                    {exterior}
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Interior</h2>
                    </div>
                    {interior}
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Patios &amp; More</h2>
                    </div>
                    {aux}
                </div>
            </div>
        </div>
    )
}

const required =(val)=>val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class Ratingform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit = (values) => {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Curent State is: ' + JSON.stringify(values));
    }

    render(){
        return(
            <div>
                <Button type="submit" color="secondary" onClick={this.toggleModal}>
                    Leave a Rating
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Rate your Paint Job</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="name">Name</Label>
                                    <Control.text model=".name" name="name" className="form-control" placeholder=" Your Name" 
                                    validators={{
                                        required, maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating </Label>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input"/>
                                            {' '}<strong>May we share your feedback?</strong>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" name="comment" className="form-control" rows="6" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Projects;