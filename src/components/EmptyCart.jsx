import { useNavigate } from "react-router-dom";
const EmptyCart = ({ imageUrl }) => {
  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-40 h-40 mb-6">
        <img
          src={imageUrl}
          alt="Empty cart illustration"
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Looks like you haven't added anything to your cart yet. Start shopping
        to fill it up!
      </p>

      <button
        onClick={handleContinueShopping}
        className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
