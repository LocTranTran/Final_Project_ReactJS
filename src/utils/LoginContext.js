import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Tạo một Context có tên là LoginContext
export const LoginContext = createContext();

// Tạo hàm LoginProvider, nhận vào các thành phần con và số lượng sản phẩm hiển thị
export function LoginProvider({ children }) {
   const inputRef = useRef(null);
  const [username, setUsername] = useState(""); // Trạng thái lưu trữ tên người dùng
  const [password, setPassword] = useState(""); // Trạng thái lưu trữ mật khẩu
  const [showLogout, setShowLogout] = useState(false); // Trạng thái hiển thị nút đăng xuất
  const [isLoading, setIsLoading] = useState(false); // Trạng thái đang tải
  const [checkPassword, setCheckPassword] = useState(false); // Trạng thái kiểm tra mật khẩu
  const [confirmPassword, setConfirmPassword] = useState(""); // Trạng thái lưu trữ mật khẩu xác nhận
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(""); // Trạng thái kiểm tra mật khẩu xác nhận
  const [error, setError] = useState(""); // Trạng thái lưu trữ thông báo lỗi
  const [loggedIn, setLoggedIn] = useState(false); // Trạng thái đăng nhập
  const navigate = useNavigate(); // Hàm điều hướng trang

  const login = (name) => {
    setLoggedIn(true); // Đánh dấu đã đăng nhập
    setUsername(name); // Lưu tên người dùng
    setShowLogout(false); // Ẩn nút đăng xuất
  };

  const handleLogout = () => {
    setLoggedIn(false); // Đánh dấu đã đăng xuất
    setIsLoading(false); // Đặt trạng thái tải về false
    setUsername(""); // Xóa tên người dùng
    setPassword(""); // Xóa mật khẩu
    setConfirmPassword(""); // Xóa mật khẩu
  };

  const handleUserClick = () => {
    setShowLogout(!showLogout); // Đảo ngược trạng thái hiển thị nút đăng xuất
  };

  const handleCheckPassword = () => {
    setCheckPassword(!checkPassword); // Đảo ngược trạng thái kiểm tra mật khẩu
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Cập nhật tên người dùng khi người dùng thay đổi
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Cập nhật mật khẩu khi người dùng thay đổi
  };
  const handleCheckConfirmPassword = () => {
    setCheckConfirmPassword(!checkConfirmPassword); // Đảo ngược trạng thái kiểm tra mật khẩu xác nhận
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value); // Cập nhật mật khẩu xác nhận khi người dùng thay đổi
  };

  const handleLogin = () => {
  axios
    .post("http://localhost:8080/login", { username, password })
    .then((response) => {
      console.log(response.data.message); // Thông báo đăng nhập thành công
      console.log(response.data.token); // JWT token
      if (response.status === 200) {
        setIsLoading(true); // Đánh dấu đang tải
        // Hiển thị thông báo đăng nhập thành công
        toast.success("Đăng nhập thành công", {
          autoClose: 500,
          toastClassName: "toast",
        });
        login(response.data.username); // Đăng nhập với tên người dùng
        setTimeout(() => {
          navigate("/"); // Chuyển hướng đến trang chính
          setIsLoading(false); // Đánh dấu đã tải xong
        }, 1000);
        login(username)
      }
    })
    .catch((error) => {
      console.error("Đăng nhập không thành công:");
      // Hiển thị thông báo đăng nhập không thành công
      toast.error("Đăng nhập không thành công", {
        autoClose: 500,
        toastClassName: "toast",
      });
    });
};
const handleSubmit = async (event) => {
  event.preventDefault();
  if (password !== confirmPassword) {
    setError("Mật khẩu xác nhận không khớp"); // Đặt thông báo lỗi nếu mật khẩu xác nhận không khớp
    return;
  }
  try {
    const response = await axios.post("http://localhost:8080/sign", {
      username,
      password,
    });

    if (response.status === 200) {
      setIsLoading(true); // Đánh dấu đang tải
      // Hiển thị thông báo đăng ký thành công
      toast.success("Đăng ký thành công", {
        autoClose: 500,
        toastClassName: "toast",
      });
      setTimeout(() => {
        navigate("/login"); // Chuyển hướng đến trang đăng nhập
        setIsLoading(false); // Đánh dấu đã tải xong
      }, 1000);
    } 
  } catch (error) {
    console.error("Đăng ký không thành công:", error);
    setError("Đăng ký không thành công"); // Đặt thông báo lỗi nếu đăng ký không thành công
    // Hiển thị thông báo đăng ký không thành công
    toast.error("Đăng nhập không thành công", {
      autoClose: 500,
      toastClassName: "toast",
    });
  }
};

  return (
    <LoginContext.Provider
      value={{
        error,
        inputRef,
        username,
        password,
        loggedIn,
        isLoading,
        showLogout,
        checkPassword,
        confirmPassword,
        checkConfirmPassword,
        login: handleLogin,
        handleLogin,
        handleSubmit,
        handleLogout,
        handleUserClick,
        handleCheckPassword,
        handleUsernameChange,
        handlePasswordChange,
        handleCheckConfirmPassword,
        handleConfirmPasswordChange,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
