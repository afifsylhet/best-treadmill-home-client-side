import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import useAuth from '../../../utilities/useAuth';
import OffCanvas from '../OffCanvas/OffCanvas';


const MakeAdmin = () => {

    const [users, setUsers] = useState([]);

    // const { user } = useAuth();

    useEffect(() => {
        fetch("https://serene-fortress-61222.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    console.log(users)


    const makeAdminFunc = (order) => {
        const exists = users.find(pd => pd._id === order._id);
        console.log(exists)
        const url = 'https://serene-fortress-61222.herokuapp.com/users';
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exists)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('Role changed user to admin successfully')
    }
    return (
        <div> <h2 className="text-center my-2 text-success"> Make Admin Section</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>
            <br />
            <div>
                {
                    users.map(order => <Container key={order._id} className="bg-info p-3 mb-4 rounded-3">
                        <Row>
                            <Col>
                                <p> Name: {order.name}</p>
                            </Col>
                            <Col>
                                <p> Email: {order.email}</p>
                            </Col>

                            <Col>
                                <p> Role:  {order.role}</p>
                            </Col>
                            <Col>
                                <p onClick={() => makeAdminFunc(order)} className="btn btn-success px-3"> Make Adimn </p>
                            </Col>
                        </Row>
                    </Container>
                    )
                }
            </div>
        </div >
    );
};
export default MakeAdmin;