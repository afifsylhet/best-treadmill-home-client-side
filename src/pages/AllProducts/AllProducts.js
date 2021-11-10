
import { useProduct } from '../../utilities/useProduct'
import React from 'react';
import { Row } from 'react-bootstrap';
import SelectedProduct from '../SelectedProduct/SelectedProduct';

const AllProducts = () => {
    const [products] = useProduct();
    console.log(products)


    return (
        <div>
            <div>
                <br />
                <h1 className="text-primary text-center">Are You Looking for a Best Treadmill?</h1>
                <p className="m-2">Welcome to Best Treadmill Home where we have the most extensive best treadmill including star ratings that can help you to make the right decision. We’ve extensive and categorized reviews to help you find the best treadmill. Buying a treadmill is a big commitment so we hope our rankings, star ratings, description and features will help you find the perfect piece of treadmill. In this page you can get all kind of treadmills. So let’s have one and enjoy a health life.</p>
            </div>
            <div className="m-3">
                <Row xs={1} md={1} lg={2}>
                    {products.map(product => <SelectedProduct
                        key={product._id}
                        product={product}
                    ></SelectedProduct>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default AllProducts;