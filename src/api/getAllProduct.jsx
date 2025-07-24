import axios from "axios";
const BaseURL = "https://dummyjson.com";

export const getAllProduct = async () => {
  const url = `${BaseURL}/products`;
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data.products;
  } catch (err) {
    return err;
  }
};
