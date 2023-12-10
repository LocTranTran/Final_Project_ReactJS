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
//các Item
const products = [
  {
    id: 1,
    name: "Áo sơ mi nam",
    price: 250000,
    description: "Áo sơ mi tay dài chất vải mềm mại thoáng mát",
    images: [
      "https://dongphuchaianh.vn/wp-content/uploads/2021/12/ao-so-mi-nam-dai-tay.jpg",
    ],
    quantity: 1,
    category: "Áo",
  },
  {
    id: 2,
    name: "Áo Khoác Denim Rhythm Of Life",
    price: 199000,
    description:
      "Áo khoác denim Rhythm Of Life mang đến cho bạn một sự kết hợp tinh tế ",
    images: [
      "https://product.hstatic.net/1000360022/product/id-001066a_1f6a2f894f664445ac194ff6233546b1_grande.jpg",
    ],
    quantity: 1,
    category: "Áo",
  },
  {
    id: 3,
    name: "Áo Hoodie Oversize Logo Embroider",
    price: 3590000,
    description:
      "Áo Hoodie Oversize Logo Embroider với thiết kế rộng rãi và được nhấn mạnh bởi logo",
    images: [
      "https://product.hstatic.net/1000360022/product/id-002168a_32a29f8ae88644b8b34747a92d2a3c7b_large.jpg",
    ],
    quantity: 1,
    category: "Áo",
  },
  {
    id: 4,
    name: "Áo Polo Len Constrast Knit",
    price: 79000,
    description: "Áo Polo Len Contrast Knit mang đến sự sang trọng và phá cách",
    images: [
      "https://product.hstatic.net/1000360022/product/id-002437a_df32655dcd9045c38673b37d0034a637_large.jpg",
    ],
    quantity: 1,
    category: "Áo",
  },
  {
    id: 5,
    name: "Áo Sơmi Cuban Floral Plain",
    price: 1990000,
    description:
      "Áo Sơmi Cuban Floral Plain tạo ấn tượng mạnh mẽ với một sự kết hợp tinh tế giữa nền đen sâu và họa tiết hoa lớn",
    images: [
      "https://product.hstatic.net/1000360022/product/id-000951a_baec338a87384d08898f9187ef7e3117_grande.jpg",
    ],
    quantity: 1,
    category: "Áo",
  },
  {
    id: 6,
    name: "Áo khoác gió unisex",
    brand: "Columbia",
    price: 1200000,
    colors: ["Đen", "Xám"],
    sizes: ["S", "M", "L"],
    description: "Áo khoác gió chống nước Columbia chất lượng tốt",
    quantity: 1,
    sold: 50,
    images: [
      "https://bizweb.dktcdn.net/100/415/697/products/m0w2iuvv-1-1hxj-hinh-mat-truoc-01-773b266a-c405-45d5-b508-87327f1f0062.jpg?v=1664011459027",
    ],
    category: "Áo",
  },
  {
    id: 7,
    name: "Áo thun Polo nữ tay ngắn",
    brand: "Crocodile",
    price: 179000,
    colors: ["Hồng", "Trắng"],
    sizes: ["S", "M"],
    description: "Áo polo nữ Crocodile chất thun mềm mịn thoải mái",
    quantity: 1,
    sold: 150,
    images: [
      "https://product.hstatic.net/1000284478/product/90_586779_1_b94f5c343a2f47cda175af1303af6220_master.jpg",
    ],
    category: "Áo",
  },
  {
    id: 8,
    name: "Áo Sơmi Regular Sợi Tre Basic",
    brand: "Crocodile",
    price: 179000,
    colors: ["Hồng", "Trắng"],
    sizes: ["S", "M"],
    description:
      "Với form dáng Regular, áo sơmi mang đến sự thoải mái và linh hoạt cho người mặc",
    images: [
      "https://product.hstatic.net/1000360022/product/id-002439a_cd390765e99d4d668fac784164ca17cc_grande.jpg",
    ],
    quantity: 1,
    category: "Áo",
  },
  {
    id: 9,
    name: "Quần tây âu nam",
    brand: "Canifa",
    price: 450000,
    colors: ["Đen", "Xám"],
    sizes: ["28", "30", "32", "34"],
    description: "Quần tây âu vải wool dáng ôm chuẩn form dáng đứng",
    quantity: 1,
    sold: 70,
    images: [
      "https://product.hstatic.net/200000195253/product/vn-11134201-23020-djywqidsh2nv17_8f767ba435784412a1d2fbcb70876a49_master.jpg",
    ],
    category: "Quần",
  },

  {
    id: 10,
    name: "Giày thể thao Biti's chất lượng cao, độ bền cực tốt",
    brand: "Biti's",
    price: 620000,
    colors: ["Trắng", "Đen"],
    sizes: [39, 40, 41, 42],
    description:
      "Giày thể thao Biti's chất lượng cao, độ bền cực tốt jsdf sdfhsjdf asdfh df dfhjf dfhjh ",
    quantity: 1,
    sold: 100,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqTdlX8TrKJOX_e7B0UuI3_5m24PwppxyC_noUgQ5U1GRjgb3txNvbbH-cQczxb03hME&usqp=CAU",
    ],
    category: "Giày",
  },
  {
    id: 11,
    name: "Đồng hồ nam Casio",
    brand: "Casio",
    price: 1200000,
    description: "Đồng hồ Casio chính hãng, mặt số tròn đơn giản tinh tế",
    quantity: 1,
    sold: 20,
    images: [
      "https://cdn.tgdd.vn/Products/Images/7264/209019/casio-mtp-1374d-1avdf-nam-ga-1-org.jpg",
    ],
    category: "Đồng hồ",
  },

  {
    id: 12,
    name: "Ví nam da bò thật",
    brand: "Hugo",
    price: 450000,
    colors: ["Đen", "Nâu"],
    description: "Ví da bò thật chất lượng cao, thiết kế đơn giản thanh lịch",
    quantity: 1,
    sold: 60,
    images: [
      "https://azico.vn/uploads/images/vi-da-nam/__thumbs/vi-da-nam-D686(3).jpg/vi-da-nam-D686(3)__320x320.jpg",
    ],
    category: "Ví",
  },

  {
    id: 13,
    name: "Chân váy xòe nữ",
    brand: "Ruby",
    price: 299000,
    colors: ["Đỏ", "Đen", "Trắng"],
    sizes: ["S", "M", "L"],
    description: "Chân váy xòe chất liệu voan mềm mại bay bổng",
    quantity: 1,
    sold: 250,
    images: [
      "https://filebroker-cdn.lazada.vn/kf/S7b724deee49140a2b487449b9996f9e5b.jpg",
    ],
    category: "Chân váy",
  },

  {
    id: 14,
    name: "Giày cao gót nữ",
    brand: "Vinshoes",
    price: 249000,
    colors: ["Đỏ", "Đen", "Nude"],
    sizes: [35, 36, 37, 38],
    description: "Giày cao gót chất liệu da êm ái đi lên dáng chân",
    quantity: 1,
    sold: 500,
    images: [
      "https://img.websosanh.vn/v2/users/review/images/su60k9a6bza5o.jpg?compress=85",
    ],
    category: "Giày",
  },

  {
    id: 15,
    name: "Túi xách nữ",
    brand: "Gucci",
    price: 9500000,
    colors: ["Đen", "Be"],
    description: "Túi xách Gucci chính hãng da cao cấp sang trọng",
    quantity: 1,
    sold: 15,
    images: [
      "https://www.charleskeith.vn/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-vn-products/default/dw94d09657/images/hi-res/2022-L6-CK2-70701231-3-09-1.jpg?sw=756&sh=1008",
    ],
    category: "Túi",
  },

  {
    id: 16,
    name: "Nón lưỡi trai unisex",
    brand: "The Hat",
    price: 159000,
    colors: ["Đen", "Trắng", "Be"],
    description: "Nón lưỡi trai chống nắng hiệu quả",
    quantity: 1,
    sold: 800,
    images: [
      "https://filebroker-cdn.lazada.vn/kf/S01d92fe88017431bb7c4441a3ef329dfA.jpg",
    ],
    category: "Nón",
  },

  {
    id: 17,
    name: "Kính mát thời trang",
    brand: "Rayban",
    price: 1990000,
    colors: ["Đen", "Nâu"],
    description: "Kính mát Rayban chính hãng chống tia UV tốt",
    quantity: 1,
    sold: 100,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIVlWaupN_3Z8-EjcYHXhw0-uNyy34iuc_w&usqp=CAU",
    ],
    category: "Kính",
  },
  {
    id: 18,
    name: "Giày thể thao Nike Air Jordan 1 Mid",
    price: 499000,
    description:
      "Giày thể thao Nike Air Jordan 1 Mid, chất liệu da cao cấp, đế cao su bền chắc, thiết kế trẻ trung năng động.",
    images: [
      "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/05/giay-the-thao-nike-air-jordan-1-mid-se-dv1337-004-mau-den-size-36-5-6459cefd6db92-09052023114133.jpg",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 19,
    name: "Giày thể thao Adidas Superstar",
    price: 399000,
    description:
      "Giày thể thao Adidas Superstar, chất liệu da tổng hợp, đế cao su bền chắc, thiết kế đơn giản trẻ trung.",
    images: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScXyFgHVlmYjiGYSfxdlJjx3f5ja1l5OHD2UumV6aIY4VXt7SSh9N3PUFrSG98",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 20,
    name: "Giày thể thao Converse Chuck Taylor All Star",
    price: 299000,
    description:
      "Giày thể thao Converse Chuck Taylor All Star, chất liệu vải canvas, đế cao su bền chắc, thiết kế đơn giản trẻ trung.",
    images: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTK2etW5GVFxTsfzzAKvPgjP0fOtoffIEZNIDGv8PdkG1kZ6PhF8IZsHvzq8bmH",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 21,
    name: "Mũ lưỡi trai Adidas Originals Trefoil",
    price: 299000,
    description:
      "Mũ lưỡi trai Adidas Originals Trefoil, chất liệu cotton, thiết kế đơn giản trẻ trung.",
    images: [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmMLsJgfAmHKB8qO3qBtR3_1s2wbAJ7dLTUGbE_VXuPFzV0JawLofM8AjULuec",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 22,
    name: "Mũ lưỡi trai Supreme",
    price: 299000,
    description:
      "Mũ lưỡi trai Supreme, chất liệu cotton, thiết kế độc đáo ấn tượng.",
    images: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8gIvgWRl0agvwpg1trdRNyd9b_d9TaUdn_HUpjpp8KUwhwv98_QTq5wIRXDa-",
    ],
    quantity: 1,
    category: "Mũ",
  },
];
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
app.get("/products", (req, res) => {
  res.status(200).json(products);
});
app.listen("3002", () => {
  console.log("run product");
});
