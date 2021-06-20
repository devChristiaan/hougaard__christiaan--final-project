import React, { useState } from 'react'
import Logo from "../shared/logo"

const CreateUser = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST'
              },
            body: JSON.stringify({username, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            
        }
    }
    return (
      <>
      <Logo />
        <form onSubmit={userSubmit}>
            <label htmlFor="usernameEntry">Username</label>
                <input type="text" name="username" id="usernameEntry" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="passwordEntry">Password</label>
                <input type="password" name="password" id="passwordEntry" placeholder="Valid password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Create User</button>
        </form>
      </>
    )
}

export default CreateUser