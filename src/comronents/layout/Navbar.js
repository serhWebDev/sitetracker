import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'


const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' clasName="brand-logo">Site Tracker</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
};

export default Navbar;