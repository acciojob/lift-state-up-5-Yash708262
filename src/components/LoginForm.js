import React from 'react'

const LoginForm = ({ setIsLoggedIn }) => {
  return (
    <form onSubmit={(e)=>{
       e.preventDefault();
        console.log("Form submitted!");
        setIsLoggedIn(true);
    }}>
      <label>Username :</label>
      <input></input><br></br>
       <label>Password : </label>
      <input></input><br></br>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
