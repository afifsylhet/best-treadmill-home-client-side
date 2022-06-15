import { faFacebookF, faWhatsapp, faInstagram, faPinterest, faReddit, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const whatsApp = <FontAwesomeIcon icon={faWhatsapp} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const pinterest = <FontAwesomeIcon icon={faPinterest} />
    const redit = <FontAwesomeIcon icon={faReddit} />
    const copyright = <FontAwesomeIcon icon={faCopyright} />


    return (
        <div style={{ backgroundColor: '#534340', fontFamily: 'raleway' }}>
            <div className='container'>
                <Row className=" g-5">
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div>
                            <h3 style={{ color: '#F4FCD9', fontWeight: '500', marginBottom: '8px' }}>About</h3>
                            <p style={{ color: '#C5D8A4' }}>
                                Welcome to Best Treadmill Home where we have the most extensive best treadmill including star ratings that can help you to make the right decision. We’ve extensive and categorized reviews to help you find the best treadmill. Buying a treadmill is a big commitment so we hope our rankings, star ratings, description and features will help you find the perfect piece of treadmill. In this page you can get all kind of treadmills. So let’s have one and enjoy a health life.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <h3 style={{ color: '#F4FCD9', fontWeight: '500', marginBottom: '8px' }}>Contact me</h3>
                        <p style={{ color: '#C5D8A4', margin: '0px', padding: '0px' }}>
                            Afif Ahmed
                        </p>
                        <p style={{ color: '#C5D8A4', margin: '0px', padding: '0px' }}>
                            <i className="fa-regular fa-envelope"></i> afif.ahmed@yahoo.com
                        </p>
                        <p style={{ color: '#C5D8A4', margin: '0px', padding: '0px' }}>
                            <i class="fas fa-mobile-android-alt"></i>  +880-1739-945728
                        </p>
                        <p style={{ color: '#C5D8A4', margin: '0px', padding: '0px' }}>
                            <i class="fas fa-location"></i>
                            Sylhet, Bangladesh
                        </p>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <h3 style={{ color: '#F4FCD9', fontWeight: '500', marginBottom: '8px' }}>Quick Links</h3>

                        <ul>
                            <li>
                                <NavLink to="/home" className="link-style" style={{ textDecoration: 'none', color: '#F4FCD9', fontWeight: '400' }}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="link-style" style={{ textDecoration: 'none', color: '#F4FCD9', fontWeight: '400' }}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="link-style" style={{ textDecoration: 'none', color: '#F4FCD9', fontWeight: '400' }}>All Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className="link-style" style={{ textDecoration: 'none', color: '#F4FCD9', fontWeight: '400' }}>Dashboard</NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className="link-style" style={{ textDecoration: 'none', color: '#F4FCD9', fontWeight: '400' }}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <br />
                <hr />
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} >
                        <div className="py-4" style={{ color: '#F4FCD9' }}> Copyright {copyright} Best Tredmills Home 2022</div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} >
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
        </div >

    );
};

export default Footer;