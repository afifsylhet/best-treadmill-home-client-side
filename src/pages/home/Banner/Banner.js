
import './Banner.css'
import React from 'react';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Banner = () => {
    const element = <FontAwesomeIcon icon={faMouse} />

    return (
        <div className="ps-rel">
            <img className="img-fluid w-100" src={"https://i.ibb.co/HP6M0bN/Treadmill-Banner-Image.jpg "} alt="this main home page banner img"></img>

            <div className="ps-abs">
                <Link style={{ textDecoration: "none" }} to='/products'>
                    <Button variant="outline-success" className="fw-bold" > {element} <span className="ms-2">Explore...</span> </Button>
                </Link>
            </div>
        </div >
    );
};

export default Banner;