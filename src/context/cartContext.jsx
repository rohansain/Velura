import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [{ cart }, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
