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
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images} alt="shoes" />
      </div>
      <div className="card-details flex flex-col flex-1">
        <div className="card-title text-sm">{product.title}</div>
        <div className="card-description flex-1">
          <p className="card-des">{product.slug}</p>
          <p className="card-price">{product.price}</p>
        </div>
        <div className="cta-btn mt-auto m">
          <button
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
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
