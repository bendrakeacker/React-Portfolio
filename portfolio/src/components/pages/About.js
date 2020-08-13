import React from "react";
import {Card, CardBody, Row, CardText} from "reactstrap";

function About() {
  return (
    <>
      <main className="container pb-3">
        <Card className="m-sm-5 p-3 board aboutMe">
          <CardBody>
            <legend className="card-title text-primary">About Me</legend>
            <hr className="my-4" />
            <Row>
              <CardText>
                <img id="bio-image"
                  className="col-sm-12 col-md-6 col-lg-4 img-fluid float-left mr-5"
                  src="../../../images/IMG_0398"  />
                Hello, I am a 20 year from Manhattan currently studying environmental science at NYU. 
                I am also a musician and play guitar in Quarters of Change. I would like to use web development to help strengthen my band's online presence, 
                my own online presence, and complexify my understanding computer science so I can do anything I want with it.
              </CardText>
            </Row>
          </CardBody>
        </Card>
      </main>
    </>
  );
}
export default About;