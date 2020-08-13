import React from "react";
import { Card, CardBody, Row, CardText, Container, Col } from "reactstrap";


function Contact() {
  return (
    <>
      <Card className="m-sm-5 p-3 align-middle">
        <CardBody>
          <legend className="card-title text-primary">Contact</legend>
          <hr className="my-4" />
          <Row>
            <Col className="col-sm-6 col-md-6 center">
              <CardText>
                <Container>
                  <br></br>
                  <Row>
                    <a href="https://github.com/bendrakeacker" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                      aria-hidden="true"></i> Github</a>
                  </Row>
                  <br></br>
                  <Row>
                    <a href="mailto:bda5464@nyu.edu" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"
                      aria-hidden="true"></i> Email</a>
                  </Row>
                  <br></br>
                  <Row>
                    <a href="https://www.linkedin.com/in/ben-acker-6004a11a3/" target="_blank" rel="noopener noreferrer"><i
                      className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
                  </Row>
                  <br></br>
                  <Row>
                    <a href="tel:6466750281" target="_blank"><i className="fa fa-phone"
                      aria-hidden="true"></i> Phone</a>
                  </Row>
                  <br></br>
                  <Row>
                    <a
                      href="https://www.linkedin.com/in/ben-acker-6004a11a3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC-XlCABP51nzUc8tFCdJncalvFjObEqXUg,1593200241956)/"
                      target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text-o" aria-hidden="true"></i> Resume</a>
                  </Row>
                  <br></br>
                </Container>
              </CardText>
            </Col>
           
            <Col>

            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default Contact;