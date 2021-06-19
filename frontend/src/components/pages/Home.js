import React from 'react'

const Home = () => {
    return(
    <>
        <section className="grid-logo">
            <img src="/logo.svg" alt="Logo" className="logo" />
        </section>
        <section className='grid-graphic-resume'>
            <img src="/laptop.svg" alt="Laptop Illustration" className="laptop"/>
        </section>
        <section className="grid-home">
            <h2>My Name Is</h2>
            <h1>Christiaan Hougaard</h1>
            <p>I'm a Full Stack Web Developer. My main area of expertise is React, Node JS, HTML, CSS, SQL and Azure Cloud.</p>
            <a href="/portfolio" className="btn">View My Portfolio</a>
            <a href="/resume" className="btn">Read My Resume</a>
        </section>
    </>
    )
}

export default Home