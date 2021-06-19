import React from 'react'

const Portfolio = () => {
    return (
    <div>
        <section className="grid-logo">
            <img src="/logo.svg" alt="Logo" className="logo"/>
        </section>
        <section className='grid-title-resume flex'>
            <div className="line"></div>
            <h1 className="lift">Portfolio</h1>
            <div className="line"></div>
        </section>
        <section className='grid-graphic-resume'>
            <img src="/finance.svg" alt="Fiance Computer" className="wireframe"/>
        </section>
        <section className="grid-journey block-left">
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
        </section>
    </div>
    )
}

export default Portfolio