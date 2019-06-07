import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Carousel, CarouselItem, CarouselControl, Button } from 'reactstrap';
import { JOBS } from '../shared/jobs';
import { Link } from 'react-router-dom';

const jobs = JOBS;

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
        const nextIndex = this.state.activeIndex === jobs.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? jobs.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = jobs.map((job) => {
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

function Home(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-sm-6">
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">Before Peterson Painting</CardTitle>
                        </CardBody>
                        <CardImg src='/assets/images/before.jpeg' />
                    </Card>
                </div>
                <div className="col-12 col-sm-6">
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">After</CardTitle>
                        </CardBody>
                        <CardImg src='/assets/images/after.jpeg' />
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-sm-6">
                    <Jobcarousel />
                </div>
                <div className="col-12 col-sm-6">
                    <Card>
                        <CardImg src="/assets/images/logo-peterson-painting.jpeg" alt='logo' />
                    </Card>
                    <p className="mt-3">Want to see more of our work?</p>
                    <Link to='/projects'>
                        <Button color="info">Click Here</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;