import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // <- new state
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isRegistering
      ? 'http://localhost:8080/api/admin/register'
      : 'http://localhost:8080/api/admin/login';

    const body = isRegistering
      ? JSON.stringify({ email, password })
      : JSON.stringify({ email, password, otp });

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    const data = await response.json();

    
    if (response.ok) {
      if (isRegistering) {
        alert('Registration successful. You can now log in.');
        setIsRegistering(false);
        setShowOtpField(false);
        setOtpSent(false);
      } else {
        // Correctly setting the token in localStorage
        localStorage.setItem('token', data.token); // This is correct usage of setItem
      
        navigate('/dashboard');
      }
    } else {
      setError(data.error || 'An error occurred');
    }
  };

  const handleSendOtp = async () => {
    if (!email) {
      setError('Please enter an email address first.');
      return;
    }

    const response = await fetch('http://localhost:8080/api/admin/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      setShowOtpField(true);
      setOtpSent(true); // <- OTP was sent
    } else {
      setError(data.error || 'Failed to send OTP');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">
          {isRegistering ? 'Admin Register' : 'Admin Login'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isRegistering && showOtpField && (
            <div className="mb-3">
              <label className="form-label">OTP:</label>
              <input
                type="text"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter OTP sent to your email"
              />
            </div>
          )}

          <div className="d-grid gap-2">
            {!isRegistering && !otpSent && (
              <button type="button" className="btn btn-secondary" onClick={handleSendOtp}>
                Send OTP
              </button>
            )}

            {(!isRegistering && otpSent) || isRegistering ? (
              <button type="submit" className="btn btn-primary">
                {isRegistering ? 'Register' : 'Login'}
              </button>
            ) : null}
          </div>
        </form>

        <button
          className="btn btn-link mt-3 w-100"
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError('');
            setShowOtpField(false);
            setOtpSent(false);
          }}
        >
          {isRegistering ? 'Already have an account? Login' : 'New admin? Register'}
        </button>

        {error && <div className="alert alert-danger mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
