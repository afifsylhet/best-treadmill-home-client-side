
import React, { useRef, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import useAuth from '../../../utilities/useAuth';
import useProduct from '../../../utilities/useProduct';

const SingleProduct = (props) => {
    const { user } = useAuth();

    const [show, setShow] = useState(false);



    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/products';



    const handleClose = (e) => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const [products] = useProduct();
    let myProduct = products?.find(product => product._id === id)

    const phoneRef = useRef(0)
    const addressRef = useRef("")




    const handleConfirmOrder = async (e) => {
        e.preventDefault();


        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        const order = myProduct;
        order.email = user.email;
        order.status = "Painding";
        order.quantity = 1;
        order.phone = phone;
        order.address = address;
        order.status = "Pending"
        delete order._id

        console.log(order)

        fetch('https://serene-fortress-61222.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    alert("Your Order Received, Thank you")
                }
            })
        // e.target.reset();
        handleClose()
        history.push(redirectUrl)
    }



    return (

        <div style={{ backgroundColor: '#F4FCD9' }}>
            <div className="container">
                <br />
                <h1 className="my-2" style={{ color: '#534340' }}>{myProduct?.name}</h1>
                <h4 style={{ color: '#BB9982' }}> Brand : {myProduct?.brand}</h4>
                <hr />
                <Row>
                    <Col xs={12} md={12} lg={5}>
                        <div className="m-2">
                            <img className="img-fluid p-2 bg-white rounded-3 border border-success shadow-lg" src={myProduct?.img} alt="Prodact Images" />
                            <div className="my-3">
                                <Rating className="fs-4 p-1 my-1"
                                    emptySymbol="far fa-star fa-.4x"
                                    fullSymbol="fas fa-star fa-.4x"
                                    initialRating={myProduct?.ourRatings}
                                    readonly
                                    style={{ color: '#534340' }}
                                />
                                <span className="fs-5" style={{ color: '#BB9981' }}>({myProduct?.totalRatings} reviews)</span>
                            </div>
                            <p>From our business experience we realize that in this busy world buyer can’t read a long and lengthy description or overview of a product. So, we mention only the key features of a product in regards of buyer’s time sense.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={7}>
                        <div className="m-2">
                            <div>
                                <h4 className="my-1" style={{ color: '#534340' }}>Product Description:</h4>
                                <p>{myProduct?.dis}</p>
                            </div>
                            <div>
                                <h4 className="my-1" style={{ color: '#534340' }}>Features At A Glance:</h4>
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
                                <h4 className=" my-1" style={{ color: '#534340' }}>Why We Offer This Particular Product: </h4>
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

                    < div style={{ backgroundColor: 'F4FCD9' }}>
                        <Button className="py-2 w-100 mx-2 fs-5" style={{ backgroundColor: '#BB9981' }} onClick={handleShow}>
                            Buy This Treadmill
                        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: '#534340' }}>Please fill those input fields carefully</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handleConfirmOrder}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: '#C5D8A4' }}>Product: </span>
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={myProduct?.name} disabled
                                            style={{ backgroundColor: 'transparent' }} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: '#C5D8A4' }}> Price: </span>
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={myProduct?.price} disabled
                                            style={{ backgroundColor: 'transparent' }} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: '#C5D8A4' }}> Phone Number: </span>
                                        <input type="number" className="form-control" placeholder="Type your phone number" aria-label="Username" aria-describedby="basic-addon1" required ref={phoneRef} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: '#C5D8A4' }}> Address: </span>
                                        <input type="text" className="form-control" placeholder="Type your shipping address" aria-label="Username" aria-describedby="basic-addon1" required ref={addressRef} />
                                    </div>

                                    <Button onClick={handleClose} style={{ backgroundColor: '#BB9981' }}>
                                        Close
                                    </Button>
                                    {/* <Button type="submit" variant="primary" className="ms-5" >Confirm Purchase</Button> */}
                                    <input type="submit" className="ms-5 btn" value="Confirm Purchase" style={{ backgroundColor: '#534340', color: 'white' }} />
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Row>
                <br />
                <br />
                <br />
            </div >
        </div >

    );
};

export default SingleProduct;