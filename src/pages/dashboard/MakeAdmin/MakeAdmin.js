import React, { useEffect, useState } from 'react';
import { Container, } from 'react-bootstrap';
// import useAuth from '../../../utilities/useAuth';
import OffCanvas from '../OffCanvas/OffCanvas';


const MakeAdmin = () => {

    const [users, setUsers] = useState([]);

    // const { user } = useAuth();

    useEffect(() => {
        fetch("https://serene-fortress-61222.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);

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
        <div style={{ backgroundColor: "#F4FCD9", fontFamily: 'raleway' }}>
            <h2 className="text-center my-2 text-success"> Make Admin Section</h2>
            <div className="text-center m-3">
                <OffCanvas></OffCanvas>
            </div>

            <div>
                <Container style={{ overflowX: 'scroll' }}>
                    <table className="w-100" style={{ minWidth: '900px', border: '2px solid #534340' }}>
                        <tr style={{ padding: "10px", backgroundColor: '#534340', color: '#F4FCD9' }}>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Sl</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >User Name</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >User Email</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Role</th>
                            <th style={{ padding: '10px', textAlign: 'center', border: '2px solid #534340' }} >Make Admin</th>
                        </tr>

                        {users.map(order => <tr key={order._id}>

                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{users.indexOf(order) + 1}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{order.name}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}>{order.email}</td>
                            <td style={{ padding: '10px', border: '2px solid #534340', backgroundColor: "#BB9981", color: '#534340' }}> {order.role}</td>

                            <td style={{ padding: '10px', border: '2px solid #534340', textAlign: 'center', backgroundColor: "#BB9981", color: '#534340' }}><p onClick={() => makeAdminFunc(order)} className="btn  py-2 px-3" style={{ backgroundColor: '#F4FCD9', color: '#534340' }}> Make this user as admin </p></td>
                        </tr>
                        )}
                    </table>
                </Container>

            </div>
            <br />
            <br />
            <br />
        </div >
    );
};
export default MakeAdmin;