import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isRegistering
      ? 'https://mern-portfolio-1-yadr.onrender.com/api/admin/register'
      : 'https://mern-portfolio-1-yadr.onrender.com/api/admin/login';

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
        localStorage.setItem('token', data.token);
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

    const response = await fetch('https://mern-portfolio-1-yadr.onrender.com/api/admin/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      setShowOtpField(true);
      setOtpSent(true);
    } else {
      setError(data.error || 'Failed to send OTP');
    }
  };

  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="row justify-content-center w-100 m-0 px-2">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div
            className="card shadow p-4"
            style={{ maxHeight: '100vh', overflowY: 'auto' }}
          >
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
              className="btn btn-link mt-3 w-100 text-center"
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
      </div>
    </div>
  );
};

export default Signup;
