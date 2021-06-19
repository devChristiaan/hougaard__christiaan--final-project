import React, { useState } from 'react'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <navbar className="grid-nav">
            <nav class="grid-nav">
                <ul class="nav-bar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </navbar>
    )
}

export default Navigation