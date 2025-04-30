
import React from "react";
import './../styles/App.css';
import LoginForm from './components/loginForm'

const App = () => {
  onst [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }
  return (
    <div>
       <h1>lift up</h1>
      <LoginForm isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>
    </div>
  )
}

export default App
