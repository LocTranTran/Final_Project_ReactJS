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
  {
    id: 23,
    name: "Giày thể thao Asics",
    price: 299000,
    description:
      "Giày thể thao Asics Court MZ Cream Black Gum Nam Nữ.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp4yihh4e3wu3b",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 24,
    name: "Giày Converse_Run Star Motion",
    price: 29000,
    description:
      "Giày CV Run Star Motion Cổ Cao Bản Classic High Cool tặng full pk.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp18rcxi021n6d",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 25,
    name: "Giày Force trắng",
    price: 399000,
    description:
      "Giày thể thao full trắng size 36->44 bản Cao Cấp tặng full phụ kiện.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnk8sdunkdx67d",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 26,
    name: "Giày MLB béo đủ 3 màu",
    price: 19000,
    description:
      "NY đế nâu, LA, NY vàng, Giày mlb NY chuẩn bản SC trung tặng full pk.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loeac2vbif1zaf",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 27,
    name: "Giày Air Jordan 4 retro off white sail",
    price: 1000,
    description:
      "Giày sneaker high JD4 màu kem vàng bản chuẩn SC Trung tặng full pk.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loeac2vv0r1v68",
    ],
    quantity: 1,
    category: "Giày",
  },
  {
    id: 28,
    name: "Ví Dáng Vuông Gấp Đôi Hot Trend ",
    price: 1000,
    description:
      " Ví Gấu Dâu Nhỏ Gọn Da Sần Hình Cute Ngộ Nghĩnh, Ví Mini Cute Tông Màu Be.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-23030-skwbzz15beovc2",
    ],
    quantity: 1,
    category: "Ví",
  },
  {
    id: 29,
    name: "Ví da nam GUSKI ",
    price: 800000,
    description:
      "Ví da nam GUSKI chính hãng hàng hiệu chất liệu da bò thật cao cấp GV1",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-23030-4wmz7w3yilov6f",
    ],
    quantity: 1,
    category: "Ví",
  },
  {
    id: 30,
    name: "Ví card holder hàng hiệu coach",
    price: 1000,
    description:
      "Ví card holder hàng hiệu coach nhỏ gọn nhiều mẫu hàng bao real shoe dog.",
    images: [
      "https://down-vn.img.susercontent.com/file/sg-11134201-22100-3ohcq4rdiuivd2",
    ],
    quantity: 1,
    category: "Ví",
  },
  {
    id: 31,
    name: "Ví nam cao cấp Full hộp ",
    price: 150000,
    description:
      " hàng hiệu WilliamPOLO chất liệu da Bò nguyên tấm - POLO 201500.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln05ulfxgm5vf8",
    ],
    quantity: 1,
    category: "Ví",
  },
  {
    id: 32,
    name: "Ví CE.line mini cao cấp",
    price: 1000,
    description:
      "Da bền đẹp, kèm ví holdcard, ví hàng hiệu sang chảnh",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llq61mzsodlr29",
    ],
    quantity: 1,
    category: "Ví",
  },
  {
    id: 33,
    name: "Kính râm nam nữ GUCCI",
    price: 634000,
    description:
      "Sơn Tùng 3 màu vàng trắng đen,kính râm thời trang cao cấp thiết kế ITALY phù hợp đi chơi,chụp ảnh",
    images: [
      "https://down-vn.img.susercontent.com/file/8d86e6f3583a691301dda25fd6432f1e",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 34,
    name: "Kính râm nam nữ GM TAM 01 2023",
    price: 1000,
    description:
      "Fullbox chống tia UV.Kính mát phong cách hàn quốc bền bỉ bảo hành 1 năm",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhkeuz7tc2o52f",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 35,
    name: "Kính râm nam nữ cao cấp LV ",
    price: 13000,
    description:
      "tráng gương chống chói chống tia UV cao cấp Fullbox.Kính mát",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-23030-lpg0zqmv76nv18",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 36,
    name: "Kính Hiệu Vuông Dio Tráng Gương",
    price: 189000,
    description:
      "Hồng Gọng Kim Loại Hàng Đẹp Chất",
    images: [
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdp-lfbm4erojb97ab",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 37,
    name: "Kính râm thời trang nam nữ V",
    price:641000,
    description:
      "GM ROCOCO new 2033 cao cấp Fullbox.Kính mát thời trang phong cách Hàn Quốc",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgjii3apze2fc9",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 38,
    name: "Mắt kính râm nữ hàng hiệu cao cấp",
    price: 800000,
    description:
      "chống tia uv thiết kế vuông phẳng sang trọng- KÍNH XI",
    images: [
      "https://down-vn.img.susercontent.com/file/69cf3518db59ffdd78038ec5af09da89",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 39,
    name: "Kính mát nam nữ, Gọng kính râm cao cấp Balen",
    price: 125000,
    description:
      "Balen nhỏ chống tia Uv400 C76 Jolie eyewear",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-livtzlwfz55e8a",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 40,
    name: "Kính Râm Cao Cấp V GM UNA.C ",
    price: 346000,
    description:
      "Chống Chói Phong Cách Hàn Quốc.Kính Thời Trang Đi Biển Nam Nữ Trẻ Trung Model 2022",
    images: [
      "https://down-vn.img.susercontent.com/file/1ee3e8b920dad98299a874fd161bb42e",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 41,
    name: "Kính râm nam nữ Cao Cấp V GM Jackie",
    price: 112000,
    description:
      "Kính mắt V GM thời trang phong cách Hàn Quốc .Bảo hành 1 năm",
    images: [
      "https://down-vn.img.susercontent.com/file/274f155cf9eb3f1c86916350f519a029",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 42,
    name: "Kính Mát Thời Trang V GM LILIT.",
    price: 222000,
    description:
      "Mắt Kính Râm Nam Nữ Hàn Quốc Cao Cấp Siêu Bền Chống Tia UV.Bảo hành 1 năm",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhjz1u6cwzutc2",
    ],
    quantity: 1,
    category: "Kính",
  },
  {
    id: 43,
    name: "Nón Kết , Mũ Lưỡi Trai 2hand Nam Nữ.",
    price: 50000,
    description:
      "rơn Dù Hàng Hiệu Cao Cấp Mới 97% Thêu In Hình To Unisex Freestyle Chống UV Mẫu 1",
    images: [
      "https://down-vn.img.susercontent.com/file/ea50b2bcfc48d18f62c1d44f37a21d81",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 56,
    name: "Mũ lưỡi trai NI KE DRI FIT ",
    price: 240000,
    description:
      "Chính hãng chất vải dù siêu nhẹ cao cấp, Mũ kết thể thao mã màu trắng đen xám",
    images: [
      "https://down-vn.img.susercontent.com/file/sg-11134201-22100-hhu0vqiho9iv05",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 57,
    name: "Mũ Lưỡi Trai Nón Sơn Vải Dù Đen",
    price: 35000,
    description:
      "Vá Lưới Chính Hãng Hàng Chuẩn Tem 7 Màu Thời Trang Cao Cấp Mới 2023",
    images: [
      "https://down-vn.img.susercontent.com/file/5ae69ee8d67a350c7baaf91c9cff5300",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 44,
    name: " NÓN CAO CẤP NIKE CHẤT COTTON",
    price: 162000,
    description:
      "VẢI DÙ CAO CẤP, NÓN KẾT THỂ THAO NNB70, FREESIZE, XỊN XÒ, XỊN MỊN",
    images: [
      "https://down-vn.img.susercontent.com/file/4f3aefe472f8019bac51097834707a2c",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 45,
    name: " Mũ thể thao a.didas ",
    price: 2422000,
    description:
      "vải dù 5panel thêu chỉ nổi mã A-CA01RO phong cách hiện đại.",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lictgtzard3gb2",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 46,
    name: "Nón Sơn chính hãng dành cho nam và nữ",
    price: 385000,
    description:
      "chất liệu cotton cao cấp MC001A - Hùng Nón Hiệu",
    images: [
      "https://down-vn.img.susercontent.com/file/3edfae03b2de69b5e3765513bea72310",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 47,
    name: "Mũ vải cao cấp chính hãng thương hiệu Wang nhập khẩu",
    price: 795000,
    description:
      "Nón vip",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lme1bue7join5b",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 48,
    name: "Mũ cói chính hãng thương hiệu cao cấp DIOR",
    price: 222000,
    description:
      "Mũ thời trang ",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lme1jck66wv34f",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 49,
    name: "Mũ Phớt Nam Lông Cừu Cao Cấp LC03 ",
    price: 525000,
    description:
      "Mũ Fedora Nam Hàng Hiệu Nhập Khẩu | MUGU",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-limsi70fuehe9d",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 50,
    name: "Mũ Nón Kết BBR Vải Dù Gió,Có Nhiều Màu Đẹp.",
    price: 228000,
    description:
      "Mũ dân chơi",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljodrr0x2jzo4d",
    ],
    quantity: 1,
    category: "Mũ",
  },
  {
    id: 51,
    name: "Túi si, túi xách nhập khẩu hiệu Guess Los Angeles mới 95% hàng có sẵn.",
    price: 350000,
    description:
      "Túi limitit",
    images: [
      "https://down-vn.img.susercontent.com/file/sg-11134201-22120-5ohvkry8znlv90",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 52,
    name: "Túi xách nữ LV- Size 25cm .",
    price: 890000,
    description:
      "Tỉ mỉ từng chi tiết - Hàng full box - Hàng đẹp - Giá rẻ - Đảm bảo chất lượng.B255",
    images: [
      "https://down-vn.img.susercontent.com/file/sg-11134201-22110-a73201nx0ckv24",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 53,
    name: "Túi xách nữ, túi đeo chéo cao cấp hàng hiệu DAUPHINE ",
    price: 1850000,
    description:
      "MFULL BOX sang chảnh – chất da bò sang, xịn,",
    images: [
      "https://down-vn.img.susercontent.com/file/sg-11134201-22110-fmrril7cihkvc7",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 54,
    name: "TÚI XÁCH NỮ L.V DAUPHINE SIZE 20 25 DA THẬT FULLBOX HÀNG VIP",
    price: 545000,
    description:
      "TÚI XÁCH NỮ L.V DAUPHINE SIZE 20 25 DA THẬT FULLBOX HÀNG VIP",
    images: [
      "https://down-vn.img.susercontent.com/file/ae04713a86563d531b7bff741a286d8b",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 55,
    name: "Túi xách nữ xách tay công sở quai lụa da mịn cao cấp",
    price: 1400000,
    description:
      "Túi xách nữ xách tay công sở quai lụa da mịn cao cấp hàng hiệu MX LUXURY MX032",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln5wddke62pfa4",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 58,
    name: "Louis Vuitton Mini Pochette Phụ Kiện Túi Xách Nhỏ Túi Nách/Cổ Điển/Hàng Thật 100%",
    price: 6000000,
    description:
      "Túi xách nữ xách tay công sở quai lụa da mịn cao cấp hàng hiệu MX LUXURY MX032",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lepq70ljxinne9",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 59,
    name: "Túi xách Cn shopping bag phối xích da nhăn mềm ",
    price: 499000,
    description:
      "kèm ví Hàng Super Fullbox size 30 32 36",
    images: [
      "https://down-vn.img.susercontent.com/file/e4fd6143b592a7c6e66078ec808d0b9c",
    ],
    quantity: 1,
    category: "Túi",
  },
  {
    id: 60,
    name: "Túi sang chảnh nhiều size, túi quai xách cao cấp hàng hiệu.",
    price: 720000,
    description:
      "túi xách nữ xách tay công sở quai lụa da mịn cao cấp hàng hiệu MX LUXURY MX032",
    images: [
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln7wxmeqs6ag4b",
    ],
    quantity: 1,
    category: "Túi",
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
