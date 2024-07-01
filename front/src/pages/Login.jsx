import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { TiLockClosed } from 'react-icons/ti';
import axios from 'axios';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7005/logins/authenticate', { username, password });
      if (response.status === 200) {
        alert('Login successful');
        window.location.href = '/'; // Redirect to home or another page upon successful login
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid username and password');
      setError('Invalid username and password');
    }
  };

  
  const handleRegister = () => {
    navigate('/');
  };

  
  return (
    <>
      <div className="App" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h4 style={{ marginTop: '20px', marginLeft: '20px' }}>Sarasavi Book Store</h4>
        <div className="login-container" style={{ margin: '50px auto', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
         
          <div className="wrapper">
            <div>
              <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Log In</h1>
              <div className="input-box" style={{ marginBottom: '15px' }}>
                <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter Username"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <FaUser className="icon" style={{ position: 'absolute', marginLeft: '-14px', marginTop: '-25px' }} />
              </div>

              <div className="input-box" style={{ marginBottom: '15px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter password"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <TiLockClosed className="icon" style={{ position: 'absolute', marginLeft: '-14px', marginTop: '-25px' }} />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="remember-forgot" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <label><input type="checkbox" /> Remember me</label>
                <a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>Forgot password</a>
              </div>
              <button type="submit" onClick={handleSubmit} style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Login
              </button>
              <div className="register-link" style={{ marginTop: '15px' }}>
                <p>Don't have an account? <a href="/registers/create" style={{ color: '#007BFF', textDecoration: 'none' }}>Register</a></p>
              </div>
              <div className="register-link" style={{ marginTop: '15px' }}>
                <p><a href="/" style={{ color: '#007BFF', textDecoration: 'none' }}>Go Back</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;