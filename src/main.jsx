import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";
import { FavouriteProvider } from "./context/FavouriteContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavouriteProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavouriteProvider>
  </BrowserRouter>
);
