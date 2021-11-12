import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import useAuth from '../../../utilities/useAuth';
import OffCanvas from '../OffCanvas/OffCanvas';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    // const { user } = useAuth();

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);




    const removeOrder = (order) => {

        var result = window.confirm("Are you sure to delete?");
        if (result) {
            const exists = orders.find(pd => pd._id === order._id);
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
    };

    const approveOrder = (order) => {
        const exists = orders.find(pd => pd._id === order._id);
        console.log(exists)
        const url = 'http://localhost:5000/orders';
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exists)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }



    return (
        <div> <h2 className="text-center my-2 text-success"> Manage All Order Section</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>
            <br />
            <div>
                {
                    orders.map(order => <Container key={order._id} className="bg-info p-3 mb-4 rounded-3">
                        <Row>
                            <Col>
                                <p>User Name</p>
                                <hr />
                                <p>{order.email.split("@")[0]}</p>
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
                            <Col>
                                <p onClick={() => removeOrder(order)} className="btn btn-success py-2 px-3"> Remove this order </p>
                                <p onClick={() => approveOrder(order)} className="btn btn-success py-2 px-3"> Approve this order </p>
                            </Col>
                        </Row>
                    </Container>
                    )
                }
            </div>
        </div >
    );
};

export default ManageOrders;