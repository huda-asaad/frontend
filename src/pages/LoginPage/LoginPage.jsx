import './LoginPage.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersAPI from "../../utilities/users-api";

export default function LoginPage({ setUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await usersAPI.login(formData);
      console.log(user);

      setUser(user);
      navigate('/')
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  }

  return (
    <main className="LoginPage">
      <div className="login-card">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>} 
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}