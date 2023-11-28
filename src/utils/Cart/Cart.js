import React, { createContext, useContext, useState } from 'react';

// Tạo Context cho giỏ hàng
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

// Provider cho giỏ hàng
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider value={{ isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};