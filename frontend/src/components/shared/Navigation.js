import React from 'react'
// import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    return (
    <nav class="grid-nav">
        <ul class="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    </nav>
    )
}

export default Navigation