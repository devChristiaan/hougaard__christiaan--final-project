import React from 'react'

const Resume = () => {
    return (
    <div>
        <section className="grid-logo">
            <img src="/logo.svg" alt="Logo" className="logo" />
        </section>
        <section className='grid-title-resume flex'>
            <div className="line"></div>
            <h1 className="lift">My Career Journey</h1>
            <div className="line"></div>
        </section>
        <section className='grid-graphic-resume'>
            <img src="/Wireframe.svg" alt="Laptop" className="wireframe" />
        </section>
        <section className="grid-journey block-left">
            <h2>TD Canada Trust</h2>
            <h3>Lead Customer Experience Associate</h3>
            <h2>Crystal Music</h2>
            <h3>Sound Engineer</h3>
            <h2>Emendy Multimedia</h2>
            <h3>Lecturer and Project Guidance Coach</h3>
            <h2>The Home Depot</h2>
            <h3>Millworks and Flooring Sales Associate</h3>
        </section>
    </div>
    )
}

export default Resume