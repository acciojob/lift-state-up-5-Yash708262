import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Login'}</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
    </div>
  );
}

export default App;
