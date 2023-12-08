import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Tạo một Context có tên là CartContext
export const CartContext = createContext();

// Tạo hàm CartProvider, nhận vào các thành phần con và số lượng sản phẩm hiển thị
export function CartProvider({ children, numItem }) {
  // Tạo các state cần thiết
  const [isLoading ,setIsLoading] = useState(false);
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [displayedItems, setDisplayedItems] = useState([]); // Danh sách sản phẩm hiển thị
  const [filterProduct, setFilterProduct] = useState([]); // Danh sách sản phẩm sau khi lọc
  const [searchItem, setSearchItem] = useState(''); // Tìm Kiếm sản phẩm
 const [cartItems, setCartItems] = useState([]);

  const formatPrice = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
 const addToCart = (product) => {
   setCartItems([...cartItems, product]);
 };
  //Thêm vào giỏ hàng 
  // Sử dụng useEffect để lấy dữ liệu từ API khi component được render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/products");
        setProducts(response.data); // Cập nhật danh sách sản phẩm
        setDisplayedItems(response.data.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [numItem]);

    // Hàm xử lý việc tìm sản phẩm theo tên
  const handleSearchInputChange = (event) => {
    setSearchItem(event.target.value.toLowerCase());
  };
  const handleSearchButtonClick = () => {
    setIsLoading(true);
    setTimeout(() =>{
      const filteredItems = products.filter((product) =>
        product.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilterProduct(filteredItems);
      setDisplayedItems(filteredItems.slice(0, numItem));  
      setIsLoading(false);  
    },1000)
  };
  
  // Hàm xử lý việc lọc sản phẩm theo giá
  const handlePriceFilter = (event) => {
    const selectPrice = event.target.value;
    let filteredItems = [...products];

    if (selectPrice === "all") {
      setFilterProduct([]); // Nếu chọn "Tất cả", không áp dụng bộ lọc
    } else if (selectPrice === "< 100k") {
      filteredItems = filteredItems.filter((product) => product.price < 100000); // Lọc sản phẩm có giá dưới 100k
    } else if (selectPrice === "100 - 200k") {
      filteredItems = filteredItems.filter(
        (product) => product.price >= 100000 && product.price <= 200000
      ); // Lọc sản phẩm có giá từ 100k đến 200k
    } else if (selectPrice === "> 300k") {
      filteredItems = filteredItems.filter((product) => product.price >= 300000); // Lọc sản phẩm có giá trên 300k
    }
    setTimeout(() => {
      
      setFilterProduct(filteredItems);
      setDisplayedItems(filteredItems.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị sau khi lọc và cắt số lượng sản phẩm
    },1000)
  };
    // Hàm xử lý việc lọc sản phẩm theo loại
  const handleNameFilter = (event) => {
    const selectType = event.target.value;
    let filteredItems = [...products];
  
    if (selectType === "all") {
      setFilterProduct([]); // Nếu chọn "Tất cả", không áp dụng bộ lọc
    } else if (selectType === "Quần") {
      filteredItems = filteredItems.filter((product) => product.category === "Quần"); // Lọc sản phẩm thuộc loại "quần"
    } else if (selectType === "Áo") {
      filteredItems = filteredItems.filter((product) => product.category === "Áo"); // Lọc sản phẩm thuộc loại "áo"
    } else if (selectType === "Giày") {
      filteredItems = filteredItems.filter((product) => product.category === "Giày"); // Lọc sản phẩm thuộc loại "phụ kiện"
    } else if (selectType === "Ví") {
      filteredItems = filteredItems.filter((product) => product.category === "Ví"); // Lọc sản phẩm thuộc loại "phụ kiện"
    } else if (selectType === "Đồng hồ") {
      filteredItems = filteredItems.filter((product) => product.category === "Đồng hồ"); // Lọc sản phẩm thuộc loại "phụ kiện"
    } else if (selectType === "Túi") {
      filteredItems = filteredItems.filter((product) => product.category === "Túi"); // Lọc sản phẩm thuộc loại "phụ kiện"
    }
  
    setTimeout(() => {
      setFilterProduct(filteredItems);
      setDisplayedItems(filteredItems.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị sau khi lọc và cắt số lượng sản phẩm
    }, 1000);
  };
  //Hàm sắp xếp sản phẩm 
  const handleSort = (event) => {
    const sortOption = event.target.value;
    let sortedItems = [...filterProduct];
  
    if (sortOption === "asc") {
      sortedItems.sort((a, b) => a.price - b.price); // Sắp xếp từ thấp đến cao
    } else if (sortOption === "desc") {
      sortedItems.sort((a, b) => b.price - a.price); // Sắp xếp từ cao đến thấp
    }
  
    setTimeout(() => {
      setFilterProduct(sortedItems);
      setDisplayedItems(sortedItems.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị sau khi sắp xếp và cắt số lượng sản phẩm
    }, 1000);
    
  };  // Trả về CartContext.Provider với giá trị context là displayedItems và handlePriceFilter
  return (
    <CartContext.Provider
      value={{
        formatPrice,
        cartItems,
        addToCart,
        displayedItems,
        filterProduct,
        isLoading,
        handleSearchInputChange,
        handleSearchButtonClick,
        handlePriceFilter,
        handleNameFilter,
        handleSort,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}