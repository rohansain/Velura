const EmptyWishlist = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-24 h-24 mb-4 text-gray-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-600 mb-2">
        Your wishlist is empty
      </h3>
      <p className="text-gray-400 text-center mb-4">
        Items you add to your wishlist will appear here
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-200"
      >
        Browse Products
      </button>
    </div>
  );
};

export default EmptyWishlist;
