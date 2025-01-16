import React, { useState } from 'react';

type Props = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<Props> = ({ onLogin }) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
    setLoginStatus(true); // Update login status after login attempt
  };

  return (
    <div>
      <h1>Login Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Login state: {loginStatus ? 'Logged in' : 'Not logged in'}</p>
    </div>
  );
};

export default Login;
