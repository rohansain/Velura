import Navbar from "../components/Navbar";
import { getAllProduct } from "../api/getAllProduct";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/cartContext";
import { getAllCategories } from "../api/getAllCategories";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { cart } = useCart();
  // console.log(cart);

  const onCategoryClick = (category) => {
    if (category.toLowerCase() === "all") {
      setProducts(allProducts);
      console.log("Showing all products");
    } else {
      const filterByCategory = allProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );

      setProducts(filterByCategory);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProduct();
        const categories = await getAllCategories();
        setProducts(products);
        setAllProducts(products); //just for backup and restore data
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main className=" pt-8">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.length > 0 &&
            categories.map((category) => (
              <div
                key={category.slug}
                className="hover:cursor-pointer text-white font-semibold rounded-full bg-gradient-to-r from-pink-400 to-rose-400 px-6 py-3 hover:from-pink-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-pink-200/50 hover:shadow-pink-300/60 border border-pink-300/20"
                onClick={() => onCategoryClick(category.name)}
              >
                {category.name}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No Product found, Check with another category</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
