import { findTotalPrice } from "../utils/findTotalPrice";
import { useCart } from "../context/cartContext";
const Pricebar = () => {
  const { cart } = useCart();
  const totalPrice = findTotalPrice(cart);
  const deliveryCharget = totalPrice > 500 ? 0 : 49;
  const discount = Math.floor(totalPrice * 0.1);
  return (
    <div className="bg-white rounded-lg shadow border p-6 max-w-md h-fit">
      <div className="card-details">
        <div className="card-title border-b border-gray-300 pb-3 mb-4 text-lg font-semibold text-gray-900">
          Price Details
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price {cart.length} items</span>
            <span className="text-gray-900">Rs. {totalPrice}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Discount</span>
            <span className="text-green-600">- {discount}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Delivery Charges</span>
            <span className="text-gray-600">{deliveryCharget}</span>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-900">
            TOTAL AMOUNT
          </span>
          <span className="text-lg font-bold text-gray-900">
            {deliveryCharget + totalPrice - discount}
          </span>
        </div>

        <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-800">
            You will save Rs. 500 on this order
          </p>
        </div>

        <div className="cta-btn">
          <button className="w-full bg-pink-500  hover:bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red -600 transition-colors duration-200">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricebar;
