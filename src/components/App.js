import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? (<p>✅ Form submit ho gaya!</p>) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
    </div>
  );
}

export default App;
