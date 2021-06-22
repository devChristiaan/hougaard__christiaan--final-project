import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Logo from "../shared/logo"
import parseJwt from '../../helpers/authHelper'

const CreateUser = () => {
    let history = useHistory();
    let location = useLocation();
    const [error, setError] = useState(true)
    const [name, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username

    const userSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({name, password, email})
        }, [token])
        const payload = await response.json()
        if (response.status >= 400) {
            setError(false)
        } else {
            alert("User created successfully! Please Log In")

            let { from } = location.state || { from: { pathname: "/submissions" } };
            history.replace(from);
        }
    }
    return (
      <>
      <Logo />
        <form onSubmit={userSubmit}>
        {!error && 
            <p className="error-message grid-title-resume flex">Unable to create user! Password must be a minimum of 8 characters and you need a valid email address.</p>
        }
            <label htmlFor="usernameEntry">Username</label>
                <input type="text" name="name" id="usernameEntry" placeholder="Username" value={name} onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="emailEntry">Email</label>
                <input type="email" name="email" id="emailEntry" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="passwordEntry">Password</label>
                <input type="password" name="password" id="passwordEntry" placeholder="Valid password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button className="form-btn">Create User</button>
        </form>
      </>
    )
}

export default CreateUser