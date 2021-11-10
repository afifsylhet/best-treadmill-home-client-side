
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
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
                        <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#action1" className="text-white">About</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">Products</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">Deshboard</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">Contact</Nav.Link>

                        <Button variant="outline-light" style={{ maxWidth: "130px" }}>Login</Button>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;