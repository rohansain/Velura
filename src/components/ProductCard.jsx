import { useCart } from "../context/cartContext";
import { findProductInCart } from "../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();

  const navigate = useNavigate();
  const isProductInCart = findProductInCart(cart, product.id);
  const useClick = (product) => {
    !isProductInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : navigate("/cart");
  };
  return (
    <div className="card card-vertical d-flex direction-column relative shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white hover:bg-gray-50 border border-gray-100 hover:border-pink-200">
      <div className="card-image-container overflow-hidden">
        <img
          className="card-image hover:scale-105 transition-transform duration-300"
          src={product.images}
          alt="shoes"
        />
      </div>
      <div className="card-details flex flex-col flex-1">
        <div className="card-title text-sm font-semibold text-gray-800 hover:text-pink-600 transition-colors duration-300">
          {product.title}
        </div>
        <div className="card-description flex-1">
          <p className="card-des text-gray-500 capitalize">{product.slug}</p>
          <p className="card-price font-bold text-pink-600">₹{product.price}</p>
        </div>
        <div className="cta-btn mt-auto m">
          <button
            className={`button btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isProductInCart
                ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-200"
                : "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-pink-200"
            }`}
            onClick={() => useClick(product)}
          >
            <span className="material-symbols-outlined">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isProductInCart ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
