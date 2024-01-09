import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors([]); // Reset all errors when user types in the email field
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors([]); // Reset all errors when user types in the password field
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors(['Please enter a valid email address.']);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormErrors(['Please enter both email and password.']);
      return;
    }

    if (!validateEmail()) {
      return;
    }

    // Assuming email and password are correct, display the email in the error field
    setFormErrors([`Logged in successfully. Email: ${email}`]);

    // Perform your form submission logic here (e.g., redirect to a dashboard)
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setFormErrors([]);
  };
  return (
    <div>
      <h2>Login Form</h2>
      {formErrors.length > 0 && (
        <div style={{ color: 'green' }}>
          {formErrors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" placeholder='Enter email' value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" data-test-id="submit">Submit</button>
        <button type="button" data-test-id="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
      {/* <h1>Value Fetched from Store : {value}</h1>   */}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     value: state.example.value,
//   };
// };

LoginForm.propTypes = {
  value: PropTypes.number.isRequired,
};
// export default connect(mapStateToProps)(LoginForm);
export default (LoginForm);
