import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useFavourite } from "../context/FavouriteContext";
import { findProductInCart } from "../utils/findProductInCart";
const HorizontalProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const removeProduct = (product) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { product },
    });
  };
  const navigate = useNavigate();
  const { Favourite, FavouriteDispatch } = useFavourite();
  const isProductInFavourite = findProductInCart(Favourite, product.id);
  const addToWishlist = (product) => {
    !isProductInFavourite
      ? FavouriteDispatch({
          type: "ADD_TO_Favourite",
          payload: { product },
        })
      : navigate("/favourite");
    removeProduct(product);
  };
  return (
    <>
      <div className="card-horizontal d-flex shadow">
        <div className="card-hori-image-container relative">
          <img className="card-image" src={product.images} alt="shoes" />
        </div>
        <div className="card-details d-flex direction-column">
          <div className="card-title">{product.title}</div>
          <div className="card-description">
            <p className="card-des">{product.slug}</p>
            <p className="card-price">{product.price}</p>
          </div>
          <div className="quantity-container d-flex gap">
            <p className="q-title">Quantity: </p>
            <div className="count-container d-flex align-center gap">
              <button className="count">-</button>
              <span className="count-value">1</span>
              <button className="count">+</button>
            </div>
          </div>
          <div className="cta-btn d-flex gap">
            <div className="cta-btn">
              <button
                className="button hori-btn btn-primary btn-icon d- flex align-center justify-center gap cursor btn-margin  whitespace-nowrap"
                onClick={() => removeProduct(product)}
              >
                Remove From Cart
              </button>
            </div>
            <div className="cta-btn">
              <button
                className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin whitespace-nowrap"
                onClick={() => addToWishlist(product)}
              >
                {isProductInFavourite ? "Go to Wishlist" : "Move to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default HorizontalProductCard;
