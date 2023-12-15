import { createContext, useState, useEffect, } from "react";
import axios from "axios";

// Tạo một Context có tên là CartContext
export const CartContext = createContext();

// Tạo hàm CartProvider, nhận vào các thành phần con và số lượng sản phẩm hiển thị
export function CartProvider({ children, numItem }) {
  // Tạo các state cần thiết

  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [displayedItems, setDisplayedItems] = useState([]); // Danh sách sản phẩm hiển thị
  ///thêm vào giỏ hàng 
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
 const [subTotal, setSubTotal] = useState(0);
 //xóa sản phẩm trong giỏ hàng
 const removeFromCart = (itemId) => {
  const updatedCartItems = cartItems.filter(item => item.id !== itemId);
  setCartItems(updatedCartItems);
};
  const formatPrice = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const handleMinus = (item) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    }
    const newSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubTotal(newSubTotal);
    setCartItems([...cartItems]);
  };

  const handlePlus = (item) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      cartItem.quantity++;
    }
    const newSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubTotal(newSubTotal);
    setCartItems([...cartItems]);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    }
    if (existingItem) {
      setCartItems([...cartItems]);
    } else {
      const newItem = { ...product };
      setCartItems([...cartItems, newItem]);
    }
  };
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  //Thêm vào giỏ hàng
  useEffect(() => {
    const newSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubTotal(newSubTotal);
  }, [cartItems]);

  // Sử dụng useEffect để lấy dữ liệu từ API khi component được render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/products");
        setProducts(response.data); // Cập nhật danh sách sản phẩm
        setDisplayedItems(response.data.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [numItem]);

  const [isLoading, setIsLoading] = useState(false);//// Nó được sử dụng để xác định xem quá trình tải dữ liệu đang diễn ra hay không.
  const [filterProduct, setFilterProduct] = useState([]); // Danh sách sản phẩm sau khi lọc
  const [searchItem, setSearchItem] = useState(""); // Nó lưu trữ giá trị của ô tìm kiếm sản phẩm.
  // Hàm xử lý việc tìm sản phẩm theo tên
  const handleSearchInputChange = (event) => {
    setSearchItem(event.target.value.toLowerCase());
  }

  const handleSearchButtonClick =  () => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredItems = products.filter((product) =>
              product.name.toLowerCase().includes(searchItem.toLowerCase())
          ////được sử dụng để kiểm tra xem giá trị của searchItem có xuất hiện trong tên sản phẩm (product.name) hay không.
      );
      setFilterProduct(filteredItems);////filterProduct được cập nhật bằng setFilterProduct(filteredItems) để lưu trữ danh sách sản phẩm đã lọc.
      setDisplayedItems(filteredItems.slice(0, numItem));
      //// được sử dụng để cập nhật danh sách sản phẩm được hiển thị (cắt số lượng sản phẩm theo numItem).
      setIsLoading(false);
    }, 1000);
  };

  // Hàm xử lý việc lọc sản phẩm theo giá
  const handlePriceFilter = (event) => {
    const selectPrice = event.target.value;
    let filteredItems = [...products];
    ////Ban đầu, một bản sao của danh sách products được tạo bằng cách sử dụng toán tử spread ([...products]).
    /////Đoạn mã let filteredItems = [...products]; được sử dụng để tạo một bản sao của mảng products và lưu trữ nó trong biến filteredItems.
//Bản sao này được tạo ra để lưu trữ danh sách sản phẩm sau khi áp dụng các bộ lọc, và nó sẽ chứa các sản phẩm thỏa mãn điều kiện lọc được áp dụng trong mã tiếp theo.
//Nếu bạn thực hiện các thay đổi trên filteredItems, nó sẽ không ảnh hưởng đến products ban đầu. Điều này cho phép bạn duy trì danh sách sản phẩm gốc nguyên vẹn trong khi vẫn có thể làm việc với danh sách đã được lọc mà không gây ảnh hưởng đến danh sách gốc.
///Do đó, filteredItems được sử dụng để lưu giữ giá trị sau khi lọc và để thực hiện các hoạt động liên quan đến danh sách đã lọc.
    if (selectPrice === "all") {
      setFilterProduct([]); // Nếu chọn "Tất cả", không áp dụng bộ lọc
    } else if (selectPrice === "< 100k") {
      filteredItems = filteredItems.filter((product) => product.price < 100000); // Lọc sản phẩm có giá dưới 100k
    } else if (selectPrice === "100 - 200k") {
      filteredItems = filteredItems.filter(
        (product) => product.price >= 100000 && product.price <= 200000
      ); // Lọc sản phẩm có giá từ 100k đến 200k
    } else if (selectPrice === "> 300k") {
      filteredItems = filteredItems.filter(
        (product) => product.price >= 300000
      ); // Lọc sản phẩm có giá trên 300k
    }
    setTimeout(() => {
      setFilterProduct(filteredItems);
      setDisplayedItems(filteredItems.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị sau khi lọc và cắt số lượng sản phẩm
    }, 1000);
  };
  // Hàm xử lý việc lọc sản phẩm theo loại
  const handleNameFilter = (event) => {
    const selectType = event.target.value;
    let filteredItems = [...products];

    if (selectType === "all") {
      setFilterProduct([]); // Nếu chọn "Tất cả", không áp dụng bộ lọc
    } else if (selectType === "Quần") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Quần"
      ); // Lọc sản phẩm thuộc loại "quần"
    } else if (selectType === "Áo") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Áo"
      ); // Lọc sản phẩm thuộc loại "áo"
    } else if (selectType === "Giày") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Giày"
      ); // Lọc sản phẩm thuộc loại "phụ kiện"
    } else if (selectType === "Ví") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Ví"
      ); // Lọc sản phẩm thuộc loại "phụ kiện"
    } else if (selectType === "Đồng hồ") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Đồng hồ"
      ); // Lọc sản phẩm thuộc loại "phụ kiện"
    } else if (selectType === "Túi") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Túi"
      ); // Lọc sản phẩm thuộc loại "phụ kiện"
    }
    else if (selectType === "Mũ") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Mũ"
      ); // Lọc sản phẩm thuộc loại "phụ kiện"
    }
    else if (selectType === "Kính") {
      filteredItems = filteredItems.filter(
        (product) => product.category === "Kính"
      ); // Lọc sản phẩm thuộc loại "phụ kiện"
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
    //////[...filterProduct] tạo ra một bản sao giống y hệt mảng gốc Toán tử spread (...) được sử dụng để sao chép các phần tử từ mảng filterProduct vào một mảng mới.
    // Khi sử dụng toán tử spread trong trường hợp này, một bản sao hoàn toàn độc lập của filterProduct được tạo ra.
    ///Việc tạo bản sao là quan trọng vì nó đảm bảo rằng sortedItems và filterProduct không tham chiếu đến cùng một đối tượng mảng. 
    ////Điều này đảm bảo rằng thay đổi hoặc sắp xếp các phần tử trong sortedItems không ảnh hưởng đến filterProduct ban đầu.
    /// và sản phẩm sau khi search đc lưu vào biến sortedItems

    if (sortOption === "asc") {
      sortedItems.sort((a, b) => a.price - b.price); // Sắp xếp từ thấp đến cao
    } else if (sortOption === "desc") {
      sortedItems.sort((a, b) => b.price - a.price); // Sắp xếp từ cao đến thấp
    }

    setTimeout(() => {
      setFilterProduct(sortedItems);
      setDisplayedItems(sortedItems.slice(0, numItem)); // Cập nhật danh sách sản phẩm hiển thị sau khi sắp xếp và cắt số lượng sản phẩm
    }, 2000);
  }; // Trả về CartContext.Provider với giá trị context là displayedItems và handlePriceFilter
  return (
    <CartContext.Provider
      value={{
        subTotal,
        setSubTotal,
        setQuantity,
        quantity,
        handlePlus,
        handleMinus,
        handleRemoveItem,
        cartItems,
        setCartItems,
        removeFromCart, 
        formatPrice,
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
