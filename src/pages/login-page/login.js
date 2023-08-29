import React, { useState } from "react";
import "./login.css"; // import CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!email || !password) {
      setError("Please enter email and password.");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters.");
    } else {
      // Login logic
      // ...
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;