import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuickAcces.css'


const QuickAccess = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/home" className="link-style">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link-style">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/testimonals" className="link-style">Testimonals</NavLink>
                </li>
                <li>
                    <NavLink to="/doctor" className="link-style">Doctors</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link-style">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/undercons" className="link-style">FAQ</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default QuickAccess;