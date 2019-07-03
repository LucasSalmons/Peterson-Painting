import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Carousel, CarouselItem, CarouselControl, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { baseUrl } from '../shared/baseUrl';

class Jobcarousel extends Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 }
    }

    onExiting = () => {
        this.animating = true;
    }
    onExited = () => {
        this.animating = false;
    }
    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.jobs.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.jobs.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    render() {
        console.log(this.props)
        const { activeIndex } = this.state;
        const slides = this.props.jobs.jobs.map((job) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={job.id}>
                    <img width="100%" src={job.image} alt={job.type} />
                </CarouselItem>
            );
        });

        return (
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

const Home = (props) => {
    console.log(props)
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-sm-6">
                    <RenderJob jobs={props.before}
                        isLoading={props.loading}
                        errMess={props.errMess}
                    />
                </div>
                <div className="col-12 col-sm-6">
                    <RenderJob jobs={props.after}
                        isLoading={props.loading}
                        errMess={props.errMess}
                    />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-sm-8">
                    <Jobcarousel jobs={props.jobs} />
                </div>
                <div className="col-12 col-sm-4">
                    <p className="mt-3">Want to see more of our work?</p>
                    <Link to='/projects'>
                        <Button color="info">Click Here</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const RenderJob = ({ jobs, isLoading, errMess }) => {
    if (isLoading) {
        return (
            <p>test</p>
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card>
                <CardBody>
                    <CardTitle className="text-center">test</CardTitle>
                </CardBody>
                <CardImg src={baseUrl + jobs.image} />
            </Card>
        );
}

export default Home;