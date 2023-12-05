import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/sign', { username, password });

      if (response.status === 200) {
        // Đăng ký thành công, xử lý logic tiếp theo (ví dụ: chuyển hướng đến trang đăng nhập)
      } else {
        setError('Đăng ký không thành công');
      }
    } catch (error) {
      console.error('Đăng ký không thành công:', error);
      setError('Đăng ký không thành công');
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Tên người dùng:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default Register;