import React, { useState } from 'react';
import '../styles/SigninScreen.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignupScreen() {
  const [isPasswordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signupHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert(email + ' ' + password + ' ' + confirmPassword);
    } else {
      toast.error('Password mismatch!');
    }
  };
  return (
    <section className="signin-page">
      <div className="signin-container signup-container">
        <div className="signin-container-header">Sign Up</div>
        <form className="signin-form signup-form" onSubmit={signupHandler}>
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
            <label htmlFor="confirmPassword">
              Confirm Password<span>*</span>
            </label>
            <input
              type={isPasswordShow ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <button type="submit" className="signin-button">
            SIGNUP
          </button>
          <h3>
            Already have an account
            <Link to="/signin">Login</Link>
          </h3>
        </form>
      </div>
    </section>
  );
}
