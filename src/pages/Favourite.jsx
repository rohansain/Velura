import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useFavourite } from "../context/FavouriteContext";

const Favourite = () => {
  const { Favourite } = useFavourite();
  return (
    <>
      <Navbar />
      {Favourite.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
export default Favourite;
