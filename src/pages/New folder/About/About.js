
import '../About/About.css'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <br />
            <div>
                <h1 className="text-muted text-center my-3">WHAT WE ARE DOING?</h1>
            </div>


            <Container>
                <h4 className="text-muted my-5">Top level physiotherapy professional, evidenced based treatment. We diagnose the cause and provide you with the best possible treatment.</h4>
                <Row xs={1} lg={2}>
                    <Col lg={8}>
                        <Row lg={2} xs={1}>
                            <Col className="border-start p-0">
                                <div className="my-2 border-bottom ps-2">
                                    <h4 className="text-dark"> 01. <span className="text-muted">Mature </span>Development</h4>
                                </div>
                                <div className="my-2 ps-2">
                                    <p>The best contact you will get here lorem ipsum dolor sit amet</p>
                                </div>
                            </Col>

                            <Col >
                                <div className="border-start p-0 ">
                                    <div className="my-2 border-bottom ps-2">
                                        <h4 className="text-dark"> 02. <span className="text-muted">Anti-anxiety </span>Treatments</h4>
                                    </div>
                                    <div className="my-2 ps-2">
                                        <p>The best contact you will get here lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row lg={2} xs={1}>
                            <Col className="border-start p-0">
                                <div className="my-2 border-bottom ps-2">
                                    <h4 className="text-dark"> 03. <span className="text-muted">Antipsychotic </span>Medications</h4>
                                </div>

                                <div className="my-2 ps-2">
                                    <p>The best contact you will get here lorem ipsum dolor sit amet</p>
                                </div>
                            </Col>

                            <Col >
                                <div className="border-start p-0 ">
                                    <div className="my-2 border-bottom ps-2">
                                        <h4 className="text-dark"> 04. <span className="text-muted">Personal </span>Development</h4>
                                    </div>
                                    <div className="my-2 ps-2">
                                        <p>The best contact you will get here lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row lg={2} xs={1}>
                            <Col className="border-start p-0">
                                <div className="my-2 border-bottom ps-2">
                                    <h4 className="text-dark"> 05. <span className="text-muted">Self Care </span>Prepartion</h4>
                                </div>
                                <div className="my-2 ps-2">
                                    <p>The best contact you will get here lorem ipsum dolor sit amet</p>
                                </div>
                            </Col>
                            <br />
                            <Col >
                                <div className="border-start p-0 ">
                                    <div className="my-2 border-bottom ps-2">
                                        <h4 className="text-dark"> 06. <span className="text-muted">Desicion Making </span>Development</h4>
                                    </div>
                                    <div className="my-2 ps-2">
                                        <p>The best contact you will get here lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col lg={4}>
                        <img src={`https://i.ibb.co/dm8K6LY/Happy-Girl-removebg-preview.png`} className="img-fluid" alt="" />

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default About;