
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../utilities/useAuth';

const Navigation = () => {
    const { handleSignout, user } = useAuth();
    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="text-white">Best Treadmills Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>

                        <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>

                        <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>

                        <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>

                        <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>

                        <Nav.Link className="text-white">{user?.email?.split("@")[0]}</Nav.Link>

                        {
                            (user.email) ?
                                <Button onClick={handleSignout} variant="outline-light" style={{ maxWidth: "130px" }}>Log Out</Button>
                                : <Link to='/login'>
                                    <Button variant="outline-light" style={{ maxWidth: "130px" }}>Login</Button>
                                </Link>
                        }


                    </Nav >

                </Navbar.Collapse >
            </Container >
        </Navbar >
    );
};

export default Navigation;