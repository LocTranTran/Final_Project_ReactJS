const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cấu hình CORS
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//---------------------------------------------------------------------------------------
// Giả định danh sách người dùng đã đăng ký
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

// Route đăng nhập
app.post("/login", (req, res) => {
  // Lấy thông tin đăng nhập từ yêu cầu
  const { username, password } = req.body;
  console.log(username, password);

  // Tìm kiếm người dùng trong danh sách
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  // Kiểm tra xem người dùng có tồn tại hay không
  if (!user) {
    return res
      .status(401)
      .json({ error: "Tên người dùng hoặc mật khẩu không chính xác." });
  }

  // Trả về thành công nếu đăng nhập thành công
  return res.status(200).json({ message: "Đăng nhập thành công." });
});
// Tạo tài khoản người dùng
app.post("/sign", (req, res) => {
  // Lấy thông tin từ yêu cầu đăng ký
  let { username, password } = req.body;
  console.log(username, password);
  // Kiểm tra nếu thiếu thông tin đăng ký
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Vui lòng cung cấp đầy đủ thông tin đăng ký." });
  }

  // Xử lý logic đăng ký tại đây (ví dụ: lưu thông tin người dùng vào cơ sở dữ liệu)

  // Kiểm tra xem người dùng đã tồn tại trong mảng users hay chưa
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: "Tên người dùng đã tồn tại." });
  }

  // Tạo một đối tượng mới đại diện cho người dùng đăng ký
  const newUser = { username, password };

  // Thêm người dùng mới vào mảng users
  users.push(newUser);

  // Trả về thành công nếu đăng ký thành công
  return res.status(200).json({ message: "Đăng nhập thành công." });
});
/// gửi nó về dùng respont
app.listen("3001", () => {
  console.log("run login");
});
