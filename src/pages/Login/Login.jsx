import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleLogin = () => {
    axios
      .post('http://localhost:8080/login', { username, password })
      .then((response) => {
        console.log(response.data.message); // Login successful
        console.log(response.data.token); // JWT token
        if (response.status === 200) {
          // Chuyển hướng người dùng đến trang khác
          setTimeout(() =>{
            navigate("/"); 

          },2000)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;