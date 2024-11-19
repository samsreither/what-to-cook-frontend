import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="header__nav">
            <Link to="/about" className="header__nav-link">About</Link>
            <Link to="/favorites" className="header__nav-link">Favorites</Link>
        </nav>
    )
}

export default Navigation;