import React from 'react'
import { Container} from 'reactstrap'

const Portfolio = () => {
    return (
    <Container>
        <section class="grid-logo">
            <img src="./svg/logo.svg" alt="Logo Image" class="logo"/>
        </section>
        <section class='grid-title-resume flex'>
            <div class="line"></div>
            <h1 class="lift">Portfolio</h1>
            <div class="line"></div>
        </section>
        <section class='grid-graphic-resume'>
            <img src="./svg/finance.svg" alt="Fiance Computer" class="wireframe"/>
        </section>
        <section class="grid-journey block-left">
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
            <h2>Project 1</h2>
            <h3>Short description of project</h3>
        </section>
    </Container>
    )
}

export default Portfolio