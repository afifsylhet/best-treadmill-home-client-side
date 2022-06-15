
import { useProduct } from '../../utilities/useProduct'
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SelectedProduct from '../SelectedProduct/SelectedProduct';

const AllProducts = () => {
    const [products] = useProduct();
    console.log(products)


    return (
        <div style={{ fontFamily: 'raleway', backgroundColor: '#F4FCD9' }}>
            <div>
                <br />
                <h1 className=" text-center" style={{ color: '#534340' }}>Are You Looking for a Best Treadmill?</h1>
                <p className="m-2">Welcome to Best Treadmill Home where we have the most extensive best treadmill including star ratings that can help you to make the right decision. We’ve extensive and categorized reviews to help you find the best treadmill. Buying a treadmill is a big commitment so we hope our rankings, star ratings, description and features will help you find the perfect piece of treadmill. In this page you can get all kind of treadmills. So let’s have one and enjoy a health life.</p>
            </div>
            <div className="m-3">
                <Row className="g-5">
                    {products.map(product => <Col xs={12} md={12} lg={6} >
                        <SelectedProduct
                            key={product._id}
                            product={product}
                        ></SelectedProduct>
                    </Col>)
                    }

                </Row>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default AllProducts;