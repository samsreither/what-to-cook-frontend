import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from "../../assets/logo.svg";

function Header() {
    return (
        <header className="header">
            {/* logo and link to homepage */}
            <Link to="/" className="header_logo-link">
                <img className="header__logo" alt="logo" src={logo}/>
            </Link>

            {/* title in the center */}
            <h1 className="header__title">
                What to Eat for Dinner?
            </h1>

            {/* navigation on the right side */}
            <Navigation />
        </header>
    )
}

export default Header;