import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SelectedProduct.css'

const SelectedProduct = ({ product }) => {
    const { name, img, brand, price, dis, _id } = product;


    return (
        <div className="p-3">
            <Row className="border-c shadow bg-white">
                <Col xs={12} md={12} lg={6}>
                    <img src={img} className="img-fluid" alt="treadmill img" />
                </Col>
                <Col xs={12} md={12} lg={6} className="p-2">
                    <div style={{ minHeight: "105px" }}>
                        <h3 className="text-success">{name.slice(0, 40)}</h3>
                        <h5 className="text-muted mb-3"> Brand: {brand}</h5>
                    </div>
                    <p>{dis.slice(0, 283)}...</p>
                    <button className="mb-3 w-100 btn btn-info p-2">Current Price: $ {price}</button>
                    <p>*At the time of publishing, the price was ${price + 50}.</p>
                    <Link to={`/product/${_id}`}>
                        <button className="mb-3 btn btn-success w-100">Click for details</button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default SelectedProduct;