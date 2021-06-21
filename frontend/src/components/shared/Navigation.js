import React from 'react'
// import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    return (
    <nav className="grid-nav">
        <ul className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
    )
}

export default Navigation