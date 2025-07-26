import { useCart } from "../context/cartContext";
import Navbar from "../components/Navbar";
import Pricebar from "../components/Pricebar";
import HorizontalProductCard from "../components/HorizontalProductCard";
import EmptyCart from "../components/EmptyCart";
import { useFavourite } from "../context/FavouriteContext";
import Wishlist from "../components/WishlistCard";
import { useEffect } from "react";
import EmptyWishlist from "../components/EmptyWishlist";
const Cart = () => {
  const { Favourite } = useFavourite();
  const { cart } = useCart();
  {
    console.log(cart.length);
    console.log(cart);
  }

  useEffect(() => {
    if (location.hash === "#wishlist") {
      setTimeout(() => {
        const wishlistElement = document.getElementById("wishlist");
        if (wishlistElement) {
          wishlistElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location.hash, Favourite]);
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-8">
        <h2 className="text-xl font-semibold">My Cart</h2>
        <div className="flex pt-6 gap-4 border">
          <div>
            {cart.length > 0 ? (
              cart.map((product) => (
                <HorizontalProductCard key={product.id} product={product} />
              ))
            ) : (
              <EmptyCart imageUrl="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
            )}
          </div>
          {cart.length > 0 && <Pricebar />}
        </div>
      </main>
      <div
        id="wishlist"
        className="flex flex-col items-center mt-4 border p-6 m-7"
      >
        <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>
        {Favourite.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-6 w-full">
            {Favourite.map((product) => (
              <Wishlist key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyWishlist />
        )}
      </div>
    </>
  );
};
export default Cart;
