import React, { useState } from 'react';

type Props = {};

const Login: React.FC<Props> = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  return (
    <div>
      <h1>Login Component</h1>
      <p>Login state: {loginStatus}</p>
    </div>
  );
};

export default Login;
