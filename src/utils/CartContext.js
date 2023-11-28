import { createContext, useState, useEffect } from "react";
import axios from "axios";

// tạo 1 Context có tên là CartContext
export const CartContext = createContext();
// Tạo hàm CartProvider
export function CartProvider({ children, numItem }) {
  // tạo state
  const [products, setProducts] = useState([]); //state sản phẩm 
  const [displayedItems, setDisplayedItems] = useState([]);//state hiện thị sản phẩm 
  const [filterProduct, setFilterProduct] = useState([]);//state lọc sản phẩm
  // lấy API sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/products");
        setProducts(response.data);
        setDisplayedItems(response.data.slice(0, numItem));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [numItem]);

  // Lấy sự kiện giá
  const handlePriceFilter = (event) => {
    const selectPrice = event.target.value;
    // các điều kiện của giá
    if (selectPrice === "all") {
      setFilterProduct(products);
    } else if (selectPrice === "< 100k") {
      const filtered = products.filter((product) => product.price < 100);
      setFilterProduct(filtered);
    } else if (selectPrice === "100 - 200k") {
      const filtered = products.filter(
        (product) => product.price >= 100 && product.price <= 200
      );
      setFilterProduct(filtered);
    } else if (selectPrice === "> 300k") {
      const filtered = products.filter((product) => product.price >= 300);
      setFilterProduct(filtered);
    }
    setDisplayedItems(filterProduct);
  };

  // Lấy sử kiện của tên 
  const handleNameFilter = (event) => {
    const selectName = event.target.value;
    // điêuf kiện của tên sản phẩm 
    if (selectName === "all") {
      setFilterProduct(products)
    } else if (selectName === "áo") {
      const filtered = products.filter((product) => 
        product.name.includes("áo")
      )
      setFilterProduct(filtered);
    }else if (selectName === "quần") {
      const filtered = products.filter((product) => 
        product.name.includes("quần")
      )
      setFilterProduct(filtered);
    }
  }
  return (
    <CartContext.Provider
      value={{ displayedItems, handlePriceFilter, handleNameFilter }}
    >
      {children}
    </CartContext.Provider>
  );
}
