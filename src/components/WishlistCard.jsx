import { findProductInCart } from "../utils/findProductInCart";
import { useCart } from "../context/cartContext";
import { useFavourite } from "../context/FavouriteContext";
const WishlistCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const isProductInCart = findProductInCart(cart, product.id);
  const { FavouriteDispatch } = useFavourite();
  const removeWishlist = (product) => {
    FavouriteDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: { product },
    });
  };
  const useClick = (product) => {
    !isProductInCart
      ? cartDispatch({
          type: "ADD_TO_CART",
          payload: { product },
        })
      : navigate("/cart");
    removeWishlist(product);
  };
  return (
    <div className="card card-vertical d-flex direction-column relative">
      <div className="card-image-container relative">
        <img className="card-image" src={product.images} alt="card" />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
          <p className="card-des">{product.slug}</p>
          <p className="card-price">{product.price}</p>
        </div>
        <div className="cta-btn">
          <button
            className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin"
            onClick={() => useClick(product)}
          >
            Move To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default WishlistCard;
