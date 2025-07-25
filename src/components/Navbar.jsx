import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-pink-50 text-black px-6 py-4">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="text-3xl font-bold">
          Velura
        </Link>

        <nav className="flex items-center gap-4 text-2xl">
          <Link to="/favourite">
            <span className="material-symbols-outlined cursor-pointer">
              Favourite
            </span>
          </Link>
          <Link to="/cart">
            <span className="material-symbols-outlined cursor-pointer">
              shopping_cart
            </span>
          </Link>
          <span className="material-symbols-outlined cursor-pointer">
            account_circle
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
