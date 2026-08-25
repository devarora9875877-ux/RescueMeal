import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import './Login.css'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('An account with this email already exists!');
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    navigate('/login');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <span className="login-badge">NEW HERE?</span>
          <h1 className="login-title">Create an Account</h1>
          <p className="login-subtitle">
            Join RescueMeal today and start managing your food rescue activities.
          </p>
        </div>

        <div className="login-card">
          <form className="login-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="........"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6"
                />
              </div>
            </div>

            <button type="submit" className="login-btn">
              Create Account
            </button>

            {error && (
              <div style={{ color: 'red', textAlign: 'center', marginTop: '15px', fontSize: '13px', fontWeight: '500' }}>
                {error}
              </div>
            )}
          </form>

          <p className="signup-text">
            Already have an account?{' '}
            <Link to="/login" className="signup-link">
              Login here
            </Link>
          </p>
        </div>

        <Link to="/" className="back-to-home-btn">
          <FiArrowLeft className="back-icon" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;