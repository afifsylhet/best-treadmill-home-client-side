import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuickAcces.css'


const QuickAccess = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/home" className="link-style" style={{ textDecoration: 'none' }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link-style" style={{ textDecoration: 'none' }}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="link-style" style={{ textDecoration: 'none' }}>All Products</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className="link-style" style={{ textDecoration: 'none' }}>Dashboard</NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className="link-style" style={{ textDecoration: 'none' }}>Contact Us</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default QuickAccess;