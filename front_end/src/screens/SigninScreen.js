import React, { useState } from 'react';
import '../styles/SigninScreen.css';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
  const [isPasswordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    alert(email + ' ' + password);
  };
  return (
    <section className="signin-page">
      <div className="signin-container">
        <div className="signin-container-header">Login</div>
        <form className="signin-form" onSubmit={loginHandler}>
          <div className="input-fields">
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-fields">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              type={isPasswordShow ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-fields">
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setPasswordShow(!isPasswordShow)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
          <button type="submit" className="signin-button">
            LOGIN
          </button>
          <h3>
            Not a member
            <Link to="/signup">Create an account</Link>
          </h3>
        </form>
      </div>
    </section>
  );
}
