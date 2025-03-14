import { createContext } from 'react';

const CartContext = createContext<{
  cartItems: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
} | null>(null);

export default CartContext;
