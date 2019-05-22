import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';

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

function Projects(props){

    const exteriorArr = props.jobs.filter((job)=>job.type === 'exterior');
    const exterior =exteriorArr.map((exterior)=> {
        return(
            <div className="col-12 col-sm-4 mt-5">
            <RenderExterior exterior={exterior} />
            </div>
        );
    })
    const interiorArr = props.jobs.filter((job)=>job.type === 'interior');
    const interior =interiorArr.map((interior)=> {
        return(
            <div className="col-12 col-sm-4 mt-5">
            <RenderInterior interior={interior} />
            </div>
        );
    })
    const auxArr = props.jobs.filter((job)=>job.type === 'aux');
    const aux =auxArr.map((aux)=> {
        return(
            <div className="col-12 col-sm-4 mt-5">
            <RenderAux aux={aux} />
            </div>
        );
    })
  
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h1>Projects</h1>
                </div>
                <div className="col-12 col-md-6">
                    <p>At Peterson Painting we cover a wide variety of projects.</p>
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

export default Projects;