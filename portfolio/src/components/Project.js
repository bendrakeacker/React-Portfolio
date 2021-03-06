import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";


function Project(props) {
    return (
        <>
            <figure className="col-md-6 p-3 text-center hvr-grow">
                <Card >
                    <img src={props.image} className="card-img-top" alt={props.name + " picture"} />
                    <CardBody>
                        <CardTitle>
                            <h5>{props.name}</h5>
                        </CardTitle>
                        <CardText>
                            {props.description}
                        </CardText>
                        <Button className="projbtn btn-light">
                            <a href={props.repo} target="_blank" rel="noopener noreferrer">Project Repo</a>
                        </Button >
                        &nbsp;
                        <Button className="projbtn btn-light">
                            <a href={props.deployed} target="_blank" rel="noopener noreferrer">Deployed Site</a>
                        </Button>
                    </CardBody>
                </Card>
            </figure>
        </>
    )
}


export default Project;