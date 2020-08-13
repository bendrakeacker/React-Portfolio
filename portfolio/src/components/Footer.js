import React from "react";
import { Nav, Container, Row } from "reactstrap";

function FooterNav() {
    return (
        <>
            <footer>
                <Nav className="fixed-bottom mt-5 navbar navbar-expand-lg navbar-light bg-light">
                    <Container className="footerIcons">
                        <Row className="mx-auto">
                            <a className="col pr-5" href="https://github.com/bendrakeacker" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                                aria-hidden="true"></i> </a>
                            <a className="col x-5" href="mailto:bda5464@nyu.edu" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"
                                aria-hidden="true"></i> </a>
                            <a className="col pl-5" href="https://www.linkedin.com/in/ben-acker-6004a11a3/" target="_blank" rel="noopener noreferrer"><i
                                className="fa fa-linkedin" aria-hidden="true"></i> </a>
                            <a className="col pl-5" href="tel:6466750281" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"
                                aria-hidden="true"></i> </a>                          
                            <a className="col pl-5"
                                href="https://www.linkedin.com/in/ben-acker-6004a11a3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC-XlCABP51nzUc8tFCdJncalvFjObEqXUg,1593200241956)/"
                                target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text-o" aria-hidden="true"></i> </a>
                        </Row>
                    </Container>
                </Nav>
            </footer>
        </>
    )
}
export default FooterNav;