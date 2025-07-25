import { useCart } from "../context/cartContext";
import Navbar from "../components/Navbar";
import Pricebar from "../components/Pricebar";
import HorizontalProductCard from "../components/HorizontalProductCard";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cart } = useCart();
  {
    console.log(cart.length);
    console.log(cart);
  }
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-8">
        <h2 className="text-xl">My Cart</h2>
        <div className="flex pt-6 gap-4">
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
    </>
  );
};
export default Cart;
