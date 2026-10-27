import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import {
  loginFailed,
  loginStarted,
  loginSucceeded,
  resetLoginState
} from '../store/authSlice';
import './Login.css';

function LoginField({ label, icon, ...inputProps }) {
  return (
    <div className="form-group">
      <label htmlFor={inputProps.id}>{label}</label>
      <div className="input-wrapper">
        {icon}
        <input className="input-field" {...inputProps} />
      </div>
    </div>
  );
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const isLoading = status === 'loading';

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      dispatch(loginFailed('Password must contain at least 6 characters.'));
      return;
    }

    dispatch(loginStarted());

    try {
      // This imitates the waiting time of a real server request.
      await new Promise((resolve) => setTimeout(resolve, 700));

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const matchedUser = users.find(
        (user) => user.email === email.trim() && user.password === password
      );

      if (matchedUser) {
        login(matchedUser);
        dispatch(loginSucceeded());
        setTimeout(() => navigate('/'), 700);
      } else {
        dispatch(loginFailed('Invalid details or not registered yet!'));
      }
    } catch {
      dispatch(loginFailed('Something went wrong. Please try again.'));
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <span className="login-badge">WELCOME BACK</span>
          <h1 className="login-title">Login to Your Account</h1>
          <p className="login-subtitle">
            Sign in to continue using RescueMeal and manage your food rescue activities.
          </p>
        </div>

        <div className="login-card">
          <form className="login-form" onSubmit={handleLogin}>
            <LoginField
              label="Email Address"
              icon={<FiMail className="input-icon" />}
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                dispatch(resetLoginState());
              }}
              required
            />

            <LoginField
              label="Password"
              icon={<FiLock className="input-icon" />}
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                dispatch(resetLoginState());
              }}
              required
            />

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            
            {status === 'success' && (
              <p style={{ color: 'green', textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
                Login successful! Redirecting to Home...
              </p>
            )}
            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
                {error}
              </p>
            )}
          </form>

          <p className="signup-text">
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Create Account
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

export default Login;
