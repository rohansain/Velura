import { createContext, useContext, useReducer } from "react";
import { FavouriteReducer } from "../Reducer/FavouriteReducer";
const FavouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
  const initialState = {
    Favourite: [],
  };

  const [{ Favourite }, FavouriteDispatch] = useReducer(
    FavouriteReducer,
    initialState
  );
  return (
    <FavouriteContext.Provider value={{ Favourite, FavouriteDispatch }}>
      {children}
    </FavouriteContext.Provider>
  );
};

const useFavourite = () => useContext(FavouriteContext);
export { useFavourite, FavouriteProvider };
