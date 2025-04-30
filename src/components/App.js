import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome!" : "Log In"}</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
