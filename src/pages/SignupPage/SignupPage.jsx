import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as usersService from '../../utilities/users-api'

import './SignupPage.css';

export default function SignupPage({ setUser }) {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
      evt.preventDefault()
      const user = await usersService.signup(credentials)
    setUser(user)
    navigate('/')
  }

  return (
    <div className="signup-page-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
          
          <label>Email</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
  
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
