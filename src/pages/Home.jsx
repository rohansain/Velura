import Navbar from "../components/Navbar";
import { getAllProduct } from "../api/getAllProduct";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProduct();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-wrap gap-8 justify-center pt-8">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        );
      </main>
    </>
  );
};

export default Home;
