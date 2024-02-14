import React from 'react';
import '../css/navbar.css'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

function Root() {
    return ( 
        <>
        <div className="navbar">
            <div className="logo-area">
                Bada collab
            </div>
            <div className="navabar-links">
                <ul className='link-flex'>
                    <li><a href="/" className='navbar-elements'>Home</a></li>
                    <li><a href="/about" className='navbar-elements'>About us</a></li>
                    <li><a href="/vision" className='navbar-elements'>Vision</a></li>
                    <li><a href="collabs" className='navbar-elements'>Collabs</a></li>
                    <li><a href="dreams" className='navbar-elements'>Dreams</a></li>
                </ul>
            </div>
        </div>
        <Outlet />
        <Footer />
        </>
     );
}

export default Root;