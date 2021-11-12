

import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../utilities/useAuth';
import OffCanvas from '../OffCanvas/OffCanvas';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const myOrders = orders?.filter(order => order.email === user.email);
    console.log(myOrders)



    const removeOrder = (order) => {

        var result = window.confirm("Are you sure to delete?");
        if (result) {
            const exists = myOrders.find(pd => pd._id === order._id);
            fetch('http://localhost:5000/orders', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(exists)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount) {
                        alert("Your order removed")
                    }
                })
        }

    }



    return (
        <div> <h2 className="text-center my-2 text-success"> My Order Section</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>
            <br />
            <div>
                {
                    myOrders.map(order => <Container key={order._id} className="bg-info p-3 mb-4 rounded-3">
                        <Row>
                            <Col>
                                <p>User Name</p>
                                <hr />
                                <p>{user.email.split("@")[0]}</p>
                            </Col>
                            <Col>
                                <p>Product Name</p>
                                <hr />
                                <p>{order.name}</p>
                            </Col>

                            <Col>
                                <p>Price</p>
                                <hr />
                                <p>$ {order.price}</p>
                            </Col>
                            <Col>
                                <p>Status</p>
                                <hr />
                                <p>{order.status}</p>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <p onClick={() => removeOrder(order)} className="btn btn-success py-2 px-3"> Remove this order </p>
                            </Col>
                        </Row>
                    </Container>
                    )
                }
            </div>
        </div >
    );
};

export default MyOrders;