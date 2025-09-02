import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (<p>You are logged in!</p>) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
    </div>
  );
}

export default App;
