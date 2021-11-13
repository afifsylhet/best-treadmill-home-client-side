
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SelectedProduct from '../../SelectedProduct/SelectedProduct';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = 'http://localhost:5000/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const newProduct = products.slice(0, 6)

    return (
        <div>
            <div>
                <br />
                <h1 className="text-primary text-center">Are You Looking for a Best Treadmill?</h1>
                <p className="m-2">Welcome to Best Treadmill Home where we have the most extensive best treadmill including star ratings that can help you to make the right decision. We’ve extensive and categorized reviews to help you find the best treadmill. Buying a treadmill is a big commitment so we hope our rankings, star ratings, description and features will help you find the perfect piece of treadmill. In this page you can get all kind of treadmills. So let’s have one and enjoy a health life.</p>
            </div>
            <div className="m-3">
                <Row xs={1} md={1} lg={2}>
                    {newProduct.map(product => <SelectedProduct
                        key={product._id}
                        product={product}
                    ></SelectedProduct>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Products;