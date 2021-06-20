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
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/listing" } };
            history.replace(from);
        }
    }

    return (
      <>
        <Logo />
        {!auth && 
            <p>Invalid credentials, please try again</p>
        }
        <form onSubmit={loginSubmit}>
            <label htmlFor="emailEntry">Email</label>
                <input type="email" name="email" id="emailEntry" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="passwordEntry">Password</label>
                <input type="password" name="password" id="passwordEntry" placeholder="Valid password" onChange={e => setPassword(e.target.value)}/>
            <button>Sign in</button>
        </form>
      </>
    )
}

export default Login