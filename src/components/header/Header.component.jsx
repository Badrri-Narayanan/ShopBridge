import React from 'react'

import { Link } from 'react-router-dom'

import './Header.styles.css'

const Header = () => (
    <div className="alert alert-info menu">
        <div className="menu-item">
            <Link to="/shopbridge">Home</Link>
        </div>
        <div className="menu-item">
            <Link to="/shopbridge/add-products">Add Products</Link>
        </div>
        <div className="menu-item">
            <Link to="/shopbridge/update-products">Update Products</Link>
        </div>
    </div>
);

export default Header;