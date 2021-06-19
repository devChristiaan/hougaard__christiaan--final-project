import React from 'react'
import { Container } from 'reactstrap'

const Home = () => {
    return(
        <div className="grid bg">
            <section class="grid-logo">
                <img src="/logo.svg" alt="Logo Image" class="logo" />
            </section>
            <section class='grid-graphic-resume'>
                <img src="/laptop.svg" alt="Laptop Image" class="laptop"/>
            </section>
            <section class="grid-home">
                <h2>My Name Is</h2>
                <h1>Christiaan Hougaard</h1>
                <p>I'm a Full Stack Web Developer. My main area of expertise is React, Node JS, HTML, CSS, SQL and Azure Cloud.</p>
                <a href="/portfolio" class="btn">View My Portfolio</a>
                <a href="/resume" class="btn">Read My Resume</a>
            </section>
        </div>
    )
}

export default Home