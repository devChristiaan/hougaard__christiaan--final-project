import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Logo from "../shared/logo"

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
            setPassword("")
            setInterval( ()=> {
                setAuth(true)
            }, 4000)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/submissions" } };
            history.replace(from);
        }
    }

    return (
      <>
        <Logo />
        <section className='grid-graphic-resume'>
            <img src="/laptop.svg" alt="Laptop Illustration" className="laptop"/>
        </section>
        <form onSubmit={loginSubmit} className="grid-home">
        {!auth && 
            <p className="error-message">Invalid credentials, please try again</p>
        }
            <label htmlFor="emailEntry">Email</label>
                <input type="email" name="email" id="emailEntry" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="passwordEntry">Password</label>
                <input type="password" name="password" id="passwordEntry" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button className="form-btn">Sign in</button>
        </form>
      </>
    )
}

export default Login