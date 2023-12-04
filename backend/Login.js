const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json());

// Tạo tài khoản người dùng
app.post('/register', (req, res, next) => {
  // Lấy thông tin từ yêu cầu đăng ký
  let { username, password } = req.body;
  console.log(username, password)
    // Kiểm tra nếu thiếu thông tin đăng ký
    if (!username || !password) {
      return res.status(400).json({ error: 'Vui lòng cung cấp đầy đủ thông tin đăng ký.' });
    }
  
    // Xử lý logic đăng ký tại đây (ví dụ: lưu thông tin người dùng vào cơ sở dữ liệu)
  
    // Trả về thành công nếu đăng ký thành công
    return res.status(200).json({ message: 'Đăng ký thành công.' });
  
});

// Giả định danh sách người dùng đã đăng ký
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Route đăng nhập
app.post('/login', (req, res) => {
  // Lấy thông tin đăng nhập từ yêu cầu
  const { username, password } = req.body;
  console.log(username, password)

  // Tìm kiếm người dùng trong danh sách
  const user = users.find((user) => user.username === username && user.password === password);

  // Kiểm tra xem người dùng có tồn tại hay không
  if (!user) {
    return res.status(401).json({ error: 'Tên người dùng hoặc mật khẩu không chính xác.' });
  }

  // Trả về thành công nếu đăng nhập thành công
  return res.status(200).json({ message: 'Đăng nhập thành công.' });
});

app.get('/logins',(req, res, next)=>{
  res.json('Login')
})
app.listen(3001, () => {
  console.log('Server is running login');
});