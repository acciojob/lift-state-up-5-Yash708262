import React from 'react'
import { useState } from 'react'

function LoginForm  ({isLoggedIn, handleLogin})  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username && password) {
            handleLogin();
        }
    }
  return (
    <div>
      {isLoggedIn ? (<h2>You are logged in!</h2>) : (<form onSubmit={handleSubmit}>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'>
        </input>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input>
        <button type='submit'>Log in</button>
      </form>)}
    </div>
  )
}

export default LoginForm
