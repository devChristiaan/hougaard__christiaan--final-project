import React, { useState } from 'react'
import Logo from "../shared/logo"
// import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'



const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }

    return (
    <>
        <Logo />
        <section className='grid-title-resume flex'>
            <div className="line"></div>
            <h1 className="lift">Get In Touch</h1>
            <div className="line"></div>
        </section>
        <section className='grid-graphic-resume'>
            <img src="/code.svg" alt="Laptop Image" class="wireframe"/>
        </section>
        <section className="grid-journey block-left">
            <form action="#" name="contactForm">
                <label for="name">Name</label><span className="error-message" id='nMessage'></span>
                <input type="text" id='name'/>
                <label for="name">Email</label><span className="error-message" id='eMessage'></span>
                <input type="text" id='email'/>
                <label for="message">Message</label><span className="error-message" id='mMessage'></span>
                <textarea name="message" id="message" cols="25" rows="2"></textarea>
                <button type="submit" value="Send" className="form-btn">Send</button>
            </form>
        </section>
    </>
      )
    }

    export default Contact