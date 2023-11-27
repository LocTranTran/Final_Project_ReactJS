import { createContext, useState } from "react";

// tạo 1 Context có tên là CartContext
export const CartContext = createContext();

// Tạo hàm CartProvider
export function CartProvider({ children }) {
  // tạo state cart
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //thêm sản phẩm
  const addCard = (product) => {

  };
  //xóa sản phẩm
  const removeCard = (product) => {};

  return (
    <CartContext.Provider value={{products, cart, addCard, removeCard }}>
      {children}
    </CartContext.Provider>
  );
}
