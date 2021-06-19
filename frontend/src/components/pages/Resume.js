import React from 'react'
import { Container} from 'reactstrap'

const Resume = () => {
    return (
    <Container>
        <section class="grid-logo">
            <img src="/logo.svg" alt="Logo Image" class="logo" />
        </section>
        <section class='grid-title-resume flex'>
            <div class="line"></div>
            <h1 class="lift">My Career Journey</h1>
            <div class="line"></div>
        </section>
        <section class='grid-graphic-resume'>
            <img src="/Wireframe.svg" alt="Laptop Image" class="wireframe" />
        </section>
        <section class="grid-journey block-left">
            <h2>TD Canada Trust</h2>
            <h3>Lead Customer Experience Associate</h3>
            <h2>Crystal Music</h2>
            <h3>Sound Engineer</h3>
            <h2>Emendy Multimedia</h2>
            <h3>Lecturer and Project Guidance Coach</h3>
            <h2>The Home Depot</h2>
            <h3>Millworks and Flooring Sales Associate</h3>
        </section>
    </Container>
    )
}

export default Resume