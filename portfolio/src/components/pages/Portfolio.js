import React from "react";
import { Card, CardBody, Row } from "reactstrap"
import Project from "../Project"
import projects from "../../projects.json";

function Portfolio() {
  return (
    <> 
      <Card className="m-sm-5 p-3 board">
        <CardBody className="card-body">
          <legend className="card-title text-primary">Portfolio</legend>
          <hr className="my-4" />
          <Row>
            {projects.map(projects => (
              <Project
                id={projects.id}
                key={projects.id}
                name={projects.name}
                image={projects.image}
                description={projects.description}
                repo={projects.repo}
                deployed={projects.deployed}
              />
            ))}
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default Portfolio;