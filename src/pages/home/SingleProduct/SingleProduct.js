
import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useProduct from '../../../utilities/useProduct';

const SingleProduct = (props, product) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const [products] = useProduct();
    const myProduct = products?.find(product => product._id === id)
    return (
        <div className="container">
            <br />
            <h1 className="text-muted my-2">{myProduct?.name}</h1>
            <h4 className="text-success"> Brand : {myProduct?.brand}</h4>
            <hr />
            <Row>
                <Col xs={12} md={12} lg={5}>
                    <div className="m-2">
                        <img className="img-fluid" src={myProduct?.img} alt="Prodact Images" />
                        <div className="my-3">
                            <Rating className="fs-4 p-1 my-1 text-success"
                                emptySymbol="far fa-star fa-.4x"
                                fullSymbol="fas fa-star fa-.4x"
                                initialRating={myProduct?.ourRatings}
                                readonly
                            />
                            <span className="text-success fs-5">({myProduct?.totalRatings} reviews)</span>
                        </div>
                        <p>From our business experience we realize that in this busy world buyer can’t read a long and lengthy description or overview of a product. So, we mention only the key features of a product in regards of buyer’s time sense.</p>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={7}>
                    <div className="m-2">
                        <div>
                            <h4 className="text-muted my-1">Product Description:</h4>
                            <p>{myProduct?.dis}</p>
                        </div>
                        <div>
                            <h4 className="text-muted my-1">Features At A Glance:</h4>
                            <ul>
                                <li>{myProduct?.glance_1}</li>
                                <li>{myProduct?.glance_2}</li>
                                <li>{myProduct?.glance_3}</li>
                                <li>{myProduct?.glance_4}</li>
                                <li>{myProduct?.glance_5}</li>
                                <li>{myProduct?.glance_6}</li>
                            </ul>

                        </div>
                        <div>
                            <h4 className="text-muted my-1">Why We Offer This Particular Product: </h4>
                            <ul>
                                <li>This product is the one of the bestselling product in different E-commerce Site & fitness instrument market and also the selling of this product increase rapidly.   </li>
                                <li> It has a lot of customer review in different E-commerce Site & fitness instrument market.</li>
                                <li>Our fitness expert deeply observes this product and states that it is appropriate for all class of user.</li>
                                <li>Hassles free and no fumbling with tiny parts, no complex tools or instructions </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                {/* Modal */}
                <>
                    <Button className="py-2 mx-2 fs-5" variant="success" onClick={handleShow}>
                        By This Treadmill
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            I will not close if you click outside me. Don't even try to press
                            escape key.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                    </Modal>
                </>


            </Row>
            <br />
        </div >
    );
};

export default SingleProduct;