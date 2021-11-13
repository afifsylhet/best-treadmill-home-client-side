import { faFacebookF, faWhatsapp, faInstagram, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const whatsApp = <FontAwesomeIcon icon={faWhatsapp} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const pinterest = <FontAwesomeIcon icon={faPinterest} />
    const redit = <FontAwesomeIcon icon={faReddit} />
    const copyright = <FontAwesomeIcon icon={faCopyright} />

    return (
        <div>
            <Row xs={1} sm={1} md={1} lg={2} className=" mx-2 bg-info">
                <Col>
                    <div className="m-4">{copyright} Best Tredmills Home 2021</div>
                </Col>
                <Col>
                    <div className="w-100 py-4 px-2 text-end">
                        <div>
                            <span className="size">{facebook}</span>
                            <span className="size">{whatsApp}</span>
                            <span className="size">{instagram}</span>
                            <span className="size">{pinterest}</span>
                            <span className="size">{redit}</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;