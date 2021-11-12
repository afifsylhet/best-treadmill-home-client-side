import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OffCanvas.css'


const OffCanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        < div className="bg-gray" >
            <Button variant="success" onClick={handleShow} className="w-75">
                Click for Dashboard Manu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title className="fs-3">Dashboard Manu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Link to="/payment" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu" > <i class="fas fa-money-bill-wave me-2 px-2" style={{ fonSize: "100px" }}></i> Payment </h5>
                    </Link>

                    <Link to="/myOrder" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu"> <i class="fas fa-cart-arrow-down me-2 px-2" style={{ fonSize: "100px" }}></i> My Orders </h5>
                    </Link>

                    <Link to="/reviewD" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu"> <i class="fas fa-comment-alt me-2 px-2" style={{ fonSize: "100px" }}></i> Give Review </h5>
                    </Link>

                    <Link to="/manageOrder" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu"> <i class="fas fa-tasks me-2 px-2" style={{ fonSize: "100px" }}></i> Manage Orders </h5>
                    </Link>

                    <Link to="/addProduct" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu"> <i class="fas fa-plus-square me-2 px-2" style={{ fonSize: "100px" }}></i> Add Product </h5>
                    </Link>

                    <Link to="/makeAdmin" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu"> <i class="fas fa-user-cog me-2 px-2" style={{ fonSize: "100px" }}></i>Make Admin </h5>
                    </Link>

                    <Link to="/manageProduct" style={{ textDecoration: "none" }}>
                        <h5 className="text-success py-2 manu"> <i class="fas fa-arrows-alt me-2 px-2" style={{ fonSize: "100px" }}></i> Manage Product </h5>
                    </Link>

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default OffCanvas;


