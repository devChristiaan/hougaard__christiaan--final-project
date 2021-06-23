import React from 'react'
import Logo from "../shared/logo"

const Portfolio = () => {
    return (
    <>
        <Logo />
        <section className='grid-title-resume flex'>
            <div className="line"></div>
            <h1 className="lift">Portfolio</h1>
            <div className="line"></div>
        </section>
        <section className='grid-graphic-resume'>
            <img src="/finance.svg" alt="Fiance Computer" className="wireframe"/>
        </section>
        <section className="grid-journey block-left">
            <h2>Basic Banking Portal</h2>
            <h3>A basic banking portal that allows a user to transfer money from accounts and pay bills</h3>
            <a href="https://github.com/devChristiaan/basic_banking" target="_blank" className="port-link">Explore Project</a>
            <h2>Grid of Lights</h2>
            <h3>Make amazing shapes with your mouse and see the lights follow</h3>
            <a href="https://github.com/devChristiaan/add_remove_toggle_class" target="_blank" className="port-link">Explore Project</a>
            <h2>API Gateway</h2>
            <h3>An API gateway that accepts an authentication key before redirect the request to a specified end point.</h3>
            <a href="https://github.com/devChristiaan/api_gateway" target="_blank" className="port-link">Explore Project</a>
        </section>
    </>
    )
}

export default Portfolio