import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import OffCanvas from '../OffCanvas/OffCanvas';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch("https://serene-fortress-61222.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);




    const removeOrder = (order) => {

        var result = window.confirm("Are you sure to delete?");
        if (result) {
            const exists = orders.find(pd => pd._id === order._id);
            fetch('https://serene-fortress-61222.herokuapp.com/orders', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(exists)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        alert("Your order removed successfuly")
                    }
                })
        }
    };

    const approveOrder = (order) => {
        const exists = orders.find(pd => pd._id === order._id);
        const url = 'https://serene-fortress-61222.herokuapp.com/orders';
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exists)
        })
        // .then(res => res.json())
        // .then(data => console.log(data))
    }



    return (
        <div style={{ backgroundColor: '#F4FCD9', fontFamily: 'raleway' }}>
            <h2 className="text-center my-2" style={{ color: '#534340' }}> Manage All Order Section</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>
            <div>
                <Container style={{ overflowX: 'scroll' }}>
                    <table className="w-100" style={{ minWidth: '900px', border: '2px solid #534340' }}>
                        <tr style={{ padding: "10px", backgroundColor: '#534340', color: '#F4FCD9' }}>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Sl</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >User Name</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Product Name</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Price</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Status</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Remove</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Approve</th>
                        </tr>

                        {orders.map(order => <tr key={order._id}>

                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{orders.indexOf(order) + 1}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{order.email.split("@")[0]}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{order.name}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>$ {order.price}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{order.status}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', textAlign: 'center', backgroundColor: "#BB9981", color: '#534340' }}><p onClick={() => removeOrder(order)} className="btn  py-2 px-3" style={{ backgroundColor: '#534340', color: '#F4FCD9' }}> Remove this order </p></td>
                            <td style={{ padding: '10px', border: '2px solid #534340', textAlign: 'center', backgroundColor: "#BB9981", color: '#534340' }}> <p onClick={() => approveOrder(order)} className="btn  py-2 px-3" style={{ backgroundColor: '#F4FCD9', color: '#534340' }}> Approve this order </p></td>
                        </tr>
                        )}
                    </table>
                </Container>

            </div>
            <br />
            <br />
            <br />
            <br />
        </div >
    );
};

export default ManageOrders;