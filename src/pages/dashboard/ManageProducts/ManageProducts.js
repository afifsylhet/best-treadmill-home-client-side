import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import useAuth from '../../../utilities/useAuth';
import OffCanvas from '../OffCanvas/OffCanvas';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://serene-fortress-61222.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);




    const removeProduct = (product) => {

        var result = window.confirm("Are you sure to delete?");
        if (result) {
            const exists = products.find(pd => pd._id === product._id);
            fetch('https://serene-fortress-61222.herokuapp.com/products', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(exists)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount) {
                        alert("This product successfully deleted.")
                    }
                })
        }
    };


    return (
        <div style={{ backgroundColor: '#F4FCD9', fontFamily: 'raleway' }}>

            <h2 className="text-center my-2" style={{ color: "#534340" }}> Manage All Product</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>
            <br />
            <div>
                {
                    products.map(order => <Container key={order._id} className="p-3 mb-4 rounded-3" style={{ backgroundColor: '#C5D8A4', color: '#534340' }}>
                        <Row>
                            <Col>
                                <p>Product Name</p>
                                <hr />
                                <p>{order.name}</p>
                            </Col>

                            <Col>
                                <p>Product id</p>
                                <hr />
                                <p>{order._id}</p>
                            </Col>

                            <Col>
                                <p>Price</p>
                                <hr />
                                <p>$ {order.price}</p>
                            </Col>

                            <Col className="d-flex align-items-center justify-content-center">
                                <p onClick={() => removeProduct(order)} className="btn py-2 px-3" style={{ backgroundColor: '#534340', color: '#F4FCD9' }}> Remove this product </p>
                            </Col>
                        </Row>
                    </Container>
                    )
                }
            </div>
            <br />
            <br />
            <br />
        </div >
    );
};

export default ManageProducts;