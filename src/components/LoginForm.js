import React, { useState } from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(); 
    }
  };

  if (isLoggedIn) {
    return <p>You are already logged in.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Login</button>
    </form>
  );
}

export default LoginForm;