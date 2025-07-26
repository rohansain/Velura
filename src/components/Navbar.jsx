import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b border-pink-100 text-gray-800 px-6 py-4 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-white/95">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
        >
          Velura
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/cart#wishlist"
            className="group relative p-2 rounded-full hover:bg-pink-50 transition-all duration-300 transform hover:scale-110"
          >
            <span className="material-symbols-outlined text-2xl text-gray-600 group-hover:text-pink-500 transition-colors duration-300">
              favorite
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/cart"
            className="group relative p-2 rounded-full hover:bg-pink-50 transition-all duration-300 transform hover:scale-110"
          >
            <span className="material-symbols-outlined text-2xl text-gray-600 group-hover:text-pink-500 transition-colors duration-300 cursor-pointer">
              shopping_cart
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <button className="group relative p-2 rounded-full hover:bg-pink-50 transition-all duration-300 transform hover:scale-110">
            <span className="material-symbols-outlined text-2xl text-gray-600 group-hover:text-pink-500 transition-colors duration-300 cursor-pointer">
              account_circle
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
