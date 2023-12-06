
const express = require("express");
const cors = require("cors");
const app= express();
const products=[
  {
    id: 1,
    name: "Áo sơ mi tay dài nam",
    brand: "Việt Tiến",
    price: 250000,
    colors: ["Xanh nhạt", "Trắng"],
    sizes: ["S", "M", "L", "XL"],
    description: "Áo sơ mi tay dài chất vải mềm mại thoáng mát", 
    quantity: 15,
    sold: 30,
    images: ["https://dongphuchaianh.vn/wp-content/uploads/2021/12/ao-so-mi-nam-dai-tay.jpg"],
    category: "Áo sơ mi nam",
  },
  
  {
    id: 2,
    name: "Quần tây âu nam", 
    brand: "Canifa",
    price: 450000,
    colors: ["Đen", "Xám"],
    sizes: ["28", "30", "32", "34"],
    description: "Quần tây âu vải wool dáng ôm chuẩn form dáng đứng",
    quantity: 20, 
    sold: 70,
    images: ["https://product.hstatic.net/200000195253/product/vn-11134201-23020-djywqidsh2nv17_8f767ba435784412a1d2fbcb70876a49_master.jpg"],
    category: "Quần âu nam",
  },
  
  {
    id: 3,
    name: "Giày thể thao nam Biti's",
    brand: "Biti's",
    price: 620.000,
    colors: ["Trắng", "Đen"],
    sizes: [39, 40, 41, 42],
    description: "Giày thể thao Biti's chất lượng cao, độ bền cực tốt jsdf sdfhsjdf asdfh df dfhjf dfhjh ",
    quantity: 30,
    sold: 100, 
    images: ["https://s.alicdn.com/@sc04/kf/H279105a843e7469a9e9134a861e12507V.jpg"],
    category: "Giày thể thao nam",
  },
  
  {
    id: 4,
    name: "Đồng hồ nam Casio",
    brand: "Casio",
    price: 120.000,
    description: "Đồng hồ Casio chính hãng, mặt số tròn đơn giản tinh tế",
    quantity: 10,
    sold: 20,
    images: ["https://cdn.tgdd.vn/Products/Images/7264/209019/casio-mtp-1374d-1avdf-nam-ga-1-org.jpg"],
    category: "Đồng hồ nam",
  },
  
  {  
    id: 5,
    name: "Ví nam da bò thật",
    brand: "Hugo",
    price: 450.000,
    colors: ["Đen", "Nâu"],
    description: "Ví da bò thật chất lượng cao, thiết kế đơn giản thanh lịch",
    quantity: 30,
    sold: 60,
    images:["https://azico.vn/uploads/images/vi-da-nam/__thumbs/vi-da-nam-D686(3).jpg/vi-da-nam-D686(3)__320x320.jpg"],
    category: "Ví nam",
  },
  
  {
    id: 6,
    name: "Áo khoác gió unisex",
    brand: "Columbia",
    price: 1200000,
    colors: ["Đen", "Xám"],
    sizes: ["S", "M", "L"],
    description: "Áo khoác gió chống nước Columbia chất lượng tốt",
    quantity: 20,
    sold: 50, 
    images: ["https://bizweb.dktcdn.net/100/415/697/products/m0w2iuvv-1-1hxj-hinh-mat-truoc-01-773b266a-c405-45d5-b508-87327f1f0062.jpg?v=1664011459027"],
    category: "Áo khoác",  
  },
  
  {
    id: 7,
    name: "Áo thun Polo nữ tay ngắn",
    brand: "Crocodile",
    price: 179000,
    colors: ["Hồng", "Trắng"],
    sizes: ["S", "M"],  
    description: "Áo polo nữ Crocodile chất thun mềm mịn thoải mái",
    quantity: 50,
    sold: 150,
    images: ["https://product.hstatic.net/1000284478/product/90_586779_1_b94f5c343a2f47cda175af1303af6220_master.jpg"],
    category: "Áo thun nữ",
  },  
  
  {
    id: 8,
    name: "Chân váy xòe nữ",
    brand: "Ruby",
    price: 299000,  
    colors: ["Đỏ", "Đen", "Trắng"],
    sizes: ["S", "M", "L"],
    description: "Chân váy xòe chất liệu voan mềm mại bay bổng",
    quantity: 100,
    sold: 250,
    images: ["https://filebroker-cdn.lazada.vn/kf/S7b724deee49140a2b487449b9996f9e5b.jpg"], 
    category: "Chân váy nữ",
  },
  
  {
    id: 9, 
    name: "Giày cao gót nữ",
    brand: "Vinshoes",
    price: 249000,
    colors: ["Đỏ", "Đen", "Nude"],
    sizes: [35, 36, 37, 38],
    description: "Giày cao gót chất liệu da êm ái đi lên dáng chân",
    quantity: 150,
    sold: 500,
    images: ["https://img.websosanh.vn/v2/users/review/images/su60k9a6bza5o.jpg?compress=85"],
    category: "Giày cao gót",
  },
  
  {
    id: 10,
    name: "Túi xách nữ",
    brand: "Gucci",  
    price: 9500000,
    colors: ["Đen", "Be"],
    description: "Túi xách Gucci chính hãng da cao cấp sang trọng",
    quantity: 10,
    sold: 15,
    images: ["https://www.charleskeith.vn/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-vn-products/default/dw94d09657/images/hi-res/2022-L6-CK2-70701231-3-09-1.jpg?sw=756&sh=1008"],
    category: "Túi xách",
  },
  
  {
    id: 11, 
    name: "Nón lưỡi trai unisex",  
    brand: "The Hat",
    price: 159000,
    colors: ["Đen", "Trắng", "Be"],
    description: "Nón lưỡi trai chống nắng hiệu quả",
    quantity: 200,
    sold: 800,
    images: ["https://filebroker-cdn.lazada.vn/kf/S01d92fe88017431bb7c4441a3ef329dfA.jpg"],
    category: "Nón",
  },
  
  {
    id: 12,
    name: "Kính mát thời trang",
    brand: "Rayban",
    price: 1990000,
    colors: ["Đen", "Nâu"],
    description: "Kính mát Rayban chính hãng chống tia UV tốt",
    quantity: 50,
    sold: 100,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIVlWaupN_3Z8-EjcYHXhw0-uNyy34iuc_w&usqp=CAU"],
    category: "Kính mát", 
  },
] 

// Cấu hình CORS
app.use(cors({
  origin: 'http://localhost:3000',
}));


/// gửi nó về dùng respont 
app.get("/v1/products",(req,res)=>{
    res.status(200).json(products)
})
app.listen("8080",()=>{
    console.log("severRunning...")
})