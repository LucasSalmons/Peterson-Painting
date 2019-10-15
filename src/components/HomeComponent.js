import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Carousel, CarouselItem, CarouselControl, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Loading } from './LoadingComponent';
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
        const { activeIndex } = this.state;
        const slides = this.props.jobs.map((job) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={job.id}>
                    <img width="100%" src={baseUrl + job.image} alt={job.type} />
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
                    <p>God help us, we're in the hands of engineers. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. God help us, we're in the hands of engineers.</p>
                    <p>Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Checkmate...</p>
                    <p className="mt-5">Want to see more of our work?</p>
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
            <Loading />
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
                    <CardTitle className="text-center">{jobs.description}</CardTitle>
                </CardBody>
                <CardImg src={baseUrl + jobs.image} />
            </Card>
        );
}

export default Home;