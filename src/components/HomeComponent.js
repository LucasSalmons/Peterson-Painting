import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Carousel, CarouselItem, CarouselControl, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    const before = props.jobs.filter((job) => job.type === 'before')[0];
    const after = props.jobs.filter((job) => job.type === 'after')[0];
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-sm-6">
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">Before Peterson Painting</CardTitle>
                        </CardBody>
                        <CardImg src={before.image} />
                    </Card>
                </div>
                <div className="col-12 col-sm-6">
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">After</CardTitle>
                        </CardBody>
                        <CardImg src={after.image} />
                    </Card>
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
    )
}

export default Home;