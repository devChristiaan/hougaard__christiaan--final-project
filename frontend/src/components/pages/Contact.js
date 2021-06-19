import React, { useState } from 'react'
import Logo from "../shared/logo"

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
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
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
            <img src="/code.svg" alt="Laptop" className="wireframe"/>
        </section>
        <section className="grid-journey block-left">
            <form onSubmit={formSubmit} name="contactForm">
                <label htmlFor="name">Full Name</label><span className="error-message" id='nMessage'></span>
                    <input type="name" name="name" id="nameEntry" required value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="email">Email</label><span className="error-message" id='eMessage'></span>
                    <input type="email" name="email" id="emailEntry" required value={email} onChange={e => setEmail(e.target.value) }/>
                <label htmlFor="name">Phone Number</label><span className="error-message" id='eMessage'></span>
                    <input type="phone" name="phone" id="phoneEntry" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                <label htmlFor="message">Message</label><span className="error-message" id='mMessage'></span>
                    <input type="textarea" name="text" id="messageEntry" required value={content} onChange={e => setContent(e.target.value)}/>
                <button type="submit" value="Send" className="form-btn">Send</button>
            </form>
        </section>
    </>
      )
    }

    export default Contact