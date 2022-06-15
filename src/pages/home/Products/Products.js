
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SelectedProduct from '../../SelectedProduct/SelectedProduct';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = 'https://serene-fortress-61222.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const newProduct = products.slice(0, 6)

    return (
        <div>
            <div>
                <br />
                <h1 className="text-center" style={{ color: '#534240' }}>Are You Looking for a Best Treadmill?</h1>
                <p className="m-2">Welcome to Best Treadmill Home where we have the most extensive best treadmill including star ratings that can help you to make the right decision. We’ve extensive and categorized reviews to help you find the best treadmill. Buying a treadmill is a big commitment so we hope our rankings, star ratings, description and features will help you find the perfect piece of treadmill. In this page you can get all kind of treadmills. So let’s have one and enjoy a health life.</p>
            </div>
            <div className="m-3">
                <Row className="g-5">
                    {newProduct.map(product => <Col xs={12} md={12} lg={6}  >
                        <SelectedProduct
                            key={product._id}
                            product={product}
                        ></SelectedProduct>
                    </Col>)

                    }


                </Row>

            </div>
        </div>
    );
};

export default Products;