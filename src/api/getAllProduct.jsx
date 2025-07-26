import axios from "axios";
const BaseURL = "https://dummyjson.com";

export const getAllProduct = async () => {
  const url = `${BaseURL}/products`;
  try {
    const { data } = await axios.get(url);
    data.products.filter(
      (product) => (product.price = Math.floor(product.price) + 100)
    );
    return data.products;
  } catch (err) {
    return err;
  }
};
